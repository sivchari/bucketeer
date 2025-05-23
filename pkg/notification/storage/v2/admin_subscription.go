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

//go:generate mockgen -source=$GOFILE -package=mock -destination=./mock/$GOFILE
package v2

import (
	"context"
	_ "embed"
	"errors"

	"github.com/bucketeer-io/bucketeer/pkg/notification/domain"
	"github.com/bucketeer-io/bucketeer/pkg/storage/v2/mysql"
	proto "github.com/bucketeer-io/bucketeer/proto/notification"
)

var (
	ErrAdminSubscriptionAlreadyExists          = errors.New("subscription: admin subscription already exists")
	ErrAdminSubscriptionNotFound               = errors.New("subscription: admin subscription not found")
	ErrAdminSubscriptionUnexpectedAffectedRows = errors.New("subscription: admin subscription unexpected affected rows")

	//go:embed sql/admin_subscription/insert_admin_subscription_v2.sql
	insertAdminSubscriptionV2SQLQuery string
	//go:embed sql/admin_subscription/update_admin_subscription_v2.sql
	updateAdminSubscriptionV2SQLQuery string
	//go:embed sql/admin_subscription/delete_admin_subscription_v2.sql
	deleteAdminSubscriptionV2SQLQuery string
	//go:embed sql/admin_subscription/select_admin_subscription_v2_any.sql
	selectAdminSubscriptionV2AnySQLQuery string
	//go:embed sql/admin_subscription/select_admin_subscription_v2.sql
	selectAdminSubscriptionV2SQLQuery string
	//go:embed sql/admin_subscription/select_admin_subscription_v2_count.sql
	selectAdminSubscriptionV2CountSQLQuery string
)

type AdminSubscriptionStorage interface {
	CreateAdminSubscription(ctx context.Context, e *domain.Subscription) error
	UpdateAdminSubscription(ctx context.Context, e *domain.Subscription) error
	DeleteAdminSubscription(ctx context.Context, id string) error
	GetAdminSubscription(ctx context.Context, id string) (*domain.Subscription, error)
	ListAdminSubscriptions(
		ctx context.Context,
		options *mysql.ListOptions,
	) ([]*proto.Subscription, int, int64, error)
}

type adminSubscriptionStorage struct {
	qe mysql.QueryExecer
}

func NewAdminSubscriptionStorage(qe mysql.QueryExecer) AdminSubscriptionStorage {
	return &adminSubscriptionStorage{qe}
}

func (s *adminSubscriptionStorage) CreateAdminSubscription(ctx context.Context, e *domain.Subscription) error {
	_, err := s.qe.ExecContext(
		ctx,
		insertAdminSubscriptionV2SQLQuery,
		e.Id,
		e.CreatedAt,
		e.UpdatedAt,
		e.Disabled,
		mysql.JSONObject{Val: e.SourceTypes},
		mysql.JSONObject{Val: e.Recipient},
		e.Name,
	)
	if err != nil {
		if err == mysql.ErrDuplicateEntry {
			return ErrAdminSubscriptionAlreadyExists
		}
		return err
	}
	return nil
}

func (s *adminSubscriptionStorage) UpdateAdminSubscription(ctx context.Context, e *domain.Subscription) error {
	result, err := s.qe.ExecContext(
		ctx,
		updateAdminSubscriptionV2SQLQuery,
		e.UpdatedAt,
		e.Disabled,
		mysql.JSONObject{Val: e.SourceTypes},
		mysql.JSONObject{Val: e.Recipient},
		e.Name,
		e.Id,
	)
	if err != nil {
		return err
	}
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rowsAffected != 1 {
		return ErrAdminSubscriptionUnexpectedAffectedRows
	}
	return nil
}

func (s *adminSubscriptionStorage) DeleteAdminSubscription(ctx context.Context, id string) error {
	result, err := s.qe.ExecContext(
		ctx,
		deleteAdminSubscriptionV2SQLQuery,
		id,
	)
	if err != nil {
		return err
	}
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rowsAffected != 1 {
		return ErrAdminSubscriptionUnexpectedAffectedRows
	}
	return nil
}

func (s *adminSubscriptionStorage) GetAdminSubscription(ctx context.Context, id string) (*domain.Subscription, error) {
	subscription := proto.Subscription{}
	err := s.qe.QueryRowContext(
		ctx,
		selectAdminSubscriptionV2SQLQuery,
		id,
	).Scan(
		&subscription.Id,
		&subscription.CreatedAt,
		&subscription.UpdatedAt,
		&subscription.Disabled,
		&mysql.JSONObject{Val: &subscription.SourceTypes},
		&mysql.JSONObject{Val: &subscription.Recipient},
		&subscription.Name,
	)
	if err != nil {
		if err == mysql.ErrNoRows {
			return nil, ErrAdminSubscriptionNotFound
		}
		return nil, err
	}
	return &domain.Subscription{Subscription: &subscription}, nil
}

func (s *adminSubscriptionStorage) ListAdminSubscriptions(
	ctx context.Context,
	options *mysql.ListOptions,
) ([]*proto.Subscription, int, int64, error) {
	query, whereArgs := mysql.ConstructQueryAndWhereArgs(selectAdminSubscriptionV2AnySQLQuery, options)
	rows, err := s.qe.QueryContext(ctx, query, whereArgs...)

	if err != nil {
		return nil, 0, 0, err
	}
	defer rows.Close()
	var offset int
	var limit int
	if options != nil {
		offset = options.Offset
		limit = options.Limit
	}
	subscriptions := make([]*proto.Subscription, 0, limit)
	for rows.Next() {
		subscription := proto.Subscription{}
		err := rows.Scan(
			&subscription.Id,
			&subscription.CreatedAt,
			&subscription.UpdatedAt,
			&subscription.Disabled,
			&mysql.JSONObject{Val: &subscription.SourceTypes},
			&mysql.JSONObject{Val: &subscription.Recipient},
			&subscription.Name,
		)
		if err != nil {
			return nil, 0, 0, err
		}
		subscriptions = append(subscriptions, &subscription)
	}
	if rows.Err() != nil {
		return nil, 0, 0, err
	}
	nextOffset := offset + len(subscriptions)
	var totalCount int64
	countQuery, countWhereArgs := mysql.ConstructCountQuery(
		selectAdminSubscriptionV2CountSQLQuery,
		options,
	)
	err = s.qe.QueryRowContext(ctx, countQuery, countWhereArgs...).Scan(&totalCount)
	if err != nil {
		return nil, 0, 0, err
	}
	return subscriptions, nextOffset, totalCount, nil
}
