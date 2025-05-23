// Copyright 2025 The Bucketeer Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package domain

import (
	"time"

	"github.com/jinzhu/copier"
	"google.golang.org/protobuf/types/known/wrapperspb"

	"github.com/bucketeer-io/bucketeer/proto/common"
	"github.com/bucketeer-io/bucketeer/proto/feature"
)

// Update returns a new Feature with the updated values.
func (f *Feature) Update(
	name, description *wrapperspb.StringValue,
	tags *common.StringListValue,
	enabled *wrapperspb.BoolValue,
	archived *wrapperspb.BoolValue,
	defaultStrategy *feature.Strategy,
	offVariation *wrapperspb.StringValue,
	resetSamplingSeed bool,
	prerequisiteChanges []*feature.PrerequisiteChange,
	targetChanges []*feature.TargetChange,
	ruleChanges []*feature.RuleChange,
	variationChanges []*feature.VariationChange,
	tagChanges []*feature.TagChange,
) (*Feature, error) {
	updated := &Feature{}
	if err := copier.Copy(updated, f); err != nil {
		return nil, err
	}

	// We split variation changes into two separate steps to handle dependencies correctly:
	//
	// Step 1: Apply variation creations and updates first.
	// - This ensures newly created or updated variations exist when validating and applying other changes
	//   (e.g., rules, targets, offVariation, defaultStrategy).
	// - Without this step, validations referencing newly created variations would fail.
	//
	// Step 2: Apply variation deletions last.
	// - Deleting variations last ensures that any references to deleted variations (including references
	//   created or updated in the same request) are properly cleaned up.
	// - If deletions were processed earlier, we could end up with invalid references to non-existent variations.
	//
	// This two-step approach maintains data integrity and prevents invalid intermediate states.

	// Step 1: Apply variation creations and updates first
	var variationCreationsAndUpdates, variationDeletions []*feature.VariationChange
	for _, change := range variationChanges {
		if change.ChangeType == feature.ChangeType_DELETE {
			variationDeletions = append(variationDeletions, change)
		} else {
			variationCreationsAndUpdates = append(variationCreationsAndUpdates, change)
		}
	}

	if err := updated.validateVariationChanges(variationCreationsAndUpdates); err != nil {
		return nil, err
	}
	if err := updated.applyVariationChanges(variationCreationsAndUpdates); err != nil {
		return nil, err
	}

	// Step 2: Validate all other changes now that new variations exist
	if err := updated.validateAllChanges(
		name,
		defaultStrategy,
		offVariation,
		prerequisiteChanges,
		targetChanges,
		ruleChanges,
	); err != nil {
		return nil, err
	}

	// Apply general updates
	if err := updated.applyGeneralUpdates(
		name,
		description,
		tags,
		enabled,
		archived,
		defaultStrategy,
		offVariation,
		resetSamplingSeed,
	); err != nil {
		return nil, err
	}

	// Apply remaining granular updates (prerequisites, targets, rules, tags)
	if err := updated.applyGranularChanges(
		prerequisiteChanges,
		targetChanges,
		ruleChanges,
		tagChanges,
	); err != nil {
		return nil, err
	}

	// Step 3: Apply variation deletions last
	if err := updated.validateVariationChanges(variationDeletions); err != nil {
		return nil, err
	}
	if err := updated.applyVariationChanges(variationDeletions); err != nil {
		return nil, err
	}

	// Increment version and update timestamp if there are changes
	if updated.hasChangesComparedTo(f) {
		if err := updated.IncrementVersion(); err != nil {
			return nil, err
		}
		updated.UpdatedAt = time.Now().Unix()
	}

	return updated, nil
}

// validateAllChanges ensures all inputs are valid before applying any changes
func (f *Feature) validateAllChanges(
	name *wrapperspb.StringValue,
	defaultStrategy *feature.Strategy,
	offVariation *wrapperspb.StringValue,
	prerequisiteChanges []*feature.PrerequisiteChange,
	targetChanges []*feature.TargetChange,
	ruleChanges []*feature.RuleChange,
) error {
	// Validate name if provided
	if name != nil && name.Value == "" {
		return errNameEmpty
	}

	// Validate default strategy if provided
	if defaultStrategy != nil {
		if err := validateStrategy(defaultStrategy, f.Variations); err != nil {
			return err
		}
	}

	// Validate off variation if provided
	if offVariation != nil {
		if err := validateOffVariation(offVariation.Value, f.Variations); err != nil {
			return err
		}
	}

	// Validate granular changes
	for _, change := range prerequisiteChanges {
		if err := validatePrerequisite(change.Prerequisite.FeatureId, change.Prerequisite.VariationId); err != nil {
			return err
		}
	}

	for _, change := range targetChanges {
		if err := validateTargets([]*feature.Target{change.Target}, f.Variations); err != nil {
			return err
		}
	}

	for _, change := range ruleChanges {
		if err := validateRules([]*feature.Rule{change.Rule}, f.Variations); err != nil {
			return err
		}
	}

	return nil
}

