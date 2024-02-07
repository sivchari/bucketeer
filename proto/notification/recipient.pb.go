// Copyright 2024 The Bucketeer Authors.
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
// source: proto/notification/recipient.proto

package notification

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

type Recipient_Type int32

const (
	Recipient_SlackChannel Recipient_Type = 0
)

// Enum value maps for Recipient_Type.
var (
	Recipient_Type_name = map[int32]string{
		0: "SlackChannel",
	}
	Recipient_Type_value = map[string]int32{
		"SlackChannel": 0,
	}
)

func (x Recipient_Type) Enum() *Recipient_Type {
	p := new(Recipient_Type)
	*p = x
	return p
}

func (x Recipient_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Recipient_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_notification_recipient_proto_enumTypes[0].Descriptor()
}

func (Recipient_Type) Type() protoreflect.EnumType {
	return &file_proto_notification_recipient_proto_enumTypes[0]
}

func (x Recipient_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Recipient_Type.Descriptor instead.
func (Recipient_Type) EnumDescriptor() ([]byte, []int) {
	return file_proto_notification_recipient_proto_rawDescGZIP(), []int{0, 0}
}

type Recipient_Language int32

const (
	Recipient_ENGLISH  Recipient_Language = 0
	Recipient_JAPANESE Recipient_Language = 1
)

// Enum value maps for Recipient_Language.
var (
	Recipient_Language_name = map[int32]string{
		0: "ENGLISH",
		1: "JAPANESE",
	}
	Recipient_Language_value = map[string]int32{
		"ENGLISH":  0,
		"JAPANESE": 1,
	}
)

func (x Recipient_Language) Enum() *Recipient_Language {
	p := new(Recipient_Language)
	*p = x
	return p
}

func (x Recipient_Language) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Recipient_Language) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_notification_recipient_proto_enumTypes[1].Descriptor()
}

func (Recipient_Language) Type() protoreflect.EnumType {
	return &file_proto_notification_recipient_proto_enumTypes[1]
}

func (x Recipient_Language) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Recipient_Language.Descriptor instead.
func (Recipient_Language) EnumDescriptor() ([]byte, []int) {
	return file_proto_notification_recipient_proto_rawDescGZIP(), []int{0, 1}
}

type Recipient struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type                  Recipient_Type         `protobuf:"varint,1,opt,name=type,proto3,enum=bucketeer.notification.Recipient_Type" json:"type"`
	SlackChannelRecipient *SlackChannelRecipient `protobuf:"bytes,2,opt,name=slack_channel_recipient,json=slackChannelRecipient,proto3" json:"slack_channel_recipient"`
	Language              Recipient_Language     `protobuf:"varint,3,opt,name=language,proto3,enum=bucketeer.notification.Recipient_Language" json:"language"`
}

func (x *Recipient) Reset() {
	*x = Recipient{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_recipient_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Recipient) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Recipient) ProtoMessage() {}

func (x *Recipient) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_recipient_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Recipient.ProtoReflect.Descriptor instead.
func (*Recipient) Descriptor() ([]byte, []int) {
	return file_proto_notification_recipient_proto_rawDescGZIP(), []int{0}
}

func (x *Recipient) GetType() Recipient_Type {
	if x != nil {
		return x.Type
	}
	return Recipient_SlackChannel
}

func (x *Recipient) GetSlackChannelRecipient() *SlackChannelRecipient {
	if x != nil {
		return x.SlackChannelRecipient
	}
	return nil
}

func (x *Recipient) GetLanguage() Recipient_Language {
	if x != nil {
		return x.Language
	}
	return Recipient_ENGLISH
}

type SlackChannelRecipient struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WebhookUrl string `protobuf:"bytes,1,opt,name=webhook_url,json=webhookUrl,proto3" json:"webhook_url"`
}

func (x *SlackChannelRecipient) Reset() {
	*x = SlackChannelRecipient{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_recipient_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SlackChannelRecipient) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SlackChannelRecipient) ProtoMessage() {}

func (x *SlackChannelRecipient) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_recipient_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SlackChannelRecipient.ProtoReflect.Descriptor instead.
func (*SlackChannelRecipient) Descriptor() ([]byte, []int) {
	return file_proto_notification_recipient_proto_rawDescGZIP(), []int{1}
}

func (x *SlackChannelRecipient) GetWebhookUrl() string {
	if x != nil {
		return x.WebhookUrl
	}
	return ""
}

