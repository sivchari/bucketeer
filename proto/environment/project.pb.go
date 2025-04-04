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
// source: proto/environment/project.proto

package environment

import (
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

type Project struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               string `protobuf:"bytes,1,opt,name=id,proto3" json:"id"`
	Description      string `protobuf:"bytes,2,opt,name=description,proto3" json:"description"` // optional
	Disabled         bool   `protobuf:"varint,3,opt,name=disabled,proto3" json:"disabled"`
	Trial            bool   `protobuf:"varint,4,opt,name=trial,proto3" json:"trial"`
	CreatorEmail     string `protobuf:"bytes,5,opt,name=creator_email,json=creatorEmail,proto3" json:"creator_email"`
	CreatedAt        int64  `protobuf:"varint,6,opt,name=created_at,json=createdAt,proto3" json:"created_at"`
	UpdatedAt        int64  `protobuf:"varint,7,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at"`
	Name             string `protobuf:"bytes,8,opt,name=name,proto3" json:"name"`
	UrlCode          string `protobuf:"bytes,9,opt,name=url_code,json=urlCode,proto3" json:"url_code"`
	OrganizationId   string `protobuf:"bytes,10,opt,name=organization_id,json=organizationId,proto3" json:"organization_id"`
	EnvironmentCount int32  `protobuf:"varint,11,opt,name=environment_count,json=environmentCount,proto3" json:"environment_count"`
	FeatureFlagCount int32  `protobuf:"varint,12,opt,name=feature_flag_count,json=featureFlagCount,proto3" json:"feature_flag_count"`
}

func (x *Project) Reset() {
	*x = Project{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_environment_project_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Project) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Project) ProtoMessage() {}

func (x *Project) ProtoReflect() protoreflect.Message {
	mi := &file_proto_environment_project_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Project.ProtoReflect.Descriptor instead.
func (*Project) Descriptor() ([]byte, []int) {
	return file_proto_environment_project_proto_rawDescGZIP(), []int{0}
}

func (x *Project) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Project) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Project) GetDisabled() bool {
	if x != nil {
		return x.Disabled
	}
	return false
}

func (x *Project) GetTrial() bool {
	if x != nil {
		return x.Trial
	}
	return false
}

func (x *Project) GetCreatorEmail() string {
	if x != nil {
		return x.CreatorEmail
	}
	return ""
}

func (x *Project) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *Project) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *Project) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Project) GetUrlCode() string {
	if x != nil {
		return x.UrlCode
	}
	return ""
}

func (x *Project) GetOrganizationId() string {
	if x != nil {
		return x.OrganizationId
	}
	return ""
}

func (x *Project) GetEnvironmentCount() int32 {
	if x != nil {
		return x.EnvironmentCount
	}
	return 0
}

func (x *Project) GetFeatureFlagCount() int32 {
	if x != nil {
		return x.FeatureFlagCount
	}
	return 0
}

var File_proto_environment_project_proto protoreflect.FileDescriptor

var file_proto_environment_project_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x15, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x83, 0x03, 0x0a, 0x07, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c,
	0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c,
	0x65, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x72, 0x69, 0x61, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x05, 0x74, 0x72, 0x69, 0x61, 0x6c, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x6f, 0x72, 0x5f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x1d, 0x0a,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x19, 0x0a, 0x08, 0x75, 0x72, 0x6c, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x75, 0x72, 0x6c, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x11, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10,
	0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x12, 0x2c, 0x0a, 0x12, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x66, 0x6c, 0x61, 0x67,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x66, 0x65,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x46, 0x6c, 0x61, 0x67, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x35,
	0x5a, 0x33, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62, 0x75, 0x63,
	0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2d, 0x69, 0x6f, 0x2f, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74,
	0x65, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_environment_project_proto_rawDescOnce sync.Once
	file_proto_environment_project_proto_rawDescData = file_proto_environment_project_proto_rawDesc
)

func file_proto_environment_project_proto_rawDescGZIP() []byte {
	file_proto_environment_project_proto_rawDescOnce.Do(func() {
		file_proto_environment_project_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_environment_project_proto_rawDescData)
	})
	return file_proto_environment_project_proto_rawDescData
}

var file_proto_environment_project_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_proto_environment_project_proto_goTypes = []interface{}{
	(*Project)(nil), // 0: bucketeer.environment.Project
}
var file_proto_environment_project_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_environment_project_proto_init() }
func file_proto_environment_project_proto_init() {
	if File_proto_environment_project_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_environment_project_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Project); i {
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
			RawDescriptor: file_proto_environment_project_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_environment_project_proto_goTypes,
		DependencyIndexes: file_proto_environment_project_proto_depIdxs,
		MessageInfos:      file_proto_environment_project_proto_msgTypes,
	}.Build()
	File_proto_environment_project_proto = out.File
	file_proto_environment_project_proto_rawDesc = nil
	file_proto_environment_project_proto_goTypes = nil
	file_proto_environment_project_proto_depIdxs = nil
}