// applyGeneralUpdates applies simple field updates
func (f *Feature) applyGeneralUpdates(
	name, description *wrapperspb.StringValue,
	tags *common.StringListValue,
	enabled *wrapperspb.BoolValue,
	archived *wrapperspb.BoolValue,
	defaultStrategy *feature.Strategy,
	offVariation *wrapperspb.StringValue,
	resetSamplingSeed bool,
) error {
	if name != nil {
		f.Name = name.Value
	}
	// Optional field
	if description != nil {
		f.Description = description.Value
	}
	// Optional field
	if tags != nil {
		f.Tags = unique(tags.Values)
	}
	if enabled != nil {
		if enabled.Value {
			_ = f.Enable()
		} else {
			_ = f.Disable()
		}
	}
	if archived != nil {
		if archived.Value {
			_ = f.Archive()
		} else {
			_ = f.Unarchive()
		}
	}
	if defaultStrategy != nil {
		f.DefaultStrategy = defaultStrategy
	}
	if offVariation != nil {
		f.OffVariation = offVariation.Value
	}
	if resetSamplingSeed {
		if err := f.ResetSamplingSeed(); err != nil {
			return err
		}
	}
	return nil
}

// applyVariationChanges handles only variation creations, updates, and deletions.
func (f *Feature) applyVariationChanges(
	variationChanges []*feature.VariationChange,
) error {
	for _, change := range variationChanges {
		switch change.ChangeType {
		case feature.ChangeType_CREATE:
			if err := f.AddVariation(
				change.Variation.Id,
				change.Variation.Value,
				change.Variation.Name,
				change.Variation.Description,
			); err != nil {
				return err
			}
		case feature.ChangeType_UPDATE:
			if err := f.ChangeVariation(change.Variation); err != nil {
				return err
			}
		case feature.ChangeType_DELETE:
			if err := f.RemoveVariation(change.Variation.Id); err != nil {
				return err
			}
		}
	}
	return nil
}

// applyGranularChanges handles prerequisites, targets, rules, and tags updates.
func (f *Feature) applyGranularChanges(
	prerequisiteChanges []*feature.PrerequisiteChange,
	targetChanges []*feature.TargetChange,
	ruleChanges []*feature.RuleChange,
	tagChanges []*feature.TagChange,
) error {
	// Prerequisites
	for _, change := range prerequisiteChanges {
		switch change.ChangeType {
		case feature.ChangeType_CREATE:
			if err := f.AddPrerequisite(
				change.Prerequisite.FeatureId,
				change.Prerequisite.VariationId,
			); err != nil {
				return err
			}
		case feature.ChangeType_UPDATE:
			if err := f.ChangePrerequisiteVariation(
				change.Prerequisite.FeatureId,
				change.Prerequisite.VariationId,
			); err != nil {
				return err
			}
		case feature.ChangeType_DELETE:
			if err := f.RemovePrerequisite(
				change.Prerequisite.FeatureId,
			); err != nil {
				return err
			}
		}
	}

	// Individual Targets
	for _, change := range targetChanges {
		switch change.ChangeType {
		case feature.ChangeType_CREATE, feature.ChangeType_UPDATE:
			if err := f.AddTargetUsers(change.Target); err != nil {
				return err
			}
		case feature.ChangeType_DELETE:
			if err := f.RemoveTargetUsers(change.Target); err != nil {
				return err
			}
		}
	}

	// Custom Rules
	for _, change := range ruleChanges {
		switch change.ChangeType {
		case feature.ChangeType_CREATE:
			if err := f.AddRule(change.Rule); err != nil {
				return err
			}
		case feature.ChangeType_UPDATE:
			if err := f.ChangeRule(change.Rule); err != nil {
				return err
			}
		case feature.ChangeType_DELETE:
			if err := f.RemoveRule(change.Rule.Id); err != nil {
				return err
			}
		}
	}

	// Tags
	for _, change := range tagChanges {
		switch change.ChangeType {
		case feature.ChangeType_CREATE, feature.ChangeType_UPDATE:
			if err := f.AddTag(change.Tag); err != nil {
				return err
			}
		case feature.ChangeType_DELETE:
			if err := f.RemoveTag(change.Tag); err != nil {
				return err
			}
		}
	}

	return nil
}