var File_proto_notification_recipient_proto protoreflect.FileDescriptor

var file_proto_notification_recipient_proto_rawDesc = []byte{
	0x0a, 0x22, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0xb7, 0x02, 0x0a,
	0x09, 0x52, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x3a, 0x0a, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65,
	0x74, 0x65, 0x65, 0x72, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x52, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x65, 0x0a, 0x17, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x5f,
	0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74,
	0x65, 0x65, 0x72, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x53, 0x6c, 0x61, 0x63, 0x6b, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x63,
	0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x52, 0x15, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x43, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x46, 0x0a,
	0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x2a, 0x2e, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2e, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x52, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65,
	0x6e, 0x74, 0x2e, 0x4c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x52, 0x08, 0x6c, 0x61, 0x6e,
	0x67, 0x75, 0x61, 0x67, 0x65, 0x22, 0x18, 0x0a, 0x04, 0x54, 0x79, 0x70, 0x65, 0x12, 0x10, 0x0a,
	0x0c, 0x53, 0x6c, 0x61, 0x63, 0x6b, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x10, 0x00, 0x22,
	0x25, 0x0a, 0x08, 0x4c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x45,
	0x4e, 0x47, 0x4c, 0x49, 0x53, 0x48, 0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x4a, 0x41, 0x50, 0x41,
	0x4e, 0x45, 0x53, 0x45, 0x10, 0x01, 0x22, 0x38, 0x0a, 0x15, 0x53, 0x6c, 0x61, 0x63, 0x6b, 0x43,
	0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x52, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x12,
	0x1f, 0x0a, 0x0b, 0x77, 0x65, 0x62, 0x68, 0x6f, 0x6f, 0x6b, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x77, 0x65, 0x62, 0x68, 0x6f, 0x6f, 0x6b, 0x55, 0x72, 0x6c,
	0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x62,
	0x75, 0x63, 0x6b, 0x65, 0x74, 0x65, 0x65, 0x72, 0x2d, 0x69, 0x6f, 0x2f, 0x62, 0x75, 0x63, 0x6b,
	0x65, 0x74, 0x65, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_notification_recipient_proto_rawDescOnce sync.Once
	file_proto_notification_recipient_proto_rawDescData = file_proto_notification_recipient_proto_rawDesc
)

func file_proto_notification_recipient_proto_rawDescGZIP() []byte {
	file_proto_notification_recipient_proto_rawDescOnce.Do(func() {
		file_proto_notification_recipient_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_notification_recipient_proto_rawDescData)
	})
	return file_proto_notification_recipient_proto_rawDescData
}

var file_proto_notification_recipient_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_proto_notification_recipient_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_proto_notification_recipient_proto_goTypes = []interface{}{
	(Recipient_Type)(0),           // 0: bucketeer.notification.Recipient.Type
	(Recipient_Language)(0),       // 1: bucketeer.notification.Recipient.Language
	(*Recipient)(nil),             // 2: bucketeer.notification.Recipient
	(*SlackChannelRecipient)(nil), // 3: bucketeer.notification.SlackChannelRecipient
}
var file_proto_notification_recipient_proto_depIdxs = []int32{
	0, // 0: bucketeer.notification.Recipient.type:type_name -> bucketeer.notification.Recipient.Type
	3, // 1: bucketeer.notification.Recipient.slack_channel_recipient:type_name -> bucketeer.notification.SlackChannelRecipient
	1, // 2: bucketeer.notification.Recipient.language:type_name -> bucketeer.notification.Recipient.Language
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_proto_notification_recipient_proto_init() }
func file_proto_notification_recipient_proto_init() {
	if File_proto_notification_recipient_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_notification_recipient_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Recipient); i {
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
		file_proto_notification_recipient_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SlackChannelRecipient); i {
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
			RawDescriptor: file_proto_notification_recipient_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_notification_recipient_proto_goTypes,
		DependencyIndexes: file_proto_notification_recipient_proto_depIdxs,
		EnumInfos:         file_proto_notification_recipient_proto_enumTypes,
		MessageInfos:      file_proto_notification_recipient_proto_msgTypes,
	}.Build()
	File_proto_notification_recipient_proto = out.File
	file_proto_notification_recipient_proto_rawDesc = nil
	file_proto_notification_recipient_proto_goTypes = nil
	file_proto_notification_recipient_proto_depIdxs = nil
}
