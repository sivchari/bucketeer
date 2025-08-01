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
	"strconv"

	"github.com/jinzhu/copier"
	"go.uber.org/zap"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/wrapperspb"

	domainevent "github.com/bucketeer-io/bucketeer/pkg/domainevent/domain"
	"github.com/bucketeer-io/bucketeer/pkg/locale"
	"github.com/bucketeer-io/bucketeer/pkg/log"
	"github.com/bucketeer-io/bucketeer/pkg/notification/command"
	"github.com/bucketeer-io/bucketeer/pkg/notification/domain"
	v2ss "github.com/bucketeer-io/bucketeer/pkg/notification/storage/v2"
	"github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	accountproto "github.com/bucketeer-io/bucketeer/proto/account"
	eventproto "github.com/bucketeer-io/bucketeer/proto/event/domain"
	notificationproto "github.com/bucketeer-io/bucketeer/proto/notification"
)

func (s *NotificationService) CreateSubscription(
	ctx context.Context,
	req *notificationproto.CreateSubscriptionRequest,
) (*notificationproto.CreateSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_EDITOR,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}

	if req.Command == nil {
		return s.createSubscriptionNoCommand(ctx, req, localizer, editor)
	}

	if err := s.validateCreateSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}
	subscription, err := domain.NewSubscription(
		req.Command.Name,
		req.Command.SourceTypes,
		req.Command.Recipient,
		req.Command.FeatureFlagTags,
	)
	if err != nil {
		s.logger.Error(
			"Failed to create a new subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", req.EnvironmentId),
				zap.Any("sourceType", req.Command.SourceTypes),
				zap.Any("recipient", req.Command.Recipient),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	var handler command.Handler = command.NewEmptySubscriptionCommandHandler()
	err = s.mysqlClient.RunInTransactionV2(ctx, func(contextWithTx context.Context, _ mysql.Transaction) error {
		if err := s.subscriptionStorage.CreateSubscription(contextWithTx, subscription, req.EnvironmentId); err != nil {
			return err
		}
		handler, err = command.NewSubscriptionCommandHandler(editor, subscription, req.EnvironmentId)
		if err != nil {
			return err
		}
		if err := handler.Handle(ctx, req.Command); err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionAlreadyExists) {
			dt, err := statusAlreadyExists.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.AlreadyExistsError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		s.logger.Error(
			"Failed to create subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	if errs := s.publishDomainEvents(ctx, handler.Events()); len(errs) > 0 {
		s.logger.Error(
			"Failed to publish events",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Any("errors", errs),
				zap.String("environmentId", req.EnvironmentId),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	return &notificationproto.CreateSubscriptionResponse{}, nil
}

func (s *NotificationService) createSubscriptionNoCommand(
	ctx context.Context,
	req *notificationproto.CreateSubscriptionRequest,
	localizer locale.Localizer,
	editor *eventproto.Editor,
) (*notificationproto.CreateSubscriptionResponse, error) {
	if err := s.validateCreateSubscriptionNoCommandRequest(req, localizer); err != nil {
		return nil, err
	}
	subscription, err := domain.NewSubscription(
		req.Name,
		req.SourceTypes,
		req.Recipient,
		req.FeatureFlagTags,
	)
	if err != nil {
		s.logger.Error(
			"Failed to create a new subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", req.EnvironmentId),
				zap.Any("sourceType", req.SourceTypes),
				zap.Any("recipient", req.Recipient),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	err = s.mysqlClient.RunInTransactionV2(ctx, func(contextWithTx context.Context, _ mysql.Transaction) error {
		return s.subscriptionStorage.CreateSubscription(contextWithTx, subscription, req.EnvironmentId)
	})
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionAlreadyExists) {
			dt, err := statusAlreadyExists.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.AlreadyExistsError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		s.logger.Error(
			"Failed to create subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}

	prev := &domain.Subscription{}
	event, err := domainevent.NewEvent(
		editor,
		eventproto.Event_SUBSCRIPTION,
		subscription.Id,
		eventproto.Event_SUBSCRIPTION_CREATED,
		&eventproto.SubscriptionCreatedEvent{
			SourceTypes:     subscription.SourceTypes,
			Recipient:       subscription.Recipient,
			Name:            subscription.Name,
			FeatureFlagTags: subscription.FeatureFlagTags,
		},
		req.EnvironmentId,
		subscription.Subscription,
		prev,
	)
	if err != nil {
		s.logger.Error(
			"Failed to create event",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", req.EnvironmentId),
				zap.String("subscriptionId", subscription.Id),
			)...,
		)
		return nil, err
	}
	err = s.domainEventPublisher.Publish(ctx, event)
	if err != nil {
		s.logger.Error(
			"Failed to publish event",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", req.EnvironmentId),
				zap.String("subscriptionId", subscription.Id),
			)...,
		)
		return nil, err
	}
	return &notificationproto.CreateSubscriptionResponse{
		Subscription: subscription.Subscription,
	}, nil
}

func (s *NotificationService) UpdateSubscription(
	ctx context.Context,
	req *notificationproto.UpdateSubscriptionRequest,
) (*notificationproto.UpdateSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_EDITOR,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	if s.isNoUpdateSubscriptionCommand(req) {
		return s.updateSubscriptionNoCommand(ctx, req, localizer, editor)
	}

	if err := s.validateUpdateSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}
	commands := s.createUpdateSubscriptionCommands(req)
	if err := s.updateSubscription(ctx, commands, req.Id, req.EnvironmentId, editor, localizer); err != nil {
		if status.Code(err) == codes.Internal {
			s.logger.Error(
				"Failed to update subscription",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentId", req.EnvironmentId),
					zap.String("id", req.Id),
				)...,
			)
		}
		return nil, err
	}
	return &notificationproto.UpdateSubscriptionResponse{}, nil
}

func (s *NotificationService) updateSubscriptionNoCommand(
	ctx context.Context,
	req *notificationproto.UpdateSubscriptionRequest,
	localizer locale.Localizer,
	editor *eventproto.Editor,
) (*notificationproto.UpdateSubscriptionResponse, error) {
	if err := s.validateUpdateSubscriptionNoCommandRequest(req, localizer); err != nil {
		return nil, err
	}

	updatedSubscription, err := s.updateSubscriptionMySQLNoCommand(
		ctx,
		req.Id,
		req.EnvironmentId,
		req.Name,
		req.SourceTypes,
		req.Disabled,
		req.FeatureFlagTags,
		editor,
		localizer,
	)
	if err != nil {
		return nil, err
	}

	return &notificationproto.UpdateSubscriptionResponse{
		Subscription: updatedSubscription,
	}, nil
}

func (s *NotificationService) EnableSubscription(
	ctx context.Context,
	req *notificationproto.EnableSubscriptionRequest,
) (*notificationproto.EnableSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_EDITOR,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	if err := s.validateEnableSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}
	if err := s.updateSubscription(
		ctx,
		[]command.Command{req.Command},
		req.Id,
		req.EnvironmentId,
		editor,
		localizer,
	); err != nil {
		if status.Code(err) == codes.Internal {
			s.logger.Error(
				"Failed to enable subscription",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentId", req.EnvironmentId),
				)...,
			)
		}
		return nil, err
	}
	return &notificationproto.EnableSubscriptionResponse{}, nil
}

