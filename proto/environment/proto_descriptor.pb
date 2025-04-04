
�
proto/environment/command.protobucketeer.environment"�
CreateEnvironmentV2Command
name (	Rname
url_code (	RurlCode 
description (	Rdescription

project_id (	R	projectId'
require_comment (RrequireComment"0
RenameEnvironmentV2Command
name (	Rname"I
%ChangeDescriptionEnvironmentV2Command 
description (	Rdescription"
ArchiveEnvironmentV2Command"
UnarchiveEnvironmentV2Command"�
CreateProjectCommand'
organization_id (	RorganizationId
name (	Rname 
description (	Rdescription
url_code (	RurlCode"�
CreateTrialProjectCommand
id (	BRid
email (	Remail
name (	Rname
url_code (	RurlCode
owner_email (	R
ownerEmail"*
RenameProjectCommand
name (	Rname"C
ChangeDescriptionProjectCommand 
description (	Rdescription"
EnableProjectCommand"
DisableProjectCommand"
ConvertTrialProjectCommand"�
CreateOrganizationCommand
name (	Rname
url_code (	RurlCode 
description (	Rdescription
is_trial (RisTrial&
is_system_admin (RisSystemAdmin
owner_email (	R
ownerEmail"3
ChangeNameOrganizationCommand
name (	Rname"H
$ChangeDescriptionOrganizationCommand 
description (	Rdescription"F
#ChangeOwnerEmailOrganizationCommand
owner_email (	R
ownerEmail"F
ChangeRequireCommentCommand'
require_comment (RrequireComment"
EnableOrganizationCommand"
DisableOrganizationCommand"
ArchiveOrganizationCommand"
UnarchiveOrganizationCommand"!
ConvertTrialOrganizationCommandB5Z3github.com/bucketeer-io/bucketeer/proto/environmentbproto3
�
#proto/environment/environment.protobucketeer.environment"�
EnvironmentV2
id (	Rid
name (	Rname
url_code (	RurlCode 
description (	Rdescription

project_id (	R	projectId
archived (Rarchived

created_at (R	createdAt

updated_at (R	updatedAt'
organization_id	 (	RorganizationId'
require_comment
 (RrequireComment,
feature_flag_count (RfeatureFlagCountB5Z3github.com/bucketeer-io/bucketeer/proto/environmentbproto3
�
$proto/environment/organization.protobucketeer.environment"�
Organization
id (	Rid
name (	Rname
url_code (	RurlCode 
description (	Rdescription
disabled (Rdisabled
archived (Rarchived
trial (Rtrial

created_at (R	createdAt

updated_at	 (R	updatedAt!
system_admin
 (RsystemAdmin#
project_count (RprojectCount+
environment_count (RenvironmentCount

user_count (R	userCount
owner_email (	R
ownerEmailB5Z3github.com/bucketeer-io/bucketeer/proto/environmentbproto3
�
proto/environment/project.protobucketeer.environment"�
Project
id (	Rid 
description (	Rdescription
disabled (Rdisabled
trial (Rtrial#
creator_email (	RcreatorEmail

created_at (R	createdAt

updated_at (R	updatedAt
name (	Rname
url_code	 (	RurlCode'
organization_id
 (	RorganizationId+
environment_count (RenvironmentCount,
feature_flag_count (RfeatureFlagCountB5Z3github.com/bucketeer-io/bucketeer/proto/environmentbproto3
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
�
google/api/annotations.proto
google.apigoogle/api/http.proto google/protobuf/descriptor.proto:K
http.google.protobuf.MethodOptions�ʼ" (2.google.api.HttpRuleRhttpBn
com.google.apiBAnnotationsProtoPZAgoogle.golang.org/genproto/googleapis/api/annotations;annotations�GAPIbproto3
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
��
proto/environment/service.protobucketeer.environmentgoogle/protobuf/wrappers.protogoogle/api/field_behavior.protogoogle/api/annotations.proto.protoc-gen-openapiv2/options/annotations.proto#proto/environment/environment.protoproto/environment/project.proto$proto/environment/organization.protoproto/environment/command.proto")
GetEnvironmentV2Request
id (	Rid"b
GetEnvironmentV2ResponseF
environment (2$.bucketeer.environment.EnvironmentV2Renvironment"�
ListEnvironmentsV2Request
	page_size (RpageSize
cursor (	RcursorS
order_by (28.bucketeer.environment.ListEnvironmentsV2Request.OrderByRorderByh
order_direction (2?.bucketeer.environment.ListEnvironmentsV2Request.OrderDirectionRorderDirection

project_id (	R	projectId6
archived (2.google.protobuf.BoolValueRarchived%
search_keyword (	RsearchKeyword'
organization_id (	RorganizationId"i
OrderBy
DEFAULT 
ID
NAME
URL_CODE

CREATED_AT

UPDATED_AT
FEATURE_COUNT"#
OrderDirection
ASC 
DESC"�
ListEnvironmentsV2ResponseH
environments (2$.bucketeer.environment.EnvironmentV2Renvironments
cursor (	Rcursor
total_count (R
totalCount"�
CreateEnvironmentV2Request^
command (21.bucketeer.environment.CreateEnvironmentV2CommandB�A2
deprecatedRcommand
name (	B�ARname
url_code (	B�ARurlCode 
description (	Rdescription"

project_id (	B�AR	projectId'
require_comment (RrequireComment"e
CreateEnvironmentV2ResponseF
environment (2$.bucketeer.environment.EnvironmentV2Renvironment"�
UpdateEnvironmentV2Request
id (	B�ARidk
rename_command (21.bucketeer.environment.RenameEnvironmentV2CommandB�A2
deprecatedRrenameCommand�
change_description_command (2<.bucketeer.environment.ChangeDescriptionEnvironmentV2CommandB�A2
deprecatedRchangeDescriptionCommand�
change_require_comment_command (22.bucketeer.environment.ChangeRequireCommentCommandB�A2
deprecatedRchangeRequireCommentCommand0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescriptionC
require_comment (2.google.protobuf.BoolValueRrequireComment"
UpdateEnvironmentV2Response"{
ArchiveEnvironmentV2Request
id (	RidL
command (22.bucketeer.environment.ArchiveEnvironmentV2CommandRcommand"
ArchiveEnvironmentV2Response"
UnarchiveEnvironmentV2Request
id (	RidN
command (24.bucketeer.environment.UnarchiveEnvironmentV2CommandRcommand" 
UnarchiveEnvironmentV2Response"L
GetProjectRequest
id (	Rid'
organization_id (	RorganizationId"N
GetProjectResponse8
project (2.bucketeer.environment.ProjectRproject"�
ListProjectsRequest
	page_size (RpageSize
cursor (	RcursorM
order_by (22.bucketeer.environment.ListProjectsRequest.OrderByRorderByb
order_direction (29.bucketeer.environment.ListProjectsRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword6
disabled (2.google.protobuf.BoolValueRdisabled)
organization_ids (	RorganizationIds"�
OrderBy
DEFAULT 
ID

CREATED_AT

UPDATED_AT
NAME
URL_CODE
ENVIRONMENT_COUNT
FEATURE_COUNT
CREATOR_EMAIL"#
OrderDirection
ASC 
DESC"�
ListProjectsResponse:
projects (2.bucketeer.environment.ProjectRprojects
cursor (	Rcursor
total_count (R
totalCount"�
CreateProjectRequestX
command (2+.bucketeer.environment.CreateProjectCommandB�A2
deprecatedRcommand,
organization_id (	B�ARorganizationId
name (	B�ARname 
description (	Rdescription
url_code (	B�ARurlCode"Q
CreateProjectResponse8
project (2.bucketeer.environment.ProjectRproject"g
CreateTrialProjectRequestJ
command (20.bucketeer.environment.CreateTrialProjectCommandRcommand"
CreateTrialProjectResponse"�
UpdateProjectRequest
id (	B�ARid�
change_description_command (26.bucketeer.environment.ChangeDescriptionProjectCommandB�A2
deprecatedRchangeDescriptionCommande
rename_command (2+.bucketeer.environment.RenameProjectCommandB�A2
deprecatedRrenameCommand,
organization_id (	B�ARorganizationId0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescription"
UpdateProjectResponse"m
EnableProjectRequest
id (	RidE
command (2+.bucketeer.environment.EnableProjectCommandRcommand"
EnableProjectResponse"o
DisableProjectRequest
id (	RidF
command (2,.bucketeer.environment.DisableProjectCommandRcommand"
DisableProjectResponse"y
ConvertTrialProjectRequest
id (	RidK
command (21.bucketeer.environment.ConvertTrialProjectCommandRcommand"
ConvertTrialProjectResponse"(
GetOrganizationRequest
id (	Rid"b
GetOrganizationResponseG
organization (2#.bucketeer.environment.OrganizationRorganization"�
ListOrganizationsRequest
	page_size (RpageSize
cursor (	RcursorR
order_by (27.bucketeer.environment.ListOrganizationsRequest.OrderByRorderByg
order_direction (2>.bucketeer.environment.ListOrganizationsRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword6
disabled (2.google.protobuf.BoolValueRdisabled6
archived (2.google.protobuf.BoolValueRarchived"�
OrderBy
DEFAULT 
ID

CREATED_AT

UPDATED_AT
NAME
URL_CODE
PROJECT_COUNT
ENVIRONMENT_COUNT

USER_COUNT"#
OrderDirection
ASC 
DESC"�
ListOrganizationsResponseI
Organizations (2#.bucketeer.environment.OrganizationROrganizations
cursor (	Rcursor
total_count (R
totalCount"�
CreateOrganizationRequestN
command (20.bucketeer.environment.CreateOrganizationCommandBRcommand
name (	B�ARname
url_code (	B�ARurlCode 
description (	Rdescription
is_trial (RisTrial&
is_system_admin (RisSystemAdmin
owner_email (	R
ownerEmail"e
CreateOrganizationResponseG
Organization (2#.bucketeer.environment.OrganizationROrganization"�
UpdateOrganizationRequest
id (	Ridn
rename_command (24.bucketeer.environment.ChangeNameOrganizationCommandB�A2
deprecatedRrenameCommand�
change_description_command (2;.bucketeer.environment.ChangeDescriptionOrganizationCommandB�A2
deprecatedRchangeDescriptionCommand�
change_owner_email_command (2:.bucketeer.environment.ChangeOwnerEmailOrganizationCommandB�A2
deprecatedRchangeOwnerEmailCommand0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescription=
owner_email (2.google.protobuf.StringValueR
ownerEmail"
UpdateOrganizationResponse"w
EnableOrganizationRequest
id (	RidJ
command (20.bucketeer.environment.EnableOrganizationCommandRcommand"
EnableOrganizationResponse"y
DisableOrganizationRequest
id (	RidK
command (21.bucketeer.environment.DisableOrganizationCommandRcommand"
DisableOrganizationResponse"y
ArchiveOrganizationRequest
id (	RidK
command (21.bucketeer.environment.ArchiveOrganizationCommandRcommand"
ArchiveOrganizationResponse"}
UnarchiveOrganizationRequest
id (	RidM
command (23.bucketeer.environment.UnarchiveOrganizationCommandRcommand"
UnarchiveOrganizationResponse"�
ConvertTrialOrganizationRequest
id (	RidP
command (26.bucketeer.environment.ConvertTrialOrganizationCommandRcommand""
 ConvertTrialOrganizationResponse"�
ListProjectsV2Request
	page_size (RpageSize
cursor (	RcursorO
order_by (24.bucketeer.environment.ListProjectsV2Request.OrderByRorderByd
order_direction (2;.bucketeer.environment.ListProjectsV2Request.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword6
disabled (2.google.protobuf.BoolValueRdisabled-
organization_ids (	BRorganizationIds'
organization_id (	RorganizationId"�
OrderBy
DEFAULT 
ID

CREATED_AT

UPDATED_AT
NAME
URL_CODE
ENVIRONMENT_COUNT
FEATURE_COUNT
CREATOR_EMAIL"#
OrderDirection
ASC 
DESC"�
ListProjectsV2Response:
projects (2.bucketeer.environment.ProjectRprojects
cursor (	Rcursor
total_count (R
totalCount2��
EnvironmentService�
GetEnvironmentV2..bucketeer.environment.GetEnvironmentV2Request/.bucketeer.environment.GetEnvironmentV2Response"��A�
EnvironmentGetFGet an environment. To call this API, you need an `SYSTEM_ADMIN` role.*"web.v1.environment.get_environmentJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���!/v1/environment/get_environment�
ListEnvironmentsV20.bucketeer.environment.ListEnvironmentsV2Request1.bucketeer.environment.ListEnvironmentsV2Response"��A�
EnvironmentListEList environments. To call this API, you need an `SYSTEM_ADMIN` role.*$web.v1.environment.list_environmentsJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���#!/v1/environment/list_environments�
CreateEnvironmentV21.bucketeer.environment.CreateEnvironmentV2Request2.bucketeer.environment.CreateEnvironmentV2Response"��A�
EnvironmentCreateICreate an environment. To call this API, you need an `SYSTEM_ADMIN` role.*%web.v1.environment.create_environmentJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���'""/v1/environment/create_environment:*�
UpdateEnvironmentV21.bucketeer.environment.UpdateEnvironmentV2Request2.bucketeer.environment.UpdateEnvironmentV2Response"��A�
EnvironmentUpdateIUpdate an environment. To call this API, you need an `SYSTEM_ADMIN` role.*%web.v1.environment.update_environmentJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���'""/v1/environment/update_environment:*�
ArchiveEnvironmentV22.bucketeer.environment.ArchiveEnvironmentV2Request3.bucketeer.environment.ArchiveEnvironmentV2Response"��A�
EnvironmentArchiveJArchive an environment. To call this API, you need an `SYSTEM_ADMIN` role.*&web.v1.environment.archive_environmentJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���("#/v1/environment/archive_environment:*�
UnarchiveEnvironmentV24.bucketeer.environment.UnarchiveEnvironmentV2Request5.bucketeer.environment.UnarchiveEnvironmentV2Response"��A�
Environment	UnarchiveLUnarchive an environment. To call this API, you need an `SYSTEM_ADMIN` role.*(web.v1.environment.unarchive_environmentJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���*"%/v1/environment/unarchive_environment:*�

GetProject(.bucketeer.environment.GetProjectRequest).bucketeer.environment.GetProjectResponse"��A�
ProjectGetAGet a project. To call this API, you need an `SYSTEM_ADMIN` role.*web.v1.environment.get_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���/v1/environment/get_project�
ListProjects*.bucketeer.environment.ListProjectsRequest+.bucketeer.environment.ListProjectsResponse"��A�
ProjectListAList projects. To call this API, you need an `SYSTEM_ADMIN` role.* web.v1.environment.list_projectsJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���/v1/environment/list_projects�
CreateProject+.bucketeer.environment.CreateProjectRequest,.bucketeer.environment.CreateProjectResponse"��A�
ProjectCreateDCreate a project. To call this API, you need an `SYSTEM_ADMIN` role.*!web.v1.environment.create_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���#"/v1/environment/create_project:*�
CreateTrialProject0.bucketeer.environment.CreateTrialProjectRequest1.bucketeer.environment.CreateTrialProjectResponse"��A�
ProjectCreate TrialJCreate a trial project. To call this API, you need an `SYSTEM_ADMIN` role.*'web.v1.environment.create_trial_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���)"$/v1/environment/create_trial_project:*�
UpdateProject+.bucketeer.environment.UpdateProjectRequest,.bucketeer.environment.UpdateProjectResponse"��A�
ProjectUpdateDUpdate a project. To call this API, you need an `SYSTEM_ADMIN` role.*!web.v1.environment.update_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���#"/v1/environment/update_project:*�
EnableProject+.bucketeer.environment.EnableProjectRequest,.bucketeer.environment.EnableProjectResponse"��A�
ProjectEnableDEnable a project. To call this API, you need an `SYSTEM_ADMIN` role.*!web.v1.environment.enable_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���#"/v1/environment/enable_project:*�
DisableProject,.bucketeer.environment.DisableProjectRequest-.bucketeer.environment.DisableProjectResponse"��A�
ProjectDisableEDisable a project. To call this API, you need an `SYSTEM_ADMIN` role.*"web.v1.environment.disable_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���$"/v1/environment/disable_project:*�
ConvertTrialProject1.bucketeer.environment.ConvertTrialProjectRequest2.bucketeer.environment.ConvertTrialProjectResponse"��A�
ProjectConvert TrialKConvert a trial project. To call this API, you need an `SYSTEM_ADMIN` role.*(web.v1.environment.convert_trial_projectJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���*"%/v1/environment/convert_trial_project:*�
GetOrganization-.bucketeer.environment.GetOrganizationRequest..bucketeer.environment.GetOrganizationResponse"��A�
OrganizationGetGGet an organization. To call this API, you need at least a MEMBER role.*#web.v1.environment.get_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���" /v1/environment/get_organization�
ListOrganizations/.bucketeer.environment.ListOrganizationsRequest0.bucketeer.environment.ListOrganizationsResponse"��A�
OrganizationListFList organizations. To call this API, you need an `SYSTEM_ADMIN` role.*%web.v1.environment.list_organizationsJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���$"/v1/environment/list_organizations�
CreateOrganization0.bucketeer.environment.CreateOrganizationRequest1.bucketeer.environment.CreateOrganizationResponse"��A�
OrganizationCreateJCreate an organization. To call this API, you need an `SYSTEM_ADMIN` role.*&web.v1.environment.create_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���("#/v1/environment/create_organization:*�
UpdateOrganization0.bucketeer.environment.UpdateOrganizationRequest1.bucketeer.environment.UpdateOrganizationResponse"��A�
OrganizationUpdateCUpdate an organization. To call this API, you need an `ADMIN` role.*&web.v1.environment.update_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���("#/v1/environment/update_organization:*�
EnableOrganization0.bucketeer.environment.EnableOrganizationRequest1.bucketeer.environment.EnableOrganizationResponse"��A�
OrganizationEnableJEnable an organization. To call this API, you need an `SYSTEM_ADMIN` role.*&web.v1.environment.enable_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���("#/v1/environment/enable_organization:*�
DisableOrganization1.bucketeer.environment.DisableOrganizationRequest2.bucketeer.environment.DisableOrganizationResponse"��A�
OrganizationDisableKDisable an organization. To call this API, you need an `SYSTEM_ADMIN` role.*'web.v1.environment.disable_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���)"$/v1/environment/disable_organization:*�
ArchiveOrganization1.bucketeer.environment.ArchiveOrganizationRequest2.bucketeer.environment.ArchiveOrganizationResponse"��A�
OrganizationArchiveKArchive an organization. To call this API, you need an `SYSTEM_ADMIN` role.*'web.v1.environment.archive_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���)"$/v1/environment/archive_organization:*�
UnarchiveOrganization3.bucketeer.environment.UnarchiveOrganizationRequest4.bucketeer.environment.UnarchiveOrganizationResponse"��A�
Organization	UnarchiveMUnarchive an organization. To call this API, you need an `SYSTEM_ADMIN` role.*)web.v1.environment.unarchive_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���+"&/v1/environment/unarchive_organization:*�
ConvertTrialOrganization6.bucketeer.environment.ConvertTrialOrganizationRequest7.bucketeer.environment.ConvertTrialOrganizationResponse"��A�
OrganizationConvert Trial^Convert a trial organization to a paid one. To call this API, you need an `SYSTEM_ADMIN` role.*-web.v1.environment.convert_trial_organizationJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���/"*/v1/environment/convert_trial_organization:*�
ListProjectsV2,.bucketeer.environment.ListProjectsV2Request-.bucketeer.environment.ListProjectsV2Response"��A�
ProjectList Projects V2lList projects with V2 API. To call this API, you need at least a MEMBER role in the specified organizations.*#web.v1.environment.list_projects_v2J�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
403�
8Request does not have permission to access the resource.
.google.rpc.Status"M
application/json9{ "code": 7, "message": "not authorized", "details": [] }���" /v1/environment/list_projects_v2B5Z3github.com/bucketeer-io/bucketeer/proto/environmentbproto3