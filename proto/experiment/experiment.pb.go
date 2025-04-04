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

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v4.23.4
// source: proto/experiment/experiment.proto

package experiment

import (
	feature "github.com/bucketeer-io/bucketeer/proto/feature"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Experiment_Status int32

const (
	Experiment_WAITING       Experiment_Status = 0
	Experiment_RUNNING       Experiment_Status = 1
	Experiment_STOPPED       Experiment_Status = 2
	Experiment_FORCE_STOPPED Experiment_Status = 3
)

// Enum value maps for Experiment_Status.
var (
	Experiment_Status_name = map[int32]string{
		0: "WAITING",
		1: "RUNNING",
		2: "STOPPED",
		3: "FORCE_STOPPED",
	}
	Experiment_Status_value = map[string]int32{
		"WAITING":       0,
		"RUNNING":       1,
		"STOPPED":       2,
		"FORCE_STOPPED": 3,
	}
)

func (x Experiment_Status) Enum() *Experiment_Status {
	p := new(Experiment_Status)
	*p = x
	return p
}

func (x Experiment_Status) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Experiment_Status) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_experiment_experiment_proto_enumTypes[0].Descriptor()
}

func (Experiment_Status) Type() protoreflect.EnumType {
	return &file_proto_experiment_experiment_proto_enumTypes[0]
}

func (x Experiment_Status) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Experiment_Status.Descriptor instead.
func (Experiment_Status) EnumDescriptor() ([]byte, []int) {
	return file_proto_experiment_experiment_proto_rawDescGZIP(), []int{0, 0}
}

type Experiment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id"`
	// Deprecated: Do not use.
	GoalId         string               `protobuf:"bytes,2,opt,name=goal_id,json=goalId,proto3" json:"goal_id"`
	FeatureId      string               `protobuf:"bytes,3,opt,name=feature_id,json=featureId,proto3" json:"feature_id"`
	FeatureVersion int32                `protobuf:"varint,4,opt,name=feature_version,json=featureVersion,proto3" json:"feature_version"`
	Variations     []*feature.Variation `protobuf:"bytes,5,rep,name=variations,proto3" json:"variations"`
	StartAt        int64                `protobuf:"varint,6,opt,name=start_at,json=startAt,proto3" json:"start_at"`
	StopAt         int64                `protobuf:"varint,7,opt,name=stop_at,json=stopAt,proto3" json:"stop_at"`
	// Deprecated: Do not use.
	Stopped         bool                        `protobuf:"varint,8,opt,name=stopped,proto3" json:"stopped"`
	StoppedAt       int64                       `protobuf:"varint,9,opt,name=stopped_at,json=stoppedAt,proto3" json:"stopped_at"`
	CreatedAt       int64                       `protobuf:"varint,10,opt,name=created_at,json=createdAt,proto3" json:"created_at"`
	UpdatedAt       int64                       `protobuf:"varint,11,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at"`
	Deleted         bool                        `protobuf:"varint,12,opt,name=deleted,proto3" json:"deleted"`
	GoalIds         []string                    `protobuf:"bytes,13,rep,name=goal_ids,json=goalIds,proto3" json:"goal_ids"`
	Name            string                      `protobuf:"bytes,14,opt,name=name,proto3" json:"name"`
	Description     string                      `protobuf:"bytes,15,opt,name=description,proto3" json:"description"`
	BaseVariationId string                      `protobuf:"bytes,16,opt,name=base_variation_id,json=baseVariationId,proto3" json:"base_variation_id"`
	Status          Experiment_Status           `protobuf:"varint,18,opt,name=status,proto3,enum=bucketeer.experiment.Experiment_Status" json:"status"`
	Maintainer      string                      `protobuf:"bytes,19,opt,name=maintainer,proto3" json:"maintainer"`
	Archived        bool                        `protobuf:"varint,20,opt,name=archived,proto3" json:"archived"`
	Goals           []*Experiment_GoalReference `protobuf:"bytes,21,rep,name=goals,proto3" json:"goals"`
}

func (x *Experiment) Reset() {
	*x = Experiment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_experiment_experiment_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Experiment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Experiment) ProtoMessage() {}