func (s *NotificationService) DisableSubscription(
	ctx context.Context,
	req *notificationproto.DisableSubscriptionRequest,
) (*notificationproto.DisableSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_EDITOR,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	if err := s.validateDisableSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}
	if err := s.updateSubscription(
		ctx,
		[]command.Command{req.Command},
		req.Id,
		req.EnvironmentId,
		editor,
		localizer,
	); err != nil {
		if status.Code(err) == codes.Internal {
			s.logger.Error(
				"Failed to disable subscription",
				log.FieldsFromImcomingContext(ctx).AddFields(
					zap.Error(err),
					zap.String("environmentId", req.EnvironmentId),
				)...,
			)
		}
		return nil, err
	}
	return &notificationproto.DisableSubscriptionResponse{}, nil
}

func (s *NotificationService) updateSubscription(
	ctx context.Context,
	commands []command.Command,
	id, environmentId string,
	editor *eventproto.Editor,
	localizer locale.Localizer,
) error {
	var handler command.Handler = command.NewEmptySubscriptionCommandHandler()
	err := s.mysqlClient.RunInTransactionV2(ctx, func(contextWithTx context.Context, _ mysql.Transaction) error {
		subscription, err := s.subscriptionStorage.GetSubscription(contextWithTx, id, environmentId)
		if err != nil {
			return err
		}
		handler, err = command.NewSubscriptionCommandHandler(editor, subscription, environmentId)
		if err != nil {
			return err
		}
		for _, command := range commands {
			if err := handler.Handle(ctx, command); err != nil {
				return err
			}
		}
		if err = s.subscriptionStorage.UpdateSubscription(contextWithTx, subscription, environmentId); err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionNotFound) || errors.Is(err, v2ss.ErrSubscriptionUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return statusInternal.Err()
			}
			return dt.Err()
		}
		s.logger.Error(
			"Failed to update subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("id", id),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return statusInternal.Err()
		}
		return dt.Err()
	}
	if errs := s.publishDomainEvents(ctx, handler.Events()); len(errs) > 0 {
		s.logger.Error(
			"Failed to publish events",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Any("errors", errs),
				zap.String("environmentId", environmentId),
				zap.String("id", id),
			)...,
		)
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

