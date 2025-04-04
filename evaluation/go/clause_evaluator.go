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

package evaluation

import (
	"strconv"
	"strings"

	"github.com/blang/semver"

	featureproto "github.com/bucketeer-io/bucketeer/proto/feature"
)

type clauseEvaluator struct {
	segmentEvaluator
	dependencyEvaluator
}

func (c *clauseEvaluator) Evaluate(
	targetValue string,
	clause *featureproto.Clause,
	userID string,
	segmentUsers []*featureproto.SegmentUser,
	flagVariations map[string]string,
) (bool, error) {
	switch clause.Operator {
	case featureproto.Clause_EQUALS:
		// TODO: this should only be one value or equals makes no sense.
		return c.equals(targetValue, clause.Values), nil
	case featureproto.Clause_IN:
		return c.in(targetValue, clause.Values), nil
	case featureproto.Clause_STARTS_WITH:
		return c.startsWith(targetValue, clause.Values), nil
	case featureproto.Clause_ENDS_WITH:
		return c.endsWith(targetValue, clause.Values), nil
	case featureproto.Clause_SEGMENT:
		return c.segmentEvaluator.Evaluate(clause.Values, userID, segmentUsers), nil
	case featureproto.Clause_GREATER:
		return c.greater(targetValue, clause.Values), nil
	case featureproto.Clause_GREATER_OR_EQUAL:
		return c.greaterOrEqual(targetValue, clause.Values), nil
	case featureproto.Clause_LESS:
		return c.less(targetValue, clause.Values), nil
	case featureproto.Clause_LESS_OR_EQUAL:
		return c.lessOrEqual(targetValue, clause.Values), nil
	case featureproto.Clause_BEFORE:
		return c.before(targetValue, clause.Values), nil
	case featureproto.Clause_AFTER:
		return c.after(targetValue, clause.Values), nil
	case featureproto.Clause_FEATURE_FLAG:
		return c.dependencyEvaluator.Evaluate(clause.Attribute, clause.Values, flagVariations)
	case featureproto.Clause_PARTIALLY_MATCH:
		return c.partiallyMatches(targetValue, clause.Values), nil
	}
	return false, nil
}

func (c *clauseEvaluator) equals(targetValue string, values []string) bool {
	for i := range values {
		if targetValue == values[i] {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) partiallyMatches(targetValue string, values []string) bool {
	for i := range values {
		if strings.Contains(targetValue, values[i]) {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) in(targetValue string, values []string) bool {
	for i := range values {
		if targetValue == values[i] {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) startsWith(targetValue string, values []string) bool {
	for i := range values {
		if strings.HasPrefix(targetValue, values[i]) {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) endsWith(targetValue string, values []string) bool {
	for i := range values {
		if strings.HasSuffix(targetValue, values[i]) {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) greater(targetValue string, values []string) bool {
	floatTarget, floatValues, err := c.parseFloat(targetValue, values)
	if err == nil {
		for _, value := range floatValues {
			if floatTarget > value {
				return true
			}
		}
		return false
	}
	semverTarget, semverValues, err := c.parseSemver(targetValue, values)
	if err == nil {
		for _, value := range semverValues {
			if semverTarget.GT(value) {
				return true
			}
		}
		return false
	}
	for _, value := range values {
		if targetValue > value {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) greaterOrEqual(targetValue string, values []string) bool {
	floatTarget, floatValues, err := c.parseFloat(targetValue, values)
	if err == nil {
		for _, value := range floatValues {
			if floatTarget >= value {
				return true
			}
		}
		return false
	}
	semverTarget, semverValues, err := c.parseSemver(targetValue, values)
	if err == nil {
		for _, value := range semverValues {
			if semverTarget.GTE(value) {
				return true
			}
		}
		return false
	}
	for _, value := range values {
		if targetValue >= value {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) less(targetValue string, values []string) bool {
	floatTarget, floatValues, err := c.parseFloat(targetValue, values)
	if err == nil {
		for _, value := range floatValues {
			if floatTarget < value {
				return true
			}
		}
		return false
	}
	semverTarget, semverValues, err := c.parseSemver(targetValue, values)
	if err == nil {
		for _, value := range semverValues {
			if semverTarget.LT(value) {
				return true
			}
		}
		return false
	}
	for _, value := range values {
		if targetValue < value {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) lessOrEqual(targetValue string, values []string) bool {
	floatTarget, floatValues, err := c.parseFloat(targetValue, values)
	if err == nil {
		for _, value := range floatValues {
			if floatTarget <= value {
				return true
			}
		}
		return false
	}
	semverTarget, semverValues, err := c.parseSemver(targetValue, values)
	if err == nil {
		for _, value := range semverValues {
			if semverTarget.LTE(value) {
				return true
			}
		}
		return false
	}
	for _, value := range values {
		if targetValue <= value {
			return true
		}
	}
	return false
}

func (c *clauseEvaluator) before(targetValue string, values []string) bool {
	intTarget, intValues, err := c.parseInt(targetValue, values)
	if err == nil {
		for _, value := range intValues {
			if intTarget < value {
				return true
			}
		}
	}
	return false
}

func (c *clauseEvaluator) after(targetValue string, values []string) bool {
	intTarget, intValues, err := c.parseInt(targetValue, values)
	if err == nil {
		for _, value := range intValues {
			if intTarget > value {
				return true
			}
		}
	}
	return false
}

func (c *clauseEvaluator) parseInt(targetValue string, values []string) (int64, []int64, error) {
	intTarget, err := strconv.ParseInt(targetValue, 10, 64)
	if err != nil {
		return -1, nil, err
	}
	intValues := make([]int64, 0, len(values))
	for _, value := range values {
		v, err := strconv.ParseInt(value, 10, 64)
		if err == nil {
			intValues = append(intValues, v)
		}
	}
	return intTarget, intValues, nil
}

func (c *clauseEvaluator) parseFloat(targetValue string, values []string) (float64, []float64, error) {
	floatTarget, err := strconv.ParseFloat(targetValue, 64)
	if err != nil {
		return -1, nil, err
	}
	floatValues := make([]float64, 0, len(values))
	for _, value := range values {
		v, err := strconv.ParseFloat(value, 64)
		if err == nil {
			floatValues = append(floatValues, v)
		}

	}
	return floatTarget, floatValues, nil
}

func (c *clauseEvaluator) parseSemver(targetValue string, values []string) (semver.Version, []semver.Version, error) {
	targetValueWithoutV, targetHasV := strings.CutPrefix(targetValue, "v")
	versionTarget, err := semver.Parse(targetValueWithoutV)
	if err != nil {
		return semver.Version{}, nil, err
	}
	versionValues := make([]semver.Version, 0, len(values))
	if targetHasV {
		for _, value := range values {
			// if target value has v prefix, compare only values with v prefix
			valueWithoutV, valueHasV := strings.CutPrefix(value, "v")
			if valueHasV {
				v, err := semver.Parse(valueWithoutV)
				if err == nil {
					versionValues = append(versionValues, v)
				}
			}
		}
		return versionTarget, versionValues, nil
	}
	for _, value := range values {
		// if target value has no v prefix, compare only values without v prefix
		v, err := semver.Parse(value)
		if err == nil {
			versionValues = append(versionValues, v)
		}
	}
	return versionTarget, versionValues, nil
}