func (x *Experiment) ProtoReflect() protoreflect.Message {
	mi := &file_proto_experiment_experiment_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Experiment.ProtoReflect.Descriptor instead.
func (*Experiment) Descriptor() ([]byte, []int) {
	return file_proto_experiment_experiment_proto_rawDescGZIP(), []int{0}
}

func (x *Experiment) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

// Deprecated: Do not use.
func (x *Experiment) GetGoalId() string {
	if x != nil {
		return x.GoalId
	}
	return ""
}

func (x *Experiment) GetFeatureId() string {
	if x != nil {
		return x.FeatureId
	}
	return ""
}

func (x *Experiment) GetFeatureVersion() int32 {
	if x != nil {
		return x.FeatureVersion
	}
	return 0
}

func (x *Experiment) GetVariations() []*feature.Variation {
	if x != nil {
		return x.Variations
	}
	return nil
}

func (x *Experiment) GetStartAt() int64 {
	if x != nil {
		return x.StartAt
	}
	return 0
}

func (x *Experiment) GetStopAt() int64 {
	if x != nil {
		return x.StopAt
	}
	return 0
}

// Deprecated: Do not use.
func (x *Experiment) GetStopped() bool {
	if x != nil {
		return x.Stopped
	}
	return false
}

func (x *Experiment) GetStoppedAt() int64 {
	if x != nil {
		return x.StoppedAt
	}
	return 0
}

func (x *Experiment) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *Experiment) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *Experiment) GetDeleted() bool {
	if x != nil {
		return x.Deleted
	}
	return false
}

func (x *Experiment) GetGoalIds() []string {
	if x != nil {
		return x.GoalIds
	}
	return nil
}

func (x *Experiment) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Experiment) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Experiment) GetBaseVariationId() string {
	if x != nil {
		return x.BaseVariationId
	}
	return ""
}

func (x *Experiment) GetStatus() Experiment_Status {
	if x != nil {
		return x.Status
	}
	return Experiment_WAITING
}

func (x *Experiment) GetMaintainer() string {
	if x != nil {
		return x.Maintainer
	}
	return ""
}

func (x *Experiment) GetArchived() bool {
	if x != nil {
		return x.Archived
	}
	return false
}

func (x *Experiment) GetGoals() []*Experiment_GoalReference {
	if x != nil {
		return x.Goals
	}
	return nil
}

type Experiments struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Experiments []*Experiment `protobuf:"bytes,1,rep,name=experiments,proto3" json:"experiments"`
}

func (x *Experiments) Reset() {
	*x = Experiments{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_experiment_experiment_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Experiments) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Experiments) ProtoMessage() {}

func (x *Experiments) ProtoReflect() protoreflect.Message {
	mi := &file_proto_experiment_experiment_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Experiments.ProtoReflect.Descriptor instead.
func (*Experiments) Descriptor() ([]byte, []int) {
	return file_proto_experiment_experiment_proto_rawDescGZIP(), []int{1}
}

func (x *Experiments) GetExperiments() []*Experiment {
	if x != nil {
		return x.Experiments
	}
	return nil
}

type Experiment_GoalReference struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name"`
}

func (x *Experiment_GoalReference) Reset() {
	*x = Experiment_GoalReference{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_experiment_experiment_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Experiment_GoalReference) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Experiment_GoalReference) ProtoMessage() {}

func (x *Experiment_GoalReference) ProtoReflect() protoreflect.Message {
	mi := &file_proto_experiment_experiment_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Experiment_GoalReference.ProtoReflect.Descriptor instead.
func (*Experiment_GoalReference) Descriptor() ([]byte, []int) {
	return file_proto_experiment_experiment_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Experiment_GoalReference) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Experiment_GoalReference) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_proto_experiment_experiment_proto protoreflect.FileDescriptor