func (s *NotificationService) updateSubscriptionMySQLNoCommand(
	ctx context.Context,
	ID, environmentID string,
	name *wrapperspb.StringValue,
	sourceTypes []notificationproto.Subscription_SourceType,
	disabled *wrapperspb.BoolValue,
	featureFlagTags []string,
	editor *eventproto.Editor,
	localizer locale.Localizer,
) (*notificationproto.Subscription, error) {
	var updatedSubscription *notificationproto.Subscription
	var event *eventproto.Event
	err := s.mysqlClient.RunInTransactionV2(ctx, func(contextWithTx context.Context, _ mysql.Transaction) error {
		subscription, err := s.subscriptionStorage.GetSubscription(contextWithTx, ID, environmentID)
		if err != nil {
			return err
		}
		updated, err := subscription.UpdateSubscription(name, sourceTypes, disabled, featureFlagTags)
		if err != nil {
			return err
		}
		updatedSubscription = updated.Subscription
		event, err = domainevent.NewEvent(
			editor,
			eventproto.Event_SUBSCRIPTION,
			subscription.Id,
			eventproto.Event_SUBSCRIPTION_UPDATED,
			&eventproto.SubscriptionUpdatedEvent{
				Id:              ID,
				SourceTypes:     sourceTypes,
				Name:            name,
				Disabled:        disabled,
				FeatureFlagTags: featureFlagTags,
			},
			ID,
			updatedSubscription,
			subscription,
		)
		if err != nil {
			return err
		}
		return s.subscriptionStorage.UpdateSubscription(contextWithTx, updated, environmentID)
	})
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionNotFound) || errors.Is(err, v2ss.ErrSubscriptionUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		s.logger.Error(
			"Failed to update subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("ID", ID),
				zap.String("environmentID", environmentID),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}

	err = s.domainEventPublisher.Publish(ctx, event)
	if err != nil {
		s.logger.Error(
			"Failed to publish event",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", environmentID),
				zap.String("ID", ID),
			)...,
		)
		return nil, err
	}
	return updatedSubscription, nil
}

func (s *NotificationService) isNoUpdateSubscriptionCommand(req *notificationproto.UpdateSubscriptionRequest) bool {
	return req.AddSourceTypesCommand == nil &&
		req.DeleteSourceTypesCommand == nil &&
		req.RenameSubscriptionCommand == nil &&
		req.UpdateSubscriptionFeatureTagsCommand == nil
}

