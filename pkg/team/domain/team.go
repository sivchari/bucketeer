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

	"github.com/bucketeer-io/bucketeer/pkg/uuid"
	proto "github.com/bucketeer-io/bucketeer/proto/team"
)

type Team struct {
	*proto.Team
}

func NewTeam(name, description, organizationID string) (*Team, error) {
	now := time.Now().Unix()
	id, err := uuid.NewUUID()
	if err != nil {
		return nil, err
	}
	return &Team{
		Team: &proto.Team{
			Id:             id.String(),
			Name:           name,
			Description:    description,
			OrganizationId: organizationID,
			CreatedAt:      now,
			UpdatedAt:      now,
		},
	}, nil
}
