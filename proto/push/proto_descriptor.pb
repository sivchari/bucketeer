
�
proto/push/command.protobucketeer.push"q
CreatePushCommand
tags (	Rtags
name (	Rname.
fcm_service_account (RfcmServiceAccountJ"(
AddPushTagsCommand
tags (	Rtags"+
DeletePushTagsCommand
tags (	Rtags"
DeletePushCommand"'
RenamePushCommand
name (	RnameB.Z,github.com/bucketeer-io/bucketeer/proto/pushbproto3
�
proto/push/push.protobucketeer.push"�
Push
id (	Rid
tags (	Rtags
deleted (Rdeleted
name (	Rname

created_at (R	createdAt

updated_at (R	updatedAt.
fcm_service_account (	RfcmServiceAccount
disabled	 (Rdisabled%
environment_id
 (	RenvironmentId)
environment_name (	RenvironmentNameJB.Z,github.com/bucketeer-io/bucketeer/proto/pushbproto3
�
google/protobuf/wrappers.protogoogle.protobuf"#
DoubleValue
value (Rvalue""

FloatValue
value (Rvalue""

Int64Value
value (Rvalue"#
UInt64Value
value (Rvalue""

Int32Value
value (Rvalue"#
UInt32Value
value (Rvalue"!
	BoolValue
value (Rvalue"#
StringValue
value (	Rvalue""

BytesValue
value (RvalueB�
com.google.protobufBWrappersProtoPZ1google.golang.org/protobuf/types/known/wrapperspb��GPB�Google.Protobuf.WellKnownTypesbproto3
�
google/api/http.proto
google.api"y
Http*
rules (2.google.api.HttpRuleRrulesE
fully_decode_reserved_expansion (RfullyDecodeReservedExpansion"�
HttpRule
selector (	Rselector
get (	H Rget
put (	H Rput
post (	H Rpost
delete (	H Rdelete
patch (	H Rpatch7
custom (2.google.api.CustomHttpPatternH Rcustom
body (	RbodyE
additional_bindings (2.google.api.HttpRuleRadditionalBindingsB	
pattern";
CustomHttpPattern
kind (	Rkind
path (	RpathBj
com.google.apiB	HttpProtoPZAgoogle.golang.org/genproto/googleapis/api/annotations;annotations��GAPIbproto3
�F
 google/protobuf/descriptor.protogoogle.protobuf"M
FileDescriptorSet8
file (2$.google.protobuf.FileDescriptorProtoRfile"�
FileDescriptorProto
name (	Rname
package (	Rpackage

dependency (	R
dependency+
public_dependency
 (RpublicDependency'
weak_dependency (RweakDependencyC
message_type (2 .google.protobuf.DescriptorProtoRmessageTypeA
	enum_type (2$.google.protobuf.EnumDescriptorProtoRenumTypeA
service (2'.google.protobuf.ServiceDescriptorProtoRserviceC
	extension (2%.google.protobuf.FieldDescriptorProtoR	extension6
options (2.google.protobuf.FileOptionsRoptionsI
source_code_info	 (2.google.protobuf.SourceCodeInfoRsourceCodeInfo
syntax (	Rsyntax
edition (	Redition"�
DescriptorProto
name (	Rname;
field (2%.google.protobuf.FieldDescriptorProtoRfieldC
	extension (2%.google.protobuf.FieldDescriptorProtoR	extensionA
nested_type (2 .google.protobuf.DescriptorProtoR
nestedTypeA
	enum_type (2$.google.protobuf.EnumDescriptorProtoRenumTypeX
extension_range (2/.google.protobuf.DescriptorProto.ExtensionRangeRextensionRangeD

oneof_decl (2%.google.protobuf.OneofDescriptorProtoR	oneofDecl9
options (2.google.protobuf.MessageOptionsRoptionsU
reserved_range	 (2..google.protobuf.DescriptorProto.ReservedRangeRreservedRange#
reserved_name
 (	RreservedNamez
ExtensionRange
start (Rstart
end (Rend@
options (2&.google.protobuf.ExtensionRangeOptionsRoptions7
ReservedRange
start (Rstart
end (Rend"�
ExtensionRangeOptionsX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOptionY
declaration (22.google.protobuf.ExtensionRangeOptions.DeclarationB�Rdeclarationh
verification (28.google.protobuf.ExtensionRangeOptions.VerificationState:
UNVERIFIEDRverification�
Declaration
number (Rnumber
	full_name (	RfullName
type (	Rtype#
is_repeated (BR
isRepeated
reserved (Rreserved
repeated (Rrepeated"4
VerificationState
DECLARATION 

UNVERIFIED*	�����"�
FieldDescriptorProto
name (	Rname
number (RnumberA
label (2+.google.protobuf.FieldDescriptorProto.LabelRlabel>
type (2*.google.protobuf.FieldDescriptorProto.TypeRtype
	type_name (	RtypeName
extendee (	Rextendee#
default_value (	RdefaultValue
oneof_index	 (R
oneofIndex
	json_name
 (	RjsonName7
options (2.google.protobuf.FieldOptionsRoptions'
proto3_optional (Rproto3Optional"�
Type
TYPE_DOUBLE

TYPE_FLOAT

TYPE_INT64
TYPE_UINT64

TYPE_INT32
TYPE_FIXED64
TYPE_FIXED32
	TYPE_BOOL
TYPE_STRING	

TYPE_GROUP

TYPE_MESSAGE

TYPE_BYTES
TYPE_UINT32
	TYPE_ENUM
TYPE_SFIXED32
TYPE_SFIXED64
TYPE_SINT32
TYPE_SINT64"C
Label
LABEL_OPTIONAL
LABEL_REQUIRED
LABEL_REPEATED"c
OneofDescriptorProto
name (	Rname7
options (2.google.protobuf.OneofOptionsRoptions"�
EnumDescriptorProto
name (	Rname?
value (2).google.protobuf.EnumValueDescriptorProtoRvalue6
options (2.google.protobuf.EnumOptionsRoptions]
reserved_range (26.google.protobuf.EnumDescriptorProto.EnumReservedRangeRreservedRange#
reserved_name (	RreservedName;
EnumReservedRange
start (Rstart
end (Rend"�
EnumValueDescriptorProto
name (	Rname
number (Rnumber;
options (2!.google.protobuf.EnumValueOptionsRoptions"�
ServiceDescriptorProto
name (	Rname>
method (2&.google.protobuf.MethodDescriptorProtoRmethod9
options (2.google.protobuf.ServiceOptionsRoptions"�
MethodDescriptorProto
name (	Rname

input_type (	R	inputType
output_type (	R
outputType8
options (2.google.protobuf.MethodOptionsRoptions0
client_streaming (:falseRclientStreaming0
server_streaming (:falseRserverStreaming"�	
FileOptions!
java_package (	RjavaPackage0
java_outer_classname (	RjavaOuterClassname5
java_multiple_files
 (:falseRjavaMultipleFilesD
java_generate_equals_and_hash (BRjavaGenerateEqualsAndHash:
java_string_check_utf8 (:falseRjavaStringCheckUtf8S
optimize_for	 (2).google.protobuf.FileOptions.OptimizeMode:SPEEDRoptimizeFor

go_package (	R	goPackage5
cc_generic_services (:falseRccGenericServices9
java_generic_services (:falseRjavaGenericServices5
py_generic_services (:falseRpyGenericServices7
php_generic_services* (:falseRphpGenericServices%

deprecated (:falseR
deprecated.
cc_enable_arenas (:trueRccEnableArenas*
objc_class_prefix$ (	RobjcClassPrefix)
csharp_namespace% (	RcsharpNamespace!
swift_prefix' (	RswiftPrefix(
php_class_prefix( (	RphpClassPrefix#
php_namespace) (	RphpNamespace4
php_metadata_namespace, (	RphpMetadataNamespace!
ruby_package- (	RrubyPackageX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption":
OptimizeMode	
SPEED
	CODE_SIZE
LITE_RUNTIME*	�����J&'"�
MessageOptions<
message_set_wire_format (:falseRmessageSetWireFormatL
no_standard_descriptor_accessor (:falseRnoStandardDescriptorAccessor%

deprecated (:falseR
deprecated
	map_entry (RmapEntryV
&deprecated_legacy_json_field_conflicts (BR"deprecatedLegacyJsonFieldConflictsX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption*	�����JJJJ	J	
"�	
FieldOptionsA
ctype (2#.google.protobuf.FieldOptions.CType:STRINGRctype
packed (RpackedG
jstype (2$.google.protobuf.FieldOptions.JSType:	JS_NORMALRjstype
lazy (:falseRlazy.
unverified_lazy (:falseRunverifiedLazy%

deprecated (:falseR
deprecated
weak
 (:falseRweak(
debug_redact (:falseRdebugRedactK
	retention (2-.google.protobuf.FieldOptions.OptionRetentionR	retentionJ
target (2..google.protobuf.FieldOptions.OptionTargetTypeBRtargetH
targets (2..google.protobuf.FieldOptions.OptionTargetTypeRtargetsX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption"/
CType

STRING 
CORD
STRING_PIECE"5
JSType
	JS_NORMAL 
	JS_STRING
	JS_NUMBER"U
OptionRetention
RETENTION_UNKNOWN 
RETENTION_RUNTIME
RETENTION_SOURCE"�
OptionTargetType
TARGET_TYPE_UNKNOWN 
TARGET_TYPE_FILE
TARGET_TYPE_EXTENSION_RANGE
TARGET_TYPE_MESSAGE
TARGET_TYPE_FIELD
TARGET_TYPE_ONEOF
TARGET_TYPE_ENUM
TARGET_TYPE_ENUM_ENTRY
TARGET_TYPE_SERVICE
TARGET_TYPE_METHOD	*	�����J"s
OneofOptionsX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption*	�����"�
EnumOptions
allow_alias (R
allowAlias%

deprecated (:falseR
deprecatedV
&deprecated_legacy_json_field_conflicts (BR"deprecatedLegacyJsonFieldConflictsX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption*	�����J"�
EnumValueOptions%

deprecated (:falseR
deprecatedX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption*	�����"�
ServiceOptions%

deprecated! (:falseR
deprecatedX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption*	�����"�
MethodOptions%

deprecated! (:falseR
deprecatedq
idempotency_level" (2/.google.protobuf.MethodOptions.IdempotencyLevel:IDEMPOTENCY_UNKNOWNRidempotencyLevelX
uninterpreted_option� (2$.google.protobuf.UninterpretedOptionRuninterpretedOption"P
IdempotencyLevel
IDEMPOTENCY_UNKNOWN 
NO_SIDE_EFFECTS

IDEMPOTENT*	�����"�
UninterpretedOptionA
name (2-.google.protobuf.UninterpretedOption.NamePartRname)
identifier_value (	RidentifierValue,
positive_int_value (RpositiveIntValue,
negative_int_value (RnegativeIntValue!
double_value (RdoubleValue!
string_value (RstringValue'
aggregate_value (	RaggregateValueJ
NamePart
	name_part (	RnamePart!
is_extension (RisExtension"�
SourceCodeInfoD
location (2(.google.protobuf.SourceCodeInfo.LocationRlocation�
Location
path (BRpath
span (BRspan)
leading_comments (	RleadingComments+
trailing_comments (	RtrailingComments:
leading_detached_comments (	RleadingDetachedComments"�
GeneratedCodeInfoM

annotation (2-.google.protobuf.GeneratedCodeInfo.AnnotationR
annotation�

Annotation
path (BRpath
source_file (	R
sourceFile
begin (Rbegin
end (RendR
semantic (26.google.protobuf.GeneratedCodeInfo.Annotation.SemanticRsemantic"(
Semantic
NONE 
SET	
ALIASB~
com.google.protobufBDescriptorProtosHZ-google.golang.org/protobuf/types/descriptorpb��GPB�Google.Protobuf.Reflection
�
google/api/annotations.proto
google.apigoogle/api/http.proto google/protobuf/descriptor.proto:K
http.google.protobuf.MethodOptions�ʼ" (2.google.api.HttpRuleRhttpBn
com.google.apiBAnnotationsProtoPZAgoogle.golang.org/genproto/googleapis/api/annotations;annotations�GAPIbproto3
�
google/api/field_behavior.proto
google.api google/protobuf/descriptor.proto*�
FieldBehavior
FIELD_BEHAVIOR_UNSPECIFIED 
OPTIONAL
REQUIRED
OUTPUT_ONLY

INPUT_ONLY
	IMMUTABLE
UNORDERED_LIST
NON_EMPTY_DEFAULT

IDENTIFIER:d
field_behavior.google.protobuf.FieldOptions� (2.google.api.FieldBehaviorB RfieldBehaviorBp
com.google.apiBFieldBehaviorProtoPZAgoogle.golang.org/genproto/googleapis/api/annotations;annotations�GAPIbproto3
�
google/protobuf/struct.protogoogle.protobuf"�
Struct;
fields (2#.google.protobuf.Struct.FieldsEntryRfieldsQ
FieldsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
Value;

null_value (2.google.protobuf.NullValueH R	nullValue#
number_value (H RnumberValue#
string_value (	H RstringValue

bool_value (H R	boolValue<
struct_value (2.google.protobuf.StructH RstructValue;

list_value (2.google.protobuf.ListValueH R	listValueB
kind";
	ListValue.
values (2.google.protobuf.ValueRvalues*
	NullValue

NULL_VALUE B
com.google.protobufBStructProtoPZ/google.golang.org/protobuf/types/known/structpb��GPB�Google.Protobuf.WellKnownTypesbproto3
�>
,protoc-gen-openapiv2/options/openapiv2.proto)grpc.gateway.protoc_gen_openapiv2.optionsgoogle/protobuf/struct.proto"�
Swagger
swagger (	RswaggerC
info (2/.grpc.gateway.protoc_gen_openapiv2.options.InfoRinfo
host (	Rhost
	base_path (	RbasePathK
schemes (21.grpc.gateway.protoc_gen_openapiv2.options.SchemeRschemes
consumes (	Rconsumes
produces (	Rproduces_
	responses
 (2A.grpc.gateway.protoc_gen_openapiv2.options.Swagger.ResponsesEntryR	responsesq
security_definitions (2>.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitionsRsecurityDefinitionsZ
security (2>.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirementRsecurityB
tags (2..grpc.gateway.protoc_gen_openapiv2.options.TagRtagse
external_docs (2@.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentationRexternalDocsb

extensions (2B.grpc.gateway.protoc_gen_openapiv2.options.Swagger.ExtensionsEntryR
extensionsq
ResponsesEntry
key (	RkeyI
value (23.grpc.gateway.protoc_gen_openapiv2.options.ResponseRvalue:8U
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8J	J	
"�
	Operation
tags (	Rtags
summary (	Rsummary 
description (	Rdescriptione
external_docs (2@.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentationRexternalDocs!
operation_id (	RoperationId
consumes (	Rconsumes
produces (	Rproducesa
	responses	 (2C.grpc.gateway.protoc_gen_openapiv2.options.Operation.ResponsesEntryR	responsesK
schemes
 (21.grpc.gateway.protoc_gen_openapiv2.options.SchemeRschemes

deprecated (R
deprecatedZ
security (2>.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirementRsecurityd

extensions (2D.grpc.gateway.protoc_gen_openapiv2.options.Operation.ExtensionsEntryR
extensionsU

parameters (25.grpc.gateway.protoc_gen_openapiv2.options.ParametersR
parametersq
ResponsesEntry
key (	RkeyI
value (23.grpc.gateway.protoc_gen_openapiv2.options.ResponseRvalue:8U
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8J	"b

ParametersT
headers (2:.grpc.gateway.protoc_gen_openapiv2.options.HeaderParameterRheaders"�
HeaderParameter
name (	Rname 
description (	RdescriptionS
type (2?.grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter.TypeRtype
format (	Rformat
required (Rrequired"E
Type
UNKNOWN 

STRING

NUMBER
INTEGER
BOOLEANJJ"�
Header 
description (	Rdescription
type (	Rtype
format (	Rformat
default (	Rdefault
pattern (	RpatternJJJJ	J	
J
JJJJJJJ"�
Response 
description (	RdescriptionI
schema (21.grpc.gateway.protoc_gen_openapiv2.options.SchemaRschemaZ
headers (2@.grpc.gateway.protoc_gen_openapiv2.options.Response.HeadersEntryRheaders]
examples (2A.grpc.gateway.protoc_gen_openapiv2.options.Response.ExamplesEntryRexamplesc

extensions (2C.grpc.gateway.protoc_gen_openapiv2.options.Response.ExtensionsEntryR
extensionsm
HeadersEntry
key (	RkeyG
value (21.grpc.gateway.protoc_gen_openapiv2.options.HeaderRvalue:8;
ExamplesEntry
key (	Rkey
value (	Rvalue:8U
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
Info
title (	Rtitle 
description (	Rdescription(
terms_of_service (	RtermsOfServiceL
contact (22.grpc.gateway.protoc_gen_openapiv2.options.ContactRcontactL
license (22.grpc.gateway.protoc_gen_openapiv2.options.LicenseRlicense
version (	Rversion_

extensions (2?.grpc.gateway.protoc_gen_openapiv2.options.Info.ExtensionsEntryR
extensionsU
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"E
Contact
name (	Rname
url (	Rurl
email (	Remail"/
License
name (	Rname
url (	Rurl"K
ExternalDocumentation 
description (	Rdescription
url (	Rurl"�
SchemaV
json_schema (25.grpc.gateway.protoc_gen_openapiv2.options.JSONSchemaR
jsonSchema$
discriminator (	Rdiscriminator
	read_only (RreadOnlye
external_docs (2@.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentationRexternalDocs
example (	RexampleJ"�


JSONSchema
ref (	Rref
title (	Rtitle 
description (	Rdescription
default (	Rdefault
	read_only (RreadOnly
example	 (	Rexample
multiple_of
 (R
multipleOf
maximum (Rmaximum+
exclusive_maximum (RexclusiveMaximum
minimum (Rminimum+
exclusive_minimum (RexclusiveMinimum

max_length (R	maxLength

min_length (R	minLength
pattern (	Rpattern
	max_items (RmaxItems
	min_items (RminItems!
unique_items (RuniqueItems%
max_properties (RmaxProperties%
min_properties (RminProperties
required (	Rrequired
array" (	Rarray_
type# (2K.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypesRtype
format$ (	Rformat
enum. (	Renumz
field_configuration� (2H.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfigurationRfieldConfiguratione

extensions0 (2E.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.ExtensionsEntryR
extensions<
FieldConfiguration&
path_param_name/ (	RpathParamNameU
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"w
JSONSchemaSimpleTypes
UNKNOWN 	
ARRAY
BOOLEAN
INTEGER
NULL

NUMBER

OBJECT

STRINGJJJJJJJJJJ"J%*J*+J+."�
Tag
name (	Rname 
description (	Rdescriptione
external_docs (2@.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentationRexternalDocs^

extensions (2>.grpc.gateway.protoc_gen_openapiv2.options.Tag.ExtensionsEntryR
extensionsU
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"�
SecurityDefinitionsh
security (2L.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions.SecurityEntryRsecurityv
SecurityEntry
key (	RkeyO
value (29.grpc.gateway.protoc_gen_openapiv2.options.SecuritySchemeRvalue:8"�
SecuritySchemeR
type (2>.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.TypeRtype 
description (	Rdescription
name (	RnameL
in (2<.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.InRinR
flow (2>.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.FlowRflow+
authorization_url (	RauthorizationUrl
	token_url (	RtokenUrlI
scopes (21.grpc.gateway.protoc_gen_openapiv2.options.ScopesRscopesi

extensions	 (2I.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.ExtensionsEntryR
extensionsU
ExtensionsEntry
key (	Rkey,
value (2.google.protobuf.ValueRvalue:8"K
Type
TYPE_INVALID 

TYPE_BASIC
TYPE_API_KEY
TYPE_OAUTH2"1
In

IN_INVALID 
IN_QUERY
	IN_HEADER"j
Flow
FLOW_INVALID 
FLOW_IMPLICIT
FLOW_PASSWORD
FLOW_APPLICATION
FLOW_ACCESS_CODE"�
SecurityRequirement�
security_requirement (2W.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementEntryRsecurityRequirement0
SecurityRequirementValue
scope (	Rscope�
SecurityRequirementEntry
key (	Rkeym
value (2W.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValueRvalue:8"�
ScopesR
scope (2<.grpc.gateway.protoc_gen_openapiv2.options.Scopes.ScopeEntryRscope8

ScopeEntry
key (	Rkey
value (	Rvalue:8*;
Scheme
UNKNOWN 
HTTP	
HTTPS
WS
WSSBHZFgithub.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/optionsbproto3
�
.protoc-gen-openapiv2/options/annotations.proto)grpc.gateway.protoc_gen_openapiv2.options google/protobuf/descriptor.proto,protoc-gen-openapiv2/options/openapiv2.proto:~
openapiv2_swagger.google.protobuf.FileOptions� (22.grpc.gateway.protoc_gen_openapiv2.options.SwaggerRopenapiv2Swagger:�
openapiv2_operation.google.protobuf.MethodOptions� (24.grpc.gateway.protoc_gen_openapiv2.options.OperationRopenapiv2Operation:~
openapiv2_schema.google.protobuf.MessageOptions� (21.grpc.gateway.protoc_gen_openapiv2.options.SchemaRopenapiv2Schema:u
openapiv2_tag.google.protobuf.ServiceOptions� (2..grpc.gateway.protoc_gen_openapiv2.options.TagRopenapiv2Tag:~
openapiv2_field.google.protobuf.FieldOptions� (25.grpc.gateway.protoc_gen_openapiv2.options.JSONSchemaRopenapiv2FieldBHZFgithub.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/optionsbproto3
�!
proto/push/service.protobucketeer.pushgoogle/protobuf/wrappers.protogoogle/api/annotations.protogoogle/api/field_behavior.proto.protoc-gen-openapiv2/options/annotations.protoproto/push/push.protoproto/push/command.proto"�
CreatePushRequest?
command (2!.bucketeer.push.CreatePushCommandBRcommand
tags (	Rtags
name (	Rname.
fcm_service_account (RfcmServiceAccount%
environment_id (	RenvironmentIdJ">
CreatePushResponse(
push (2.bucketeer.push.PushRpush"�
ListPushesRequest
	page_size (RpageSize
cursor (	RcursorD
order_by (2).bucketeer.push.ListPushesRequest.OrderByRorderByY
order_direction (20.bucketeer.push.ListPushesRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword%
environment_id (	RenvironmentId'
organization_id (	RorganizationId6
disabled	 (2.google.protobuf.BoolValueRdisabled"\
OrderBy
DEFAULT 
NAME

CREATED_AT

UPDATED_AT
ENVIRONMENT	
STATE"#
OrderDirection
ASC 
DESCJ"{
ListPushesResponse,
pushes (2.bucketeer.push.PushRpushes
cursor (	Rcursor
total_count (R
totalCount"�
DeletePushRequest
id (	Rid;
command (2!.bucketeer.push.DeletePushCommandRcommand%
environment_id (	RenvironmentIdJ"
DeletePushResponse"�
UpdatePushRequest
id (	B�ARidY
add_push_tags_command (2".bucketeer.push.AddPushTagsCommandBRaddPushTagsCommandb
delete_push_tags_command (2%.bucketeer.push.DeletePushTagsCommandBRdeletePushTagsCommandU
rename_push_command (2!.bucketeer.push.RenamePushCommandBRrenamePushCommand
tags (	Rtags0
name (2.google.protobuf.StringValueRname*
environment_id (	B�ARenvironmentId6
disabled (2.google.protobuf.BoolValueRdisabledJ">
UpdatePushResponse(
push (2.bucketeer.push.PushRpush"Q
GetPushRequest*
environment_id (	B�ARenvironmentId
id (	B�ARid";
GetPushResponse(
push (2.bucketeer.push.PushRpush2�
PushService�

ListPushes!.bucketeer.push.ListPushesRequest".bucketeer.push.ListPushesResponse"��A�
pushListList pushes.*web.v1.push.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���
/v1/pushes�

CreatePush!.bucketeer.push.CreatePushRequest".bucketeer.push.CreatePushResponse"��A�
pushCreateCreate a push.*web.v1.push.createJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���"/v1/push:*�

UpdatePush!.bucketeer.push.UpdatePushRequest".bucketeer.push.UpdatePushResponse"��A�
pushUpdateUpdate a push.*web.v1.push.updateJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���2/v1/push:*�
GetPush.bucketeer.push.GetPushRequest.bucketeer.push.GetPushResponse"��A�
pushGetGet a push.*web.v1.push.getJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���
/v1/pushU

DeletePush!.bucketeer.push.DeletePushRequest".bucketeer.push.DeletePushResponse" B.Z,github.com/bucketeer-io/bucketeer/proto/pushbproto3