func (s *NotificationService) DeleteSubscription(
	ctx context.Context,
	req *notificationproto.DeleteSubscriptionRequest,
) (*notificationproto.DeleteSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	editor, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_EDITOR,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	if err := validateDeleteSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}

	var subscription *domain.Subscription
	var event *eventproto.Event
	err = s.mysqlClient.RunInTransactionV2(ctx, func(contextWithTx context.Context, _ mysql.Transaction) error {
		subscription, err = s.subscriptionStorage.GetSubscription(contextWithTx, req.Id, req.EnvironmentId)
		if err != nil {
			return err
		}
		prev := &domain.Subscription{}
		if err = copier.Copy(prev, subscription); err != nil {
			return err
		}
		event, err = domainevent.NewEvent(
			editor,
			eventproto.Event_SUBSCRIPTION,
			subscription.Id,
			eventproto.Event_SUBSCRIPTION_DELETED,
			&eventproto.SubscriptionDeletedEvent{},
			req.EnvironmentId,
			subscription.Subscription,
			prev,
		)
		if err = s.subscriptionStorage.DeleteSubscription(contextWithTx, req.Id, req.EnvironmentId); err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionNotFound) || errors.Is(err, v2ss.ErrSubscriptionUnexpectedAffectedRows) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		s.logger.Error(
			"Failed to delete subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("id", req.Id),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}

	err = s.domainEventPublisher.Publish(ctx, event)
	if err != nil {
		s.logger.Error(
			"Failed to publish event",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("environmentId", req.EnvironmentId),
				zap.String("subscriptionId", subscription.Id),
			)...,
		)
		return nil, err
	}
	return &notificationproto.DeleteSubscriptionResponse{}, nil
}

func (s *NotificationService) createUpdateSubscriptionCommands(
	req *notificationproto.UpdateSubscriptionRequest,
) []command.Command {
	commands := make([]command.Command, 0)
	if req.AddSourceTypesCommand != nil {
		commands = append(commands, req.AddSourceTypesCommand)
	}
	if req.DeleteSourceTypesCommand != nil {
		commands = append(commands, req.DeleteSourceTypesCommand)
	}
	if req.RenameSubscriptionCommand != nil {
		commands = append(commands, req.RenameSubscriptionCommand)
	}
	if req.UpdateSubscriptionFeatureTagsCommand != nil {
		commands = append(commands, req.UpdateSubscriptionFeatureTagsCommand)
	}
	return commands
}