var file_proto_experiment_experiment_proto_rawDesc = []byte{
	0x0a, 0x21, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65,
	0x6e, 0x74, 0x2f, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x14, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x65,
	0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x1a, 0x1d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x2f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xcb, 0x06, 0x0a, 0x0a, 0x45, 0x78, 0x70,
	0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1b, 0x0a, 0x07, 0x67, 0x6f, 0x61, 0x6c, 0x5f,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x02, 0x18, 0x01, 0x52, 0x06, 0x67, 0x6f,
	0x61, 0x6c, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f,
	0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x49, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x76,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x66, 0x65,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x3c, 0x0a, 0x0a,
	0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1c, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x66, 0x65, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x2e, 0x56, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a,
	0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x19, 0x0a, 0x08, 0x73, 0x74,
	0x61, 0x72, 0x74, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x73, 0x74,
	0x61, 0x72, 0x74, 0x41, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x73, 0x74, 0x6f, 0x70, 0x5f, 0x61, 0x74,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x73, 0x74, 0x6f, 0x70, 0x41, 0x74, 0x12, 0x1c,
	0x0a, 0x07, 0x73, 0x74, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x42,
	0x02, 0x18, 0x01, 0x52, 0x07, 0x73, 0x74, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x12, 0x21, 0x0a, 0x0a,
	0x73, 0x74, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x03,
	0x42, 0x02, 0x30, 0x01, 0x52, 0x09, 0x73, 0x74, 0x6f, 0x70, 0x70, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d,
	0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x18, 0x0a,
	0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x6f, 0x61, 0x6c, 0x5f,
	0x69, 0x64, 0x73, 0x18, 0x0d, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x67, 0x6f, 0x61, 0x6c, 0x49,
	0x64, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2a, 0x0a, 0x11, 0x62, 0x61, 0x73, 0x65,
	0x5f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x10, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0f, 0x62, 0x61, 0x73, 0x65, 0x56, 0x61, 0x72, 0x69, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x49, 0x64, 0x12, 0x3f, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x12,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72,
	0x2e, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x78, 0x70, 0x65,
	0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x6d, 0x61, 0x69, 0x6e, 0x74, 0x61, 0x69,
	0x6e, 0x65, 0x72, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x61, 0x69, 0x6e, 0x74,
	0x61, 0x69, 0x6e, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x61, 0x72, 0x63, 0x68, 0x69, 0x76, 0x65,
	0x64, 0x18, 0x14, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x61, 0x72, 0x63, 0x68, 0x69, 0x76, 0x65,
	0x64, 0x12, 0x44, 0x0a, 0x05, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x18, 0x15, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x2e, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x65, 0x78, 0x70,
	0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x47, 0x6f, 0x61, 0x6c, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65,
	0x52, 0x05, 0x67, 0x6f, 0x61, 0x6c, 0x73, 0x1a, 0x33, 0x0a, 0x0d, 0x47, 0x6f, 0x61, 0x6c, 0x52,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x42, 0x0a, 0x06,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0b, 0x0a, 0x07, 0x57, 0x41, 0x49, 0x54, 0x49, 0x4e,
	0x47, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07, 0x52, 0x55, 0x4e, 0x4e, 0x49, 0x4e, 0x47, 0x10, 0x01,
	0x12, 0x0b, 0x0a, 0x07, 0x53, 0x54, 0x4f, 0x50, 0x50, 0x45, 0x44, 0x10, 0x02, 0x12, 0x11, 0x0a,
	0x0d, 0x46, 0x4f, 0x52, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x4f, 0x50, 0x50, 0x45, 0x44, 0x10, 0x03,
	0x4a, 0x04, 0x08, 0x11, 0x10, 0x12, 0x22, 0x51, 0x0a, 0x0b, 0x45, 0x78, 0x70, 0x65, 0x72, 0x69,
	0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x42, 0x0a, 0x0b, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d,
	0x65, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x62, 0x75, 0x63,
	0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e,
	0x74, 0x2e, 0x45, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x0b, 0x65, 0x78,
	0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x42, 0x34, 0x5a, 0x32, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65,
	0x72, 0x2d, 0x69, 0x6f, 0x2f, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_experiment_experiment_proto_rawDescOnce sync.Once
	file_proto_experiment_experiment_proto_rawDescData = file_proto_experiment_experiment_proto_rawDesc
)

func file_proto_experiment_experiment_proto_rawDescGZIP() []byte {
	file_proto_experiment_experiment_proto_rawDescOnce.Do(func() {
		file_proto_experiment_experiment_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_experiment_experiment_proto_rawDescData)
	})
	return file_proto_experiment_experiment_proto_rawDescData
}

var file_proto_experiment_experiment_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_experiment_experiment_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_proto_experiment_experiment_proto_goTypes = []interface{}{
	(Experiment_Status)(0),           // 0: bucketeer.experiment.Experiment.Status
	(*Experiment)(nil),               // 1: bucketeer.experiment.Experiment
	(*Experiments)(nil),              // 2: bucketeer.experiment.Experiments
	(*Experiment_GoalReference)(nil), // 3: bucketeer.experiment.Experiment.GoalReference
	(*feature.Variation)(nil),        // 4: bucketeer.feature.Variation
}
var file_proto_experiment_experiment_proto_depIdxs = []int32{
	4, // 0: bucketeer.experiment.Experiment.variations:type_name -> bucketeer.feature.Variation
	0, // 1: bucketeer.experiment.Experiment.status:type_name -> bucketeer.experiment.Experiment.Status
	3, // 2: bucketeer.experiment.Experiment.goals:type_name -> bucketeer.experiment.Experiment.GoalReference
	1, // 3: bucketeer.experiment.Experiments.experiments:type_name -> bucketeer.experiment.Experiment
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_proto_experiment_experiment_proto_init() }
func file_proto_experiment_experiment_proto_init() {
	if File_proto_experiment_experiment_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_experiment_experiment_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Experiment); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_experiment_experiment_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Experiments); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_experiment_experiment_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Experiment_GoalReference); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_experiment_experiment_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_experiment_experiment_proto_goTypes,
		DependencyIndexes: file_proto_experiment_experiment_proto_depIdxs,
		EnumInfos:         file_proto_experiment_experiment_proto_enumTypes,
		MessageInfos:      file_proto_experiment_experiment_proto_msgTypes,
	}.Build()
	File_proto_experiment_experiment_proto = out.File
	file_proto_experiment_experiment_proto_rawDesc = nil
	file_proto_experiment_experiment_proto_goTypes = nil
	file_proto_experiment_experiment_proto_depIdxs = nil
}