// hasChangesComparedTo checks if there are any changes compared to the original feature
func (f *Feature) hasChangesComparedTo(other *Feature) bool {
	// Basic field comparisons
	if f.Name != other.Name ||
		f.Description != other.Description ||
		f.Enabled != other.Enabled ||
		f.Archived != other.Archived ||
		f.OffVariation != other.OffVariation ||
		f.SamplingSeed != other.SamplingSeed {
		return true
	}

	// Compare tags
	if len(f.Tags) != len(other.Tags) {
		return true
	}
	tagMap := make(map[string]struct{}, len(f.Tags))
	for _, tag := range f.Tags {
		tagMap[tag] = struct{}{}
	}
	for _, tag := range other.Tags {
		if _, exists := tagMap[tag]; !exists {
			return true
		}
	}

	// Compare prerequisites
	if len(f.Prerequisites) != len(other.Prerequisites) {
		return true
	}
	prereqMap := make(map[string]string, len(f.Prerequisites))
	for _, p := range f.Prerequisites {
		prereqMap[p.FeatureId] = p.VariationId
	}
	for _, p := range other.Prerequisites {
		if varID, exists := prereqMap[p.FeatureId]; !exists || varID != p.VariationId {
			return true
		}
	}

	// Compare targets
	if len(f.Targets) != len(other.Targets) {
		return true
	}
	targetMap := make(map[string]map[string]struct{}, len(f.Targets))
	for _, t := range f.Targets {
		userMap := make(map[string]struct{}, len(t.Users))
		for _, u := range t.Users {
			userMap[u] = struct{}{}
		}
		targetMap[t.Variation] = userMap
	}
	for _, t := range other.Targets {
		userMap, exists := targetMap[t.Variation]
		if !exists || len(userMap) != len(t.Users) {
			return true
		}
		for _, u := range t.Users {
			if _, exists := userMap[u]; !exists {
				return true
			}
		}
	}

	// Compare rules
	if len(f.Rules) != len(other.Rules) {
		return true
	}
	ruleMap := make(map[string]*feature.Rule, len(f.Rules))
	for _, r := range f.Rules {
		ruleMap[r.Id] = r
	}
	for _, r := range other.Rules {
		if existing, exists := ruleMap[r.Id]; !exists || !compareRules(existing, r) {
			return true
		}
	}

	// Compare variations
	if len(f.Variations) != len(other.Variations) {
		return true
	}
	variationMap := make(map[string]*feature.Variation, len(f.Variations))
	for _, v := range f.Variations {
		variationMap[v.Id] = v
	}
	for _, v := range other.Variations {
		if existing, exists := variationMap[v.Id]; !exists || !compareVariations(existing, v) {
			return true
		}
	}

	// Compare default strategy
	if !compareStrategies(f.DefaultStrategy, other.DefaultStrategy) {
		return true
	}

	return false
}

// compareRules compares two rules for equality
func compareRules(a, b *feature.Rule) bool {
	if a.Id != b.Id {
		return false
	}
	if !compareStrategies(a.Strategy, b.Strategy) {
		return false
	}
	if len(a.Clauses) != len(b.Clauses) {
		return false
	}
	clauseMap := make(map[string]*feature.Clause, len(a.Clauses))
	for _, c := range a.Clauses {
		clauseMap[c.Id] = c
	}
	for _, c := range b.Clauses {
		if existing, exists := clauseMap[c.Id]; !exists || !compareClauses(existing, c) {
			return false
		}
	}
	return true
}

// compareClauses compares two clauses for equality
func compareClauses(a, b *feature.Clause) bool {
	return a.Id == b.Id &&
		a.Attribute == b.Attribute &&
		a.Operator == b.Operator &&
		compareStringSlices(a.Values, b.Values)
}

// compareVariations compares two variations for equality
func compareVariations(a, b *feature.Variation) bool {
	return a.Id == b.Id &&
		a.Value == b.Value &&
		a.Name == b.Name &&
		a.Description == b.Description
}

// compareStrategies compares two strategies for equality
func compareStrategies(a, b *feature.Strategy) bool {
	if a == nil || b == nil {
		return a == b
	}
	if a.Type != b.Type {
		return false
	}
	switch a.Type {
	case feature.Strategy_FIXED:
		return a.FixedStrategy.Variation == b.FixedStrategy.Variation
	case feature.Strategy_ROLLOUT:
		if len(a.RolloutStrategy.Variations) != len(b.RolloutStrategy.Variations) {
			return false
		}
		variationMap := make(map[string]int32, len(a.RolloutStrategy.Variations))
		for _, v := range a.RolloutStrategy.Variations {
			variationMap[v.Variation] = v.Weight
		}
		for _, v := range b.RolloutStrategy.Variations {
			if weight, exists := variationMap[v.Variation]; !exists || weight != v.Weight {
				return false
			}
		}
		return true
	default:
		return false
	}
}

// compareStringSlices compares two string slices for equality
func compareStringSlices(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	valueMap := make(map[string]struct{}, len(a))
	for _, v := range a {
		valueMap[v] = struct{}{}
	}
	for _, v := range b {
		if _, exists := valueMap[v]; !exists {
			return false
		}
	}
	return true
}
