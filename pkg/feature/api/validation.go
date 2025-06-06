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

package api

import (
	"context"
	"errors"
	"regexp"

	"google.golang.org/genproto/googleapis/rpc/errdetails"

	"github.com/bucketeer-io/bucketeer/pkg/feature/command"
	"github.com/bucketeer-io/bucketeer/pkg/feature/domain"
	featuredomain "github.com/bucketeer-io/bucketeer/pkg/feature/domain"
	"github.com/bucketeer-io/bucketeer/pkg/locale"
	"github.com/bucketeer-io/bucketeer/pkg/uuid"
	envproto "github.com/bucketeer-io/bucketeer/proto/environment"
	featureproto "github.com/bucketeer-io/bucketeer/proto/feature"
)

const (
	maxPageSizePerRequest   = 100
	maxUserIDsLength        = 100000
	maxSegmentUsersDataSize = 2000000 // 2MB
	totalVariationWeight    = int32(100000)
)

var featureIDRegex = regexp.MustCompile("^[a-zA-Z0-9-]+$")

func validateCreateFeatureRequest(cmd *featureproto.CreateFeatureCommand, localizer locale.Localizer) error {
	if cmd.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if !featureIDRegex.MatchString(cmd.Id) {
		dt, err := statusInvalidID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Name == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	variationSize := len(cmd.Variations)
	if variationSize < 2 {
		dt, err := statusMissingFeatureVariations.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "variations"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(cmd.Tags) == 0 {
		dt, err := statusMissingFeatureTags.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "tags"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.DefaultOnVariationIndex == nil {
		dt, err := statusMissingDefaultOnVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "default_on_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if int(cmd.DefaultOnVariationIndex.Value) >= variationSize {
		dt, err := statusInvalidDefaultOnVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "default_on_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.DefaultOffVariationIndex == nil {
		dt, err := statusMissingDefaultOffVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "default_off_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if int(cmd.DefaultOffVariationIndex.Value) >= variationSize {
		dt, err := statusInvalidDefaultOffVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "default_off_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCreateFeatureRequestNoCommand(
	req *featureproto.CreateFeatureRequest,
	localizer locale.Localizer,
) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if !featureIDRegex.MatchString(req.Id) {
		dt, err := statusInvalidID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Name == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	variationSize := len(req.Variations)
	if variationSize < 2 {
		dt, err := statusMissingFeatureVariations.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "variations"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(req.Tags) == 0 {
		dt, err := statusMissingFeatureTags.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "tags"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.DefaultOnVariationIndex == nil {
		dt, err := statusMissingDefaultOnVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "default_on_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if int(req.DefaultOnVariationIndex.Value) >= variationSize {
		dt, err := statusInvalidDefaultOnVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "default_on_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.DefaultOffVariationIndex == nil {
		dt, err := statusMissingDefaultOffVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "default_off_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if int(req.DefaultOffVariationIndex.Value) >= variationSize {
		dt, err := statusInvalidDefaultOffVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "default_off_variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCreateSegmentRequest(cmd *featureproto.CreateSegmentCommand, localizer locale.Localizer) error {
	if cmd.Name == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCreateSegmentNoCommandRequest(
	req *featureproto.CreateSegmentRequest,
	localizer locale.Localizer,
) error {
	if req.Name == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateGetSegmentRequest(req *featureproto.GetSegmentRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateListSegmentsRequest(req *featureproto.ListSegmentsRequest, localizer locale.Localizer) error {
	if req.PageSize > maxPageSizePerRequest {
		dt, err := statusExceededMaxPageSizePerRequest.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "page_size"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateDeleteSegmentRequest(req *featureproto.DeleteSegmentRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateUpdateSegment(segmentID string, commands []command.Command, localizer locale.Localizer) error {
	if segmentID == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateUpdateSegmentCommands(commands, localizer)
}

func validateUpdateSegmentNoCommand(
	req *featureproto.UpdateSegmentRequest,
	localizer locale.Localizer,
) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Name != nil && req.Name.Value == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateUpdateSegmentCommands(commands []command.Command, localizer locale.Localizer) error {
	for _, cmd := range commands {
		switch c := cmd.(type) {
		case *featureproto.ChangeSegmentNameCommand:
			return validateChangeSegmentName(c, localizer)
		case *featureproto.ChangeSegmentDescriptionCommand:
			return nil
		case *featureproto.AddRuleCommand:
			return validateAddSegmentRule(c, localizer)
		case *featureproto.DeleteRuleCommand:
			return validateDeleteSegmentRule(c, localizer)
		case *featureproto.AddClauseCommand:
			return validateAddSegmentClauseCommand(c, localizer)
		case *featureproto.DeleteClauseCommand:
			return validateDeleteSegmentClauseCommand(c, localizer)
		case *featureproto.ChangeClauseAttributeCommand:
			return validateChangeClauseAttributeCommand(c, localizer)
		case *featureproto.ChangeClauseOperatorCommand:
			return validateChangeClauseOperatorCommand(c, localizer)
		case *featureproto.AddClauseValueCommand:
			return validateAddClauseValueCommand(c, localizer)
		case *featureproto.RemoveClauseValueCommand:
			return validateRemoveClauseValueCommand(c, localizer)
		default:
			dt, err := statusUnknownCommand.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
		Locale:  localizer.GetLocale(),
		Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
	})
	if err != nil {
		return statusInternal.Err()
	}
	return dt.Err()
}

func validateChangeSegmentName(cmd *featureproto.ChangeSegmentNameCommand, localizer locale.Localizer) error {
	if cmd.Name == "" {
		dt, err := statusMissingName.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "name"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateAddSegmentRule(cmd *featureproto.AddRuleCommand, localizer locale.Localizer) error {
	if cmd.Rule == nil {
		dt, err := statusMissingRule.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Rule.Id == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_Id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if err := uuid.ValidateUUID(cmd.Rule.Id); err != nil {
		dt, err := statusIncorrectUUIDFormat.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(cmd.Rule.Clauses) == 0 {
		dt, err := statusMissingRuleClause.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "clauses"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateClauses(cmd.Rule.Clauses, localizer)
}

func validateClauses(clauses []*featureproto.Clause, localizer locale.Localizer) error {
	for _, clause := range clauses {
		if clause.Attribute == "" {
			dt, err := statusMissingRuleClause.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_attribute"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		if len(clause.Values) == 0 {
			dt, err := statusMissingClauseValues.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_value"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	return nil
}

func validateDeleteSegmentRule(cmd *featureproto.DeleteRuleCommand, localizer locale.Localizer) error {
	if cmd == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Id == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateAddSegmentClauseCommand(cmd *featureproto.AddClauseCommand, localizer locale.Localizer) error {
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Clause == nil {
		dt, err := statusMissingRuleClause.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_clause"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateClauses([]*featureproto.Clause{cmd.Clause}, localizer)
}

func validateDeleteSegmentClauseCommand(cmd *featureproto.DeleteClauseCommand, localizer locale.Localizer) error {
	if cmd.Id == "" {
		dt, err := statusMissingClauseID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()

	}
	return nil
}

func validateChangeClauseAttributeCommand(
	cmd *featureproto.ChangeClauseAttributeCommand,
	localizer locale.Localizer,
) error {
	if cmd.Id == "" {
		dt, err := statusMissingClauseID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Attribute == "" {
		dt, err := statusMissingClauseAttribute.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_attribute"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()

	}
	return nil
}

func validateChangeClauseOperatorCommand(
	cmd *featureproto.ChangeClauseOperatorCommand,
	localizer locale.Localizer,
) error {
	if cmd.Id == "" {
		dt, err := statusMissingClauseID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateAddClauseValueCommand(cmd *featureproto.AddClauseValueCommand, localizer locale.Localizer) error {
	return validateClauseValueCommand(cmd.Id, cmd.RuleId, cmd.Value, localizer)
}

func validateRemoveClauseValueCommand(cmd *featureproto.RemoveClauseValueCommand, localizer locale.Localizer) error {
	return validateClauseValueCommand(cmd.Id, cmd.RuleId, cmd.Value, localizer)
}

func validateClauseValueCommand(clauseID string, ruleID string, value string, localizer locale.Localizer) error {
	if clauseID == "" {
		dt, err := statusMissingClauseID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if ruleID == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if value == "" {
		dt, err := statusMissingClauseValue.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "clause_value"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateAddSegmentUserRequest(req *featureproto.AddSegmentUserRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateSegmentUserState(req.Command.State, localizer)
}

func validateAddSegmentUserCommand(cmd *featureproto.AddSegmentUserCommand, localizer locale.Localizer) error {
	return validateUserIDs(cmd.UserIds, localizer)
}

func validateDeleteSegmentUserRequest(req *featureproto.DeleteSegmentUserRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateSegmentUserState(req.Command.State, localizer)
}

func validateSegmentUserState(state featureproto.SegmentUser_State, localizer locale.Localizer) error {
	switch state {
	case featureproto.SegmentUser_INCLUDED:
		return nil
	default:
		dt, err := statusUnknownSegmentUserState.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "user_state"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
}

func validateDeleteSegmentUserCommand(cmd *featureproto.DeleteSegmentUserCommand, localizer locale.Localizer) error {
	return validateUserIDs(cmd.UserIds, localizer)
}

func validateUserIDs(userIDs []string, localizer locale.Localizer) error {
	size := len(userIDs)
	if size == 0 {
		dt, err := statusMissingUserIDs.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if size > maxUserIDsLength {
		dt, err := statusExceededMaxUserIDsLength.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "user_id_length"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	for _, id := range userIDs {
		if id == "" {
			dt, err := statusMissingUserID.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_id"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	return nil
}

func validateGetSegmentUserRequest(req *featureproto.GetSegmentUserRequest, localizer locale.Localizer) error {
	if req.SegmentId == "" {
		dt, err := statusMissingSegmentID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "segment_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.UserId == "" {
		dt, err := statusMissingUserID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateListSegmentUsersRequest(req *featureproto.ListSegmentUsersRequest, localizer locale.Localizer) error {
	if req.SegmentId == "" {
		dt, err := statusMissingSegmentID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "segment_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.PageSize > maxPageSizePerRequest {
		dt, err := statusExceededMaxPageSizePerRequest.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "page_size"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateBulkUploadSegmentUsersRequest(
	req *featureproto.BulkUploadSegmentUsersRequest,
	localizer locale.Localizer,
) error {
	if req.SegmentId == "" {
		dt, err := statusMissingSegmentID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "segment_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateBulkUploadSegmentUsersNoCommandRequest(
	req *featureproto.BulkUploadSegmentUsersRequest,
	localizer locale.Localizer,
) error {
	if req.SegmentId == "" {
		dt, err := statusMissingSegmentID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "segment_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(req.Data) == 0 {
		dt, err := statusMissingSegmentUsersData.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_data"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(req.Data) > maxSegmentUsersDataSize {
		dt, err := statusExceededMaxSegmentUsersDataSize.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "user_data_state"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateSegmentUserState(req.State, localizer)
}

func validateBulkUploadSegmentUsersCommand(
	cmd *featureproto.BulkUploadSegmentUsersCommand,
	localizer locale.Localizer,
) error {
	if len(cmd.Data) == 0 {
		dt, err := statusMissingSegmentUsersData.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_data"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(cmd.Data) > maxSegmentUsersDataSize {
		dt, err := statusExceededMaxSegmentUsersDataSize.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "user_data_state"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateSegmentUserState(cmd.State, localizer)
}

func validateBulkDownloadSegmentUsersRequest(
	req *featureproto.BulkDownloadSegmentUsersRequest,
	localizer locale.Localizer,
) error {
	if req.SegmentId == "" {
		dt, err := statusMissingSegmentID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "segment_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateSegmentUserState(req.State, localizer)
}

func validateEvaluateFeatures(req *featureproto.EvaluateFeaturesRequest, localizer locale.Localizer) error {
	if req.User == nil {
		dt, err := statusMissingUser.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.User.Id == "" {
		dt, err := statusMissingUserID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateDebugEvaluateFeatures(req *featureproto.DebugEvaluateFeaturesRequest, localizer locale.Localizer) error {
	if len(req.Users) == 0 {
		dt, err := statusMissingUser.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "users"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}

	for _, user := range req.Users {
		if user.Id == "" {
			dt, err := statusMissingUserID.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "user_id"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}

	if len(req.FeatureIds) == 0 {
		dt, err := statusMissingFeatureIDs.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "feature_ids"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}

	return nil
}

func validateGetFeatureRequest(req *featureproto.GetFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateGetFeaturesRequest(req *featureproto.GetFeaturesRequest, localizer locale.Localizer) error {
	if len(req.Ids) == 0 {
		dt, err := statusMissingIDs.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "ids"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	for _, id := range req.Ids {
		if id == "" {
			dt, err := statusMissingIDs.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "ids"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	return nil
}

func validateEnableFeatureRequest(req *featureproto.EnableFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateDisableFeatureRequest(req *featureproto.DisableFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateDeleteFeatureRequest(req *featureproto.DeleteFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

// We can't add or remove a variation when a progressive rollout is in progress, but changes can be made.
func (s *FeatureService) validateFeatureVariationsCommand(
	ctx context.Context,
	fs []*featureproto.Feature,
	environmentID string,
	f *featureproto.Feature,
	cmd command.Command,
	localizer locale.Localizer,
) error {
	switch cmd.(type) {
	case *featureproto.AddVariationCommand:
		if err := s.checkProgressiveRolloutInProgress(ctx, environmentID, f.Id, localizer); err != nil {
			return err
		}
		return nil
	case *featureproto.RemoveVariationCommand:
		if err := s.checkProgressiveRolloutInProgress(ctx, environmentID, f.Id, localizer); err != nil {
			return err
		}
		return validateVariationCommand(fs, f, localizer)
	case *featureproto.ChangeVariationValueCommand:
		return validateVariationCommand(fs, f, localizer)
	default:
		return nil
	}
}

func (s *FeatureService) checkProgressiveRolloutInProgress(
	ctx context.Context,
	environmentID, featureID string,
	localizer locale.Localizer,
) error {
	exists, err := s.existsRunningProgressiveRollout(ctx, featureID, environmentID)
	if err != nil {
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if exists {
		dt, err := statusProgressiveRolloutWaitingOrRunningState.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.AutoOpsProgressiveRolloutInProgress),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateArchiveFeatureRequest(
	req *featureproto.ArchiveFeatureRequest,
	localizer locale.Localizer,
) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateVariationCommand(fs []*featureproto.Feature, tgt *featureproto.Feature, localizer locale.Localizer) error {
	if domain.HasFeaturesDependsOnTargets([]*featureproto.Feature{tgt}, fs) {
		dt, err := statusInvalidChangingVariation.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "variation"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateUnarchiveFeatureRequest(req *featureproto.UnarchiveFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "command"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCloneFeatureRequest(req *featureproto.CloneFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Command.EnvironmentId == req.EnvironmentId {
		dt, err := statusIncorrectDestinationEnvironment.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "environment"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCloneFeatureRequestNoCommand(req *featureproto.CloneFeatureRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.TargetEnvironmentId == req.EnvironmentId {
		dt, err := statusIncorrectDestinationEnvironment.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "environment"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateUpdateFeatureTargetingRequest(
	req *featureproto.UpdateFeatureTargetingRequest,
	localizer locale.Localizer,
) error {
	if req.Id == "" {
		dt, err := statusMissingID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.From == featureproto.UpdateFeatureTargetingRequest_UNKNOWN {
		dt, err := statusMissingFrom.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "from"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func (s *FeatureService) validateFeatureTargetingCommand(
	ctx context.Context,
	from featureproto.UpdateFeatureTargetingRequest_From,
	environmentID string,
	fs []*featureproto.Feature,
	tarF *featureproto.Feature,
	cmd command.Command,
	localizer locale.Localizer,
) error {
	switch c := cmd.(type) {
	case *featureproto.AddRuleCommand:
		return validateRule(fs, tarF, c.Rule, localizer)
	case *featureproto.ChangeRuleStrategyCommand:
		return validateChangeRuleStrategy(tarF.Variations, c, localizer)
	case *featureproto.ChangeDefaultStrategyCommand:
		return s.validateChangeDefaultStrategy(ctx, from, environmentID, tarF.Id, tarF.Variations, c, localizer)
	case *featureproto.ChangeFixedStrategyCommand:
		return validateChangeFixedStrategy(c, localizer)
	case *featureproto.ChangeRolloutStrategyCommand:
		return validateChangeRolloutStrategy(tarF.Variations, c, localizer)
	case *featureproto.AddPrerequisiteCommand:
		return validateAddPrerequisite(fs, tarF, c.Prerequisite, localizer)
	case *featureproto.ChangePrerequisiteVariationCommand:
		return validateChangePrerequisiteVariation(fs, c.Prerequisite, localizer)
	default:
		return nil
	}
}

func validateRule(
	fs []*featureproto.Feature,
	tarF *featureproto.Feature,
	rule *featureproto.Rule,
	localizer locale.Localizer) error {
	if rule.Id == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if err := uuid.ValidateUUID(rule.Id); err != nil {
		dt, err := statusIncorrectUUIDFormat.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	// Check dependency.
	tarF.Rules = append(tarF.Rules, rule)
	defer func() { tarF.Rules = tarF.Rules[:len(tarF.Rules)-1] }()
	if err := featuredomain.ValidateFeatureDependencies(fs); err != nil {
		if errors.Is(err, featuredomain.ErrCycleExists) {
			dt, err := statusCycleExists.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "rule"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateStrategy(tarF.Variations, rule.Strategy, localizer)
}

func validateChangeRuleStrategy(
	variations []*featureproto.Variation,
	cmd *featureproto.ChangeRuleStrategyCommand,
	localizer locale.Localizer,
) error {
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateStrategy(variations, cmd.Strategy, localizer)
}

// We can't change the default strategy when there is a progressive rollout in progress.
// Otherwise, it could conflict with the rollout rules.
func (s *FeatureService) validateChangeDefaultStrategy(
	ctx context.Context,
	from featureproto.UpdateFeatureTargetingRequest_From,
	environmentID, featureID string,
	variations []*featureproto.Variation,
	cmd *featureproto.ChangeDefaultStrategyCommand,
	localizer locale.Localizer,
) error {
	// Because the progressive rollout changes the default strategy,
	// We must check from where the request comes
	if from == featureproto.UpdateFeatureTargetingRequest_USER {
		if err := s.checkProgressiveRolloutInProgress(ctx, environmentID, featureID, localizer); err != nil {
			return err
		}
	}
	if cmd.Strategy == nil {
		dt, err := statusMissingRuleStrategy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_strategy"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateStrategy(variations, cmd.Strategy, localizer)
}

func validateStrategy(
	variations []*featureproto.Variation,
	strategy *featureproto.Strategy,
	localizer locale.Localizer,
) error {
	if strategy == nil {
		dt, err := statusMissingRuleStrategy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_strategy"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if strategy.Type == featureproto.Strategy_FIXED {
		return validateFixedStrategy(strategy.FixedStrategy, localizer)
	}
	if strategy.Type == featureproto.Strategy_ROLLOUT {
		return validateRolloutStrategy(variations, strategy.RolloutStrategy, localizer)
	}
	dt, err := statusUnknownStrategy.WithDetails(&errdetails.LocalizedMessage{
		Locale:  localizer.GetLocale(),
		Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "strategy"),
	})
	if err != nil {
		return statusInternal.Err()
	}
	return dt.Err()
}

func validateChangeFixedStrategy(cmd *featureproto.ChangeFixedStrategyCommand, localizer locale.Localizer) error {
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateFixedStrategy(cmd.Strategy, localizer)
}

func validateChangeRolloutStrategy(
	variations []*featureproto.Variation,
	cmd *featureproto.ChangeRolloutStrategyCommand,
	localizer locale.Localizer,
) error {
	if cmd.RuleId == "" {
		dt, err := statusMissingRuleID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rule_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return validateRolloutStrategy(variations, cmd.Strategy, localizer)
}

func validateFixedStrategy(strategy *featureproto.FixedStrategy, localizer locale.Localizer) error {
	if strategy == nil {
		dt, err := statusMissingFixedStrategy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "fixed_strategy"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if strategy.Variation == "" {
		dt, err := statusMissingVariationID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "variation_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateRolloutStrategy(
	variations []*featureproto.Variation,
	strategy *featureproto.RolloutStrategy,
	localizer locale.Localizer,
) error {
	if strategy == nil {
		dt, err := statusMissingRolloutStrategy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "rollout_strategy"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if len(variations) != len(strategy.Variations) {
		dt, err := statusDifferentVariationsSize.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.DifferentVariationsSize),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	sum := int32(0)
	for _, v := range strategy.Variations {
		if v.Variation == "" {
			dt, err := statusMissingVariationID.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "variation_id"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		if v.Weight < 0 {
			dt, err := statusIncorrectVariationWeight.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "variation_weight"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		sum += v.Weight
	}
	if sum != totalVariationWeight {
		dt, err := statusExceededMaxVariationWeight.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "variation_weight"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateAddPrerequisite(
	fs []*featureproto.Feature,
	tarF *featureproto.Feature,
	p *featureproto.Prerequisite,
	localizer locale.Localizer,
) error {
	if tarF.Id == p.FeatureId {
		dt, err := statusInvalidPrerequisite.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "prerequisite"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	for _, pf := range tarF.Prerequisites {
		if pf.FeatureId == p.FeatureId {
			dt, err := statusInvalidPrerequisite.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "prerequisite"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	if err := validateVariationID(fs, p, localizer); err != nil {
		return err
	}
	prevPrerequisites := tarF.Prerequisites
	tarF.Prerequisites = append(tarF.Prerequisites, p)
	defer func() { tarF.Prerequisites = prevPrerequisites }()
	if err := featuredomain.ValidateFeatureDependencies(fs); err != nil {
		if err == featuredomain.ErrCycleExists {
			dt, err := statusCycleExists.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "prerequisite"),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateChangePrerequisiteVariation(
	fs []*featureproto.Feature,
	p *featureproto.Prerequisite,
	localizer locale.Localizer,
) error {
	if err := validateVariationID(fs, p, localizer); err != nil {
		return err
	}
	return nil
}

func validateVariationID(fs []*featureproto.Feature, p *featureproto.Prerequisite, localizer locale.Localizer) error {
	f, err := findFeature(fs, p.FeatureId, localizer)
	if err != nil {
		return err
	}
	for _, v := range f.Variations {
		if v.Id == p.VariationId {
			return nil
		}
	}
	dt, err := statusInvalidVariationID.WithDetails(&errdetails.LocalizedMessage{
		Locale:  localizer.GetLocale(),
		Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "variation_id"),
	})
	if err != nil {
		return statusInternal.Err()
	}
	return dt.Err()
}

func (s *FeatureService) validateFeatureStatus(
	ctx context.Context,
	id, environmentId string,
	localizer locale.Localizer,
) error {
	runningExperimentExists, err := s.existsRunningExperiment(ctx, id, environmentId)
	if err != nil {
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if runningExperimentExists {
		dt, err := statusWaitingOrRunningExperimentExists.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.HasWaitingOrRunningExperiment),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func (s *FeatureService) validateEnvironmentSettings(
	ctx context.Context,
	environmentId, updateComment string,
	localizer locale.Localizer,
) error {
	req := &envproto.GetEnvironmentV2Request{
		Id: environmentId,
	}
	resp, err := s.environmentClient.GetEnvironmentV2(ctx, req)
	if err != nil {
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if resp.Environment.RequireComment {
		if updateComment == "" {
			dt, err := statusCommentRequiredForUpdating.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.CommentRequiredForUpdating),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
	}
	return nil
}

func validateCreateFlagTriggerCommand(cmd *featureproto.CreateFlagTriggerCommand, localizer locale.Localizer) error {
	if cmd.FeatureId == "" {
		dt, err := statusMissingTriggerFeatureID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "feature_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Type == featureproto.FlagTrigger_Type_UNKNOWN {
		dt, err := statusMissingTriggerType.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "type"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if cmd.Action == featureproto.FlagTrigger_Action_UNKNOWN {
		dt, err := statusMissingTriggerAction.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "action"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateCreateFlagTriggerNoCommand(req *featureproto.CreateFlagTriggerRequest, localizer locale.Localizer) error {
	if req.FeatureId == "" {
		dt, err := statusMissingTriggerFeatureID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "feature_id"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Type == featureproto.FlagTrigger_Type_UNKNOWN {
		dt, err := statusMissingTriggerType.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "type"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if req.Action == featureproto.FlagTrigger_Action_UNKNOWN {
		dt, err := statusMissingTriggerAction.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.RequiredFieldTemplate, "action"),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateEnableFlagTriggerCommand(cmd *featureproto.EnableFlagTriggerCommand, localizer locale.Localizer) error {
	if cmd == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InvalidArgumentError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateDisableFlagTriggerCommand(cmd *featureproto.DisableFlagTriggerCommand, localizer locale.Localizer) error {
	if cmd == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InvalidArgumentError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateResetFlagTriggerCommand(cmd *featureproto.ResetFlagTriggerCommand, localizer locale.Localizer) error {
	if cmd == nil {
		dt, err := statusMissingCommand.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InvalidArgumentError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateGetFlagTriggerRequest(req *featureproto.GetFlagTriggerRequest, localizer locale.Localizer) error {
	if req.Id == "" {
		dt, err := statusMissingTriggerID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.RequiredFieldTemplate),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}

func validateListFlagTriggersRequest(req *featureproto.ListFlagTriggersRequest, localizer locale.Localizer) error {
	if req.FeatureId == "" {
		dt, err := statusMissingTriggerFeatureID.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.RequiredFieldTemplate),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	return nil
}