func (s *NotificationService) GetSubscription(
	ctx context.Context,
	req *notificationproto.GetSubscriptionRequest,
) (*notificationproto.GetSubscriptionResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	_, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_VIEWER,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	if err := validateGetSubscriptionRequest(req, localizer); err != nil {
		return nil, err
	}
	subscription, err := s.subscriptionStorage.GetSubscription(ctx, req.Id, req.EnvironmentId)
	if err != nil {
		if errors.Is(err, v2ss.ErrSubscriptionNotFound) {
			dt, err := statusNotFound.WithDetails(&errdetails.LocalizedMessage{
				Locale:  localizer.GetLocale(),
				Message: localizer.MustLocalize(locale.NotFoundError),
			})
			if err != nil {
				return nil, statusInternal.Err()
			}
			return nil, dt.Err()
		}
		s.logger.Error(
			"Failed to get subscription",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
				zap.String("id", req.Id),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	return &notificationproto.GetSubscriptionResponse{Subscription: subscription.Subscription}, nil
}

func (s *NotificationService) ListSubscriptions(
	ctx context.Context,
	req *notificationproto.ListSubscriptionsRequest,
) (*notificationproto.ListSubscriptionsResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	var filterEnvironmentIDs []string
	if req.OrganizationId != "" {
		// console v3
		editor, err := s.checkOrganizationRole(
			ctx, accountproto.AccountV2_Role_Organization_MEMBER,
			req.OrganizationId, localizer)
		if err != nil {
			return nil, err
		}
		filterEnvironmentIDs = s.getAllowedEnvironments(req.EnvironmentIds, editor)
	} else {
		// console v2
		_, err := s.checkEnvironmentRole(
			ctx, accountproto.AccountV2_Role_Environment_VIEWER,
			req.EnvironmentId,
			localizer)
		if err != nil {
			return nil, err
		}
		filterEnvironmentIDs = append(filterEnvironmentIDs, req.EnvironmentId)
	}

	orders, err := s.newSubscriptionListOrders(req.OrderBy, req.OrderDirection, localizer)
	if err != nil {
		s.logger.Error(
			"Invalid argument",
			log.FieldsFromImcomingContext(ctx).AddFields(zap.Error(err))...,
		)
		return nil, err
	}
	var disabled *bool
	if req.Disabled != nil {
		disabled = &req.Disabled.Value
	}

	subscriptions, cursor, totalCount, err := s.listSubscriptionsMySQL(
		ctx,
		req.OrganizationId,
		filterEnvironmentIDs,
		req.SourceTypes,
		disabled,
		req.SearchKeyword,
		orders,
		req.PageSize,
		req.Cursor,
		localizer,
	)
	if err != nil {
		return nil, err
	}
	return &notificationproto.ListSubscriptionsResponse{
		Subscriptions: subscriptions,
		Cursor:        cursor,
		TotalCount:    totalCount,
	}, nil
}

func (s *NotificationService) getAllowedEnvironments(
	reqEnvironmentIDs []string,
	editor *eventproto.Editor,
) []string {
	filterEnvironmentIDs := make([]string, 0)
	if editor.OrganizationRole == accountproto.AccountV2_Role_Organization_ADMIN || editor.IsAdmin {
		// if the user is an admin, no need to filter environments.
		filterEnvironmentIDs = append(filterEnvironmentIDs, reqEnvironmentIDs...)
	} else {
		// only show API keys in allowed environments for member.
		if len(reqEnvironmentIDs) > 0 {
			for _, id := range reqEnvironmentIDs {
				for _, e := range editor.EnvironmentRoles {
					if e.EnvironmentId == id {
						filterEnvironmentIDs = append(filterEnvironmentIDs, id)
						break
					}
				}
			}
		} else {
			for _, e := range editor.EnvironmentRoles {
				filterEnvironmentIDs = append(filterEnvironmentIDs, e.EnvironmentId)
			}
		}
	}
	return filterEnvironmentIDs
}

func (s *NotificationService) newSubscriptionListOrders(
	orderBy notificationproto.ListSubscriptionsRequest_OrderBy,
	orderDirection notificationproto.ListSubscriptionsRequest_OrderDirection,
	localizer locale.Localizer,
) ([]*mysql.Order, error) {
	var column string
	switch orderBy {
	case notificationproto.ListSubscriptionsRequest_DEFAULT,
		notificationproto.ListSubscriptionsRequest_NAME:
		column = "sub.name"
	case notificationproto.ListSubscriptionsRequest_CREATED_AT:
		column = "sub.created_at"
	case notificationproto.ListSubscriptionsRequest_UPDATED_AT:
		column = "sub.updated_at"
	case notificationproto.ListSubscriptionsRequest_ENVIRONMENT:
		column = "env.name"
	case notificationproto.ListSubscriptionsRequest_STATE:
		column = "sub.disabled"
	default:
		dt, err := statusInvalidOrderBy.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "order_by"),
		})
		if err != nil {
			return nil, statusInternal.Err()
		}
		return nil, dt.Err()
	}
	direction := mysql.OrderDirectionAsc
	if orderDirection == notificationproto.ListSubscriptionsRequest_DESC {
		direction = mysql.OrderDirectionDesc
	}
	return []*mysql.Order{mysql.NewOrder(column, direction)}, nil
}

func (s *NotificationService) ListEnabledSubscriptions(
	ctx context.Context,
	req *notificationproto.ListEnabledSubscriptionsRequest,
) (*notificationproto.ListEnabledSubscriptionsResponse, error) {
	localizer := locale.NewLocalizer(ctx)
	_, err := s.checkEnvironmentRole(
		ctx, accountproto.AccountV2_Role_Environment_VIEWER,
		req.EnvironmentId,
		localizer)
	if err != nil {
		return nil, err
	}
	var disabled = false
	subscriptions, cursor, _, err := s.listSubscriptionsMySQL(
		ctx,
		"",
		[]string{req.EnvironmentId},
		req.SourceTypes,
		&disabled,
		"",
		nil,
		req.PageSize,
		req.Cursor,
		localizer,
	)
	if err != nil {
		return nil, err
	}
	return &notificationproto.ListEnabledSubscriptionsResponse{
		Subscriptions: subscriptions,
		Cursor:        cursor,
	}, nil
}

func (s *NotificationService) listSubscriptionsMySQL(
	ctx context.Context,
	organizationId string,
	environmentIDs []string,
	sourceTypes []notificationproto.Subscription_SourceType,
	disabled *bool,
	searchKeyword string,
	orders []*mysql.Order,
	pageSize int64,
	cursor string,
	localizer locale.Localizer,
) ([]*notificationproto.Subscription, string, int64, error) {
	var filters []*mysql.FilterV2
	var inFilters []*mysql.InFilter
	if organizationId != "" {
		// console v3
		filters = append(filters, &mysql.FilterV2{
			Column:   "env.organization_id",
			Operator: mysql.OperatorEqual,
			Value:    organizationId,
		})
		if len(environmentIDs) > 0 {
			envIDs := make([]interface{}, 0, len(environmentIDs))
			for _, id := range environmentIDs {
				envIDs = append(envIDs, id)
			}
			inFilters = append(inFilters, &mysql.InFilter{
				Column: "sub.environment_id",
				Values: envIDs,
			})
		}
	} else {
		// console v2
		if len(environmentIDs) > 0 {
			filters = append(filters, &mysql.FilterV2{
				Column:   "sub.environment_id",
				Operator: mysql.OperatorEqual,
				Value:    environmentIDs[0],
			})
		}
	}
	if disabled != nil {
		filters = append(filters, &mysql.FilterV2{
			Column:   "sub.disabled",
			Operator: mysql.OperatorEqual,
			Value:    disabled,
		})
	}
	var seachQuery *mysql.SearchQuery
	if searchKeyword != "" {
		seachQuery = &mysql.SearchQuery{
			Columns: []string{"sub.name"},
			Keyword: searchKeyword,
		}
	}
	sourceTypesValues := make([]interface{}, len(sourceTypes))
	for i, st := range sourceTypes {
		sourceTypesValues[i] = int32(st)
	}
	var jsonFilters []*mysql.JSONFilter
	if len(sourceTypesValues) > 0 {
		jsonFilters = append(jsonFilters, &mysql.JSONFilter{
			Column: "sub.source_types",
			Func:   mysql.JSONContainsNumber,
			Values: sourceTypesValues,
		})
	}
	limit := int(pageSize)
	if cursor == "" {
		cursor = "0"
	}
	offset, err := strconv.Atoi(cursor)
	if err != nil {
		dt, err := statusInvalidCursor.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalizeWithTemplate(locale.InvalidArgumentError, "cursor"),
		})
		if err != nil {
			return nil, "", 0, statusInternal.Err()
		}
		return nil, "", 0, dt.Err()
	}
	options := &mysql.ListOptions{
		Limit:       limit,
		Offset:      offset,
		Filters:     filters,
		InFilters:   inFilters,
		NullFilters: nil,
		JSONFilters: jsonFilters,
		SearchQuery: seachQuery,
		Orders:      orders,
	}

	subscriptions, nextCursor, totalCount, err := s.subscriptionStorage.ListSubscriptions(
		ctx, options,
	)
	if err != nil {
		s.logger.Error(
			"Failed to list subscriptions",
			log.FieldsFromImcomingContext(ctx).AddFields(
				zap.Error(err),
			)...,
		)
		dt, err := statusInternal.WithDetails(&errdetails.LocalizedMessage{
			Locale:  localizer.GetLocale(),
			Message: localizer.MustLocalize(locale.InternalServerError),
		})
		if err != nil {
			return nil, "", 0, statusInternal.Err()
		}
		return nil, "", 0, dt.Err()
	}
	return subscriptions, strconv.Itoa(nextCursor), totalCount, nil
}
