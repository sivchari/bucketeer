
�
google/protobuf/any.protogoogle.protobuf"6
Any
type_url (	RtypeUrl
value (RvalueBv
com.google.protobufBAnyProtoPZ,google.golang.org/protobuf/types/known/anypb�GPB�Google.Protobuf.WellKnownTypesbproto3
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
�
proto/feature/clause.protobucketeer.feature"�
Clause
id (	Rid
	attribute (	R	attribute>
operator (2".bucketeer.feature.Clause.OperatorRoperator
values (	Rvalues"�
Operator

EQUALS 
IN
	ENDS_WITH
STARTS_WITH
SEGMENT
GREATER
GREATER_OR_EQUAL
LESS
LESS_OR_EQUAL

BEFORE		
AFTER

FEATURE_FLAG
PARTIALLY_MATCHB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/strategy.protobucketeer.feature"-
FixedStrategy
	variation (	R	variation"�
RolloutStrategyL

variations (2,.bucketeer.feature.RolloutStrategy.VariationR
variationsA
	Variation
	variation (	R	variation
weight (Rweight"�
Strategy4
type (2 .bucketeer.feature.Strategy.TypeRtypeG
fixed_strategy (2 .bucketeer.feature.FixedStrategyRfixedStrategyM
rollout_strategy (2".bucketeer.feature.RolloutStrategyRrolloutStrategy"
Type	
FIXED 
ROLLOUTB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/rule.protobucketeer.featureproto/feature/clause.protoproto/feature/strategy.proto"�
Rule
id (	Rid7
strategy (2.bucketeer.feature.StrategyRstrategy3
clauses (2.bucketeer.feature.ClauseRclausesB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/target.protobucketeer.feature"<
Target
	variation (	R	variation
users (	RusersB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/variation.protobucketeer.feature"g
	Variation
id (	Rid
value (	Rvalue
name (	Rname 
description (	RdescriptionB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
*proto/feature/feature_last_used_info.protobucketeer.feature"�
FeatureLastUsedInfo

feature_id (	R	featureId
version (Rversion 
last_used_at (R
lastUsedAt

created_at (R	createdAt2
client_oldest_version (	RclientOldestVersion2
client_latest_version (	RclientLatestVersion";
Status
UNKNOWN 
NEW

ACTIVE
NO_ACTIVITYB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
 proto/feature/prerequisite.protobucketeer.feature"P
Prerequisite

feature_id (	R	featureId!
variation_id (	RvariationIdB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/feature.protobucketeer.featureproto/feature/rule.protoproto/feature/target.protoproto/feature/variation.protoproto/feature/strategy.proto*proto/feature/feature_last_used_info.proto proto/feature/prerequisite.proto"�
Feature
id (	Rid
name (	Rname 
description (	Rdescription
enabled (Renabled
deleted (Rdeleted9
evaluation_undelayable (BRevaluationUndelayable
ttl (Rttl
version (Rversion

created_at	 (R	createdAt

updated_at
 (R	updatedAt<

variations (2.bucketeer.feature.VariationR
variations3
targets (2.bucketeer.feature.TargetRtargets-
rules (2.bucketeer.feature.RuleRrulesF
default_strategy (2.bucketeer.feature.StrategyRdefaultStrategy#
off_variation (	RoffVariation
tags (	RtagsL
last_used_info (2&.bucketeer.feature.FeatureLastUsedInfoRlastUsedInfo

maintainer (	R
maintainerO
variation_type (2(.bucketeer.feature.Feature.VariationTypeRvariationType
archived (RarchivedE
prerequisites (2.bucketeer.feature.PrerequisiteRprerequisites#
sampling_seed (	RsamplingSeedK
auto_ops_summary (2!.bucketeer.feature.AutoOpsSummaryRautoOpsSummary">
VariationType

STRING 
BOOLEAN

NUMBER
JSON"�
AutoOpsSummary:
progressive_rollout_count (RprogressiveRolloutCount%
schedule_count (RscheduleCount*
kill_switch_count (RkillSwitchCount"R
Features6
features (2.bucketeer.feature.FeatureRfeatures
id (	Rid"s
EnvironmentFeature%
environment_id (	RenvironmentId6
features (2.bucketeer.feature.FeatureRfeatures"g
Tag
id (	Rid

created_at (R	createdAt

updated_at (R	updatedAt
name (	RnameB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/feature/segment.protobucketeer.featureproto/feature/rule.protoproto/feature/feature.proto"�
Segment
id (	Rid
name (	Rname 
description (	Rdescription-
rules (2.bucketeer.feature.RuleRrules

created_at (R	createdAt

updated_at (R	updatedAt
version (BRversion
deleted (Rdeleted.
included_user_count	 (RincludedUserCount2
excluded_user_count
 (BRexcludedUserCount9
status (2!.bucketeer.feature.Segment.StatusRstatus'
is_in_use_status (RisInUseStatus6
features (2.bucketeer.feature.FeatureRfeatures">
Status
INITIAL 
	UPLOADING
SUCEEDED

FAILED"�
SegmentUser
id (	Rid

segment_id (	R	segmentId
user_id (	RuserId:
state (2$.bucketeer.feature.SegmentUser.StateRstate
deleted (Rdeleted"'
State
INCLUDED 
EXCLUDED"�
SegmentUsers

segment_id (	R	segmentId4
users (2.bucketeer.feature.SegmentUserRusers

updated_at (R	updatedAtB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
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
!proto/account/search_filter.protobucketeer.account"�
SearchFilter
id (	Rid
name (	Rname
query (	RqueryQ
filter_target_type (2#.bucketeer.account.FilterTargetTypeRfilterTargetType%
environment_id (	RenvironmentId%
default_filter (RdefaultFilter*1
FilterTargetType
UNKNOWN 
FEATURE_FLAGB1Z/github.com/bucketeer-io/bucketeer/proto/accountbproto3
�
proto/account/account.protobucketeer.account#proto/environment/environment.protoproto/environment/project.proto$proto/environment/organization.proto!proto/account/search_filter.proto"�
Account
id (	Rid
email (	Remail
name (	Rname3
role (2.bucketeer.account.Account.RoleRrole
disabled (Rdisabled

created_at (R	createdAt

updated_at (R	updatedAt
deleted (Rdeleted"9
Role

VIEWER 

EDITOR	
OWNER

UNASSIGNEDc:"�
	AccountV2
email (	Remail
name (	Rname(
avatar_image_url (	RavatarImageUrl'
organization_id (	RorganizationId[
organization_role (2..bucketeer.account.AccountV2.Role.OrganizationRorganizationRoleY
environment_roles (2,.bucketeer.account.AccountV2.EnvironmentRoleRenvironmentRoles
disabled (Rdisabled

created_at (R	createdAt

updated_at	 (R	updatedAtF
search_filters
 (2.bucketeer.account.SearchFilterRsearchFilters

first_name (	R	firstName
	last_name (	RlastName
language (	Rlanguage
	last_seen (RlastSeen(
avatar_file_type (	RavatarFileType!
avatar_image (RavatarImage+
environment_count (RenvironmentCount
tags (	Rtags�
Role"Y
Environment
Environment_UNASSIGNED 
Environment_VIEWER
Environment_EDITOR"t
Organization
Organization_UNASSIGNED 
Organization_MEMBER
Organization_ADMIN
Organization_OWNER{
EnvironmentRole%
environment_id (	RenvironmentIdA
role (2-.bucketeer.account.AccountV2.Role.EnvironmentRrole"�
ConsoleAccount
email (	Remail
name (	Rname

avatar_url (	R	avatarUrl&
is_system_admin (RisSystemAdminG
organization (2#.bucketeer.environment.OrganizationRorganization[
organization_role (2..bucketeer.account.AccountV2.Role.OrganizationRorganizationRole^
environment_roles (21.bucketeer.account.ConsoleAccount.EnvironmentRoleRenvironmentRolesF
search_filters (2.bucketeer.account.SearchFilterRsearchFilters

first_name	 (	R	firstName
	last_name
 (	RlastName
language (	Rlanguage(
avatar_file_type (	RavatarFileType!
avatar_image (RavatarImage
	last_seen (RlastSeen�
EnvironmentRoleF
environment (2$.bucketeer.environment.EnvironmentV2Renvironment8
project (2.bucketeer.environment.ProjectRprojectA
role (2-.bucketeer.account.AccountV2.Role.EnvironmentRroleB1Z/github.com/bucketeer-io/bucketeer/proto/accountbproto3
�
proto/account/api_key.protobucketeer.account#proto/environment/environment.proto"�
APIKey
id (	Rid
name (	Rname2
role (2.bucketeer.account.APIKey.RoleRrole
disabled (Rdisabled

created_at (R	createdAt

updated_at (R	updatedAt

maintainer (	R
maintainer
api_key (	RapiKey 
description	 (	Rdescription)
environment_name
 (	RenvironmentName"y
Role
UNKNOWN 

SDK_CLIENT

SDK_SERVER
PUBLIC_API_READ_ONLY
PUBLIC_API_WRITE
PUBLIC_API_ADMIN"�
EnvironmentAPIKey2
api_key (2.bucketeer.account.APIKeyRapiKey1
environment_disabled (RenvironmentDisabled!

project_id (	BR	projectIdF
environment (2$.bucketeer.environment.EnvironmentV2Renvironment(
project_url_code (	RprojectUrlCodeJB1Z/github.com/bucketeer-io/bucketeer/proto/accountbproto3
�
proto/autoops/clause.protobucketeer.autoopsgoogle/protobuf/any.proto"�
Clause
id (	Rid,
clause (2.google.protobuf.AnyRclause>
action_type (2.bucketeer.autoops.ActionTypeR
actionType
executed_at (R
executedAt"�
OpsEventRateClause!
variation_id (	RvariationId
goal_id (	RgoalId
	min_count (RminCount)
threadshold_rate (RthreadsholdRateJ
operator (2..bucketeer.autoops.OpsEventRateClause.OperatorRoperator>
action_type (2.bucketeer.autoops.ActionTypeR
actionType"3
Operator
GREATER_OR_EQUAL 
LESS_OR_EQUALJ"d
DatetimeClause
time (Rtime>
action_type (2.bucketeer.autoops.ActionTypeR
actionType"�
ProgressiveRolloutSchedule
schedule_id (	R
scheduleId

execute_at (R	executeAt
weight (Rweight!
triggered_at (RtriggeredAt"�
&ProgressiveRolloutManualScheduleClauseK
	schedules (2-.bucketeer.autoops.ProgressiveRolloutScheduleR	schedules!
variation_id (	RvariationId"�
(ProgressiveRolloutTemplateScheduleClauseK
	schedules (2-.bucketeer.autoops.ProgressiveRolloutScheduleR	schedules`
interval (2D.bucketeer.autoops.ProgressiveRolloutTemplateScheduleClause.IntervalRinterval

increments (R
increments!
variation_id (	RvariationId":
Interval
UNKNOWN 

HOURLY	
DAILY

WEEKLY*2

ActionType
UNKNOWN 

ENABLE
DISABLEB1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
�
!proto/autoops/auto_ops_rule.protobucketeer.autoopsproto/autoops/clause.proto"�
AutoOpsRule
id (	Rid

feature_id (	R	featureId5
ops_type (2.bucketeer.autoops.OpsTypeRopsType3
clauses (2.bucketeer.autoops.ClauseRclauses

created_at (R	createdAt

updated_at (R	updatedAt
deleted	 (RdeletedH
auto_ops_status
 (2 .bucketeer.autoops.AutoOpsStatusRautoOpsStatus!
feature_name (	RfeatureNameJ"T
AutoOpsRulesD
auto_ops_rules (2.bucketeer.autoops.AutoOpsRuleRautoOpsRules*?
OpsType
TYPE_UNKNOWN 
SCHEDULE

EVENT_RATE"*D
AutoOpsStatus
WAITING 
RUNNING
FINISHED
STOPPEDB1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
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
�
'proto/autoops/progressive_rollout.protobucketeer.autoopsgoogle/protobuf/any.proto"�
ProgressiveRollout
id (	Rid

feature_id (	R	featureId,
clause (2.google.protobuf.AnyRclauseD
status (2,.bucketeer.autoops.ProgressiveRollout.StatusRstatus

created_at (R	createdAt

updated_at (R	updatedAt>
type (2*.bucketeer.autoops.ProgressiveRollout.TypeRtypeN

stopped_by (2/.bucketeer.autoops.ProgressiveRollout.StoppedByR	stoppedBy

stopped_at	 (R	stoppedAt"2
Type
MANUAL_SCHEDULE 
TEMPLATE_SCHEDULE"=
Status
WAITING 
RUNNING
FINISHED
STOPPED"I
	StoppedBy
UNKNOWN 
USER
OPS_SCHEDULE
OPS_KILL_SWITCHB1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
�
proto/autoops/command.protobucketeer.autoops!proto/autoops/auto_ops_rule.protoproto/autoops/clause.proto'proto/autoops/progressive_rollout.proto"�
CreateAutoOpsRuleCommand

feature_id (	R	featureId5
ops_type (2.bucketeer.autoops.OpsTypeRopsTypeZ
ops_event_rate_clauses (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClausesL
datetime_clauses (2!.bucketeer.autoops.DatetimeClauseRdatetimeClauses"
DeleteAutoOpsRuleCommand"
StopAutoOpsRuleCommand"V
ChangeAutoOpsStatusCommand8
status (2 .bucketeer.autoops.AutoOpsStatusRstatus"8
ExecuteAutoOpsRuleCommand
	clause_id (	RclauseId"x
AddOpsEventRateClauseCommandX
ops_event_rate_clause (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClause"�
ChangeOpsEventRateClauseCommand
id (	RidX
ops_event_rate_clause (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClause"%
DeleteClauseCommand
id (	Rid"f
AddDatetimeClauseCommandJ
datetime_clause (2!.bucketeer.autoops.DatetimeClauseRdatetimeClause"y
ChangeDatetimeClauseCommand
id (	RidJ
datetime_clause (2!.bucketeer.autoops.DatetimeClauseRdatetimeClause"�
CreateProgressiveRolloutCommand

feature_id (	R	featureId�
*progressive_rollout_manual_schedule_clause (29.bucketeer.autoops.ProgressiveRolloutManualScheduleClauseH R&progressiveRolloutManualScheduleClause��
,progressive_rollout_template_schedule_clause (2;.bucketeer.autoops.ProgressiveRolloutTemplateScheduleClauseHR(progressiveRolloutTemplateScheduleClause�B-
+_progressive_rollout_manual_schedule_clauseB/
-_progressive_rollout_template_schedule_clause"o
StopProgressiveRolloutCommandN

stopped_by (2/.bucketeer.autoops.ProgressiveRollout.StoppedByR	stoppedBy"!
DeleteProgressiveRolloutCommand"�
0AddProgressiveRolloutManualScheduleClauseCommandQ
clause (29.bucketeer.autoops.ProgressiveRolloutManualScheduleClauseRclause"�
2AddProgressiveRolloutTemplateScheduleClauseCommandS
clause (2;.bucketeer.autoops.ProgressiveRolloutTemplateScheduleClauseRclause"U
2ChangeProgressiveRolloutScheduleTriggeredAtCommand
schedule_id (	R
scheduleIdB1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
�
proto/autoops/ops_count.protobucketeer.autoops"�
OpsCount
id (	Rid'
auto_ops_rule_id (	RautoOpsRuleId
	clause_id (	RclauseId

updated_at (R	updatedAt&
ops_event_count (RopsEventCount)
evaluation_count (RevaluationCount

feature_id (	R	featureIdB1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
��
proto/autoops/service.protobucketeer.autoopsgoogle/api/annotations.protogoogle/api/field_behavior.proto.protoc-gen-openapiv2/options/annotations.protogoogle/protobuf/wrappers.proto!proto/autoops/auto_ops_rule.protoproto/autoops/clause.protoproto/autoops/command.protoproto/autoops/ops_count.proto'proto/autoops/progressive_rollout.proto"^
GetAutoOpsRuleRequest
id (	B�ARid*
environment_id (	B�ARenvironmentIdJ"\
GetAutoOpsRuleResponseB
auto_ops_rule (2.bucketeer.autoops.AutoOpsRuleRautoOpsRule"�
CreateAutoOpsRuleRequestX
command (2+.bucketeer.autoops.CreateAutoOpsRuleCommandB�A2
deprecatedRcommand*
environment_id (	B�ARenvironmentId"

feature_id (	B�AR	featureId:
ops_type (2.bucketeer.autoops.OpsTypeB�ARopsTypeZ
ops_event_rate_clauses (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClausesL
datetime_clauses (2!.bucketeer.autoops.DatetimeClauseRdatetimeClausesJ"_
CreateAutoOpsRuleResponseB
auto_ops_rule (2.bucketeer.autoops.AutoOpsRuleRautoOpsRule"�
ListAutoOpsRulesRequest
	page_size (RpageSize
cursor (	Rcursor
feature_ids (	R
featureIds*
environment_id (	B�ARenvironmentIdJ"x
ListAutoOpsRulesResponseD
auto_ops_rules (2.bucketeer.autoops.AutoOpsRuleRautoOpsRules
cursor (	Rcursor"�
StopAutoOpsRuleRequest
id (	B�ARidV
command (2).bucketeer.autoops.StopAutoOpsRuleCommandB�A2
deprecatedRcommand*
environment_id (	B�ARenvironmentIdJ"
StopAutoOpsRuleResponse"�
DeleteAutoOpsRuleRequest
id (	B�ARidX
command (2+.bucketeer.autoops.DeleteAutoOpsRuleCommandB�A2
deprecatedRcommand*
environment_id (	B�ARenvironmentIdJ"
DeleteAutoOpsRuleResponse"�
UpdateAutoOpsRuleRequest
id (	Rid�
"add_ops_event_rate_clause_commands (2/.bucketeer.autoops.AddOpsEventRateClauseCommandB�A2
deprecatedRaddOpsEventRateClauseCommands�
%change_ops_event_rate_clause_commands (22.bucketeer.autoops.ChangeOpsEventRateClauseCommandB�A2
deprecatedR changeOpsEventRateClauseCommandso
delete_clause_commands (2&.bucketeer.autoops.DeleteClauseCommandB�A2
deprecatedRdeleteClauseCommands
add_datetime_clause_commands (2+.bucketeer.autoops.AddDatetimeClauseCommandB�A2
deprecatedRaddDatetimeClauseCommands�
change_datetime_clause_commands (2..bucketeer.autoops.ChangeDatetimeClauseCommandB�A2
deprecatedRchangeDatetimeClauseCommands*
environment_id	 (	B�ARenvironmentId�
update_ops_event_rate_clauses
 (2D.bucketeer.autoops.UpdateAutoOpsRuleRequest.UpdateOpsEventRateClauseRupdateOpsEventRateClausesx
update_datetime_clauses (2@.bucketeer.autoops.UpdateAutoOpsRuleRequest.UpdateDatetimeClauseRupdateDatetimeClauses�
UpdateOpsEventRateClauseX
id (	BH�AE2CThe clause ID, if not set, a new event rate clause will be created.Rid�
deleted (2.google.protobuf.BoolValueBS�AP2NIf true and the number of clause is greater than 1, the clause will be deletedRdeleted�
clause (2%.bucketeer.autoops.OpsEventRateClauseB[�AX2VThe clause value, must be fully filled if update or create clause action is requested.Rclause�
UpdateDatetimeClauseW
id (	BG�AD2BThe clause ID, if not set, a new date time clause will be created.Rid�
deleted (2.google.protobuf.BoolValueBS�AP2NIf true and the number of clause is greater than 1, the clause will be deletedRdeleted�
clause (2!.bucketeer.autoops.DatetimeClauseB[�AX2VThe clause value, must be fully filled if update or create clause action is requested.RclauseJJ"
UpdateAutoOpsRuleResponse"�
ExecuteAutoOpsRequest
id (	B�ARidr
execute_auto_ops_rule_command (2,.bucketeer.autoops.ExecuteAutoOpsRuleCommandBRexecuteAutoOpsRuleCommand*
environment_id (	B�ARenvironmentId 
	clause_id (	B�ARclauseIdJJ"E
ExecuteAutoOpsResponse+
already_triggered (RalreadyTriggered"�
ListOpsCountsRequest
	page_size (RpageSize
cursor (	Rcursor)
auto_ops_rule_ids (	RautoOpsRuleIds
feature_ids (	R
featureIds%
environment_id (	RenvironmentIdJ"k
ListOpsCountsResponse
cursor (	Rcursor:

ops_counts (2.bucketeer.autoops.OpsCountR	opsCounts"�
CreateProgressiveRolloutRequest_
command (22.bucketeer.autoops.CreateProgressiveRolloutCommandB�A2
deprecatedRcommand*
environment_id (	B�ARenvironmentId"

feature_id (	B�AR	featureId�
*progressive_rollout_manual_schedule_clause (29.bucketeer.autoops.ProgressiveRolloutManualScheduleClauseH R&progressiveRolloutManualScheduleClause��
,progressive_rollout_template_schedule_clause (2;.bucketeer.autoops.ProgressiveRolloutTemplateScheduleClauseHR(progressiveRolloutTemplateScheduleClause�B-
+_progressive_rollout_manual_schedule_clauseB/
-_progressive_rollout_template_schedule_clauseJ"z
 CreateProgressiveRolloutResponseV
progressive_rollout (2%.bucketeer.autoops.ProgressiveRolloutRprogressiveRollout"[
GetProgressiveRolloutRequest
id (	Rid%
environment_id (	RenvironmentIdJ"w
GetProgressiveRolloutResponseV
progressive_rollout (2%.bucketeer.autoops.ProgressiveRolloutRprogressiveRollout"�
StopProgressiveRolloutRequest
id (	Rid]
command (20.bucketeer.autoops.StopProgressiveRolloutCommandB�A2
deprecatedRcommand%
environment_id (	RenvironmentIdN

stopped_by (2/.bucketeer.autoops.ProgressiveRollout.StoppedByR	stoppedByJ" 
StopProgressiveRolloutResponse"�
DeleteProgressiveRolloutRequest
id (	Rid_
command (22.bucketeer.autoops.DeleteProgressiveRolloutCommandB�A2
deprecatedRcommand%
environment_id (	RenvironmentIdJ""
 DeleteProgressiveRolloutResponse"�
ListProgressiveRolloutsRequest
	page_size (RpageSize
cursor (	Rcursor
feature_ids (	R
featureIdsT
order_by (29.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderByRorderByi
order_direction (2@.bucketeer.autoops.ListProgressiveRolloutsRequest.OrderDirectionRorderDirectionI
status (2,.bucketeer.autoops.ProgressiveRollout.StatusH Rstatus�C
type (2*.bucketeer.autoops.ProgressiveRollout.TypeHRtype�%
environment_id	 (	RenvironmentId"6
OrderBy
DEFAULT 

CREATED_AT

UPDATED_AT"#
OrderDirection
ASC 
DESCB	
_statusB
_typeJ"�
ListProgressiveRolloutsResponseX
progressive_rollouts (2%.bucketeer.autoops.ProgressiveRolloutRprogressiveRollouts
cursor (	Rcursor
total_count (R
totalCount"�
 ExecuteProgressiveRolloutRequest
id (	Rid�
/change_progressive_rollout_triggered_at_command (2E.bucketeer.autoops.ChangeProgressiveRolloutScheduleTriggeredAtCommandB�A2
deprecatedR*changeProgressiveRolloutTriggeredAtCommand%
environment_id (	RenvironmentId
schedule_id (	R
scheduleIdJ"#
!ExecuteProgressiveRolloutResponse2�K
AutoOpsService�
GetAutoOpsRule(.bucketeer.autoops.GetAutoOpsRuleRequest).bucketeer.autoops.GetAutoOpsRuleResponse"��A�
auto_ops_ruleGetGet an auto ops rule.*web.v1.auto_ops_rule.getJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���/v1/auto_ops_rule�
ListAutoOpsRules*.bucketeer.autoops.ListAutoOpsRulesRequest+.bucketeer.autoops.ListAutoOpsRulesResponse"��A�
auto_ops_ruleListList auto ops rules.*web.v1.auto_ops_rule.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/auto_ops_rules�
CreateAutoOpsRule+.bucketeer.autoops.CreateAutoOpsRuleRequest,.bucketeer.autoops.CreateAutoOpsRuleResponse"��A�
auto_ops_ruleCreateCreate an auto ops rule.*web.v1.auto_ops_rule.createJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���"/v1/auto_ops_rule:*�
StopAutoOpsRule).bucketeer.autoops.StopAutoOpsRuleRequest*.bucketeer.autoops.StopAutoOpsRuleResponse"��A�
auto_ops_ruleStopStop an auto ops rule.*web.v1.auto_ops_rule.stopJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���"/v1/auto_ops_rule/stop:*�
DeleteAutoOpsRule+.bucketeer.autoops.DeleteAutoOpsRuleRequest,.bucketeer.autoops.DeleteAutoOpsRuleResponse"��A�
auto_ops_ruleDeleteDelete an auto ops rule.*web.v1.auto_ops_rule.deleteJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���*/v1/auto_ops_rule�
UpdateAutoOpsRule+.bucketeer.autoops.UpdateAutoOpsRuleRequest,.bucketeer.autoops.UpdateAutoOpsRuleResponse"��A�
auto_ops_ruleUpdateUpdate an auto ops rule.*web.v1.auto_ops_rule.updateJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���2/v1/auto_ops_rule:*�
ExecuteAutoOps(.bucketeer.autoops.ExecuteAutoOpsRequest).bucketeer.autoops.ExecuteAutoOpsResponse"��A�
auto_ops_ruleExecute Auto Ops RuleExecute an auto ops rule.*web.v1.auto_ops_rule.executeJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���"/v1/auto_ops_rule/execute:*�
ListOpsCounts'.bucketeer.autoops.ListOpsCountsRequest(.bucketeer.autoops.ListOpsCountsResponse"��A�
	ops_countList Ops CountsList ops counts.*$web.v1.auto_ops_rule.list_ops_countsJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/auto_ops_rule/ops_counts�
CreateProgressiveRollout2.bucketeer.autoops.CreateProgressiveRolloutRequest3.bucketeer.autoops.CreateProgressiveRolloutResponse"��A�
progressive_rolloutCreateCreate a progressive rollout.*!web.v1.progressive_rollout.createJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���"/v1/progressive_rollout:*�
GetProgressiveRollout/.bucketeer.autoops.GetProgressiveRolloutRequest0.bucketeer.autoops.GetProgressiveRolloutResponse"��A�
progressive_rolloutGetGet a progressive rollout.*web.v1.progressive_rollout.getJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���/v1/progressive_rollout�
StopProgressiveRollout0.bucketeer.autoops.StopProgressiveRolloutRequest1.bucketeer.autoops.StopProgressiveRolloutResponse"��A�
progressive_rolloutStopStop a progressive rollout.*web.v1.progressive_rollout.stopJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���!2/v1/progressive_rollout/stop:*�
DeleteProgressiveRollout2.bucketeer.autoops.DeleteProgressiveRolloutRequest3.bucketeer.autoops.DeleteProgressiveRolloutResponse"��A�
progressive_rolloutDeleteDelete a progressive rollout.*!web.v1.progressive_rollout.deleteJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���*/v1/progressive_rollout�
ListProgressiveRollouts1.bucketeer.autoops.ListProgressiveRolloutsRequest2.bucketeer.autoops.ListProgressiveRolloutsResponse"��A�
progressive_rolloutListList progressive rollouts.*web.v1.progressive_rollout.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/progressive_rollouts�
ExecuteProgressiveRollout3.bucketeer.autoops.ExecuteProgressiveRolloutRequest4.bucketeer.autoops.ExecuteProgressiveRolloutResponse"��A�
progressive_rolloutExecute Progressive RolloutExecute a progressive rollout.*"web.v1.progressive_rollout.executeJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
(Returned when the resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���$"/v1/progressive_rollout/execute:*B1Z/github.com/bucketeer-io/bucketeer/proto/autoopsbproto3
�
"proto/notification/recipient.protobucketeer.notification"�
	Recipient:
type (2&.bucketeer.notification.Recipient.TypeRtypee
slack_channel_recipient (2-.bucketeer.notification.SlackChannelRecipientRslackChannelRecipientF
language (2*.bucketeer.notification.Recipient.LanguageRlanguage"
Type
SlackChannel "%
Language
ENGLISH 
JAPANESE"8
SlackChannelRecipient
webhook_url (	R
webhookUrlB6Z4github.com/bucketeer-io/bucketeer/proto/notificationbproto3
�	
%proto/notification/subscription.protobucketeer.notification"proto/notification/recipient.proto"�
Subscription
id (	Rid

created_at (R	createdAt

updated_at (R	updatedAt
disabled (RdisabledR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes?
	recipient (2!.bucketeer.notification.RecipientR	recipient
name (	Rname%
environment_id (	RenvironmentId)
environment_name	 (	RenvironmentName*
feature_flag_tags
 (	RfeatureFlagTags"�

SourceType
DOMAIN_EVENT_FEATURE 
DOMAIN_EVENT_GOAL
DOMAIN_EVENT_EXPERIMENT
DOMAIN_EVENT_ACCOUNT
DOMAIN_EVENT_APIKEY
DOMAIN_EVENT_SEGMENT
DOMAIN_EVENT_ENVIRONMENT
DOMAIN_EVENT_ADMIN_ACCOUNT
DOMAIN_EVENT_AUTOOPS_RULE
DOMAIN_EVENT_PUSH	
DOMAIN_EVENT_SUBSCRIPTION
#
DOMAIN_EVENT_ADMIN_SUBSCRIPTION
DOMAIN_EVENT_PROJECT
DOMAIN_EVENT_WEBHOOK$
 DOMAIN_EVENT_PROGRESSIVE_ROLLOUT
DOMAIN_EVENT_ORGANIZATION
DOMAIN_EVENT_FLAG_TRIGGER
DOMAIN_EVENT_TAG
DOMAIN_EVENT_CODEREF
FEATURE_STALEd
EXPERIMENT_RUNNING�
	MAU_COUNT�B6Z4github.com/bucketeer-io/bucketeer/proto/notificationbproto3
�
 proto/feature/flag_trigger.protobucketeer.feature"�
FlagTrigger
id (	Rid

feature_id (	R	featureId7
type (2#.bucketeer.feature.FlagTrigger.TypeRtype=
action (2%.bucketeer.feature.FlagTrigger.ActionRaction 
description (	Rdescription#
trigger_count (RtriggerCount*
last_triggered_at (RlastTriggeredAt
token	 (	Rtoken
disabled
 (Rdisabled

created_at (R	createdAt

updated_at (R	updatedAt%
environment_id (	RenvironmentId"*
Type
Type_UNKNOWN 
Type_WEBHOOK";
Action
Action_UNKNOWN 
	Action_ON

Action_OFFJB1Z/github.com/bucketeer-io/bucketeer/proto/featurebproto3
�
proto/tag/tag.protobucketeer.tag"�
Tag
id (	Rid
name (	Rname

created_at (R	createdAt

updated_at (R	updatedAt>
entity_type (2.bucketeer.tag.Tag.EntityTypeR
entityType%
environment_id (	RenvironmentId)
environment_name (	RenvironmentName"<

EntityType
UNSPECIFIED 
FEATURE_FLAG
ACCOUNT"_
EnvironmentTag%
environment_id (	RenvironmentId&
tags (2.bucketeer.tag.TagRtagsB-Z+github.com/bucketeer-io/bucketeer/proto/tagbproto3
�
!proto/experiment/experiment.protobucketeer.experimentproto/feature/variation.proto"�

Experiment
id (	Rid
goal_id (	BRgoalId

feature_id (	R	featureId'
feature_version (RfeatureVersion<

variations (2.bucketeer.feature.VariationR
variations
start_at (RstartAt
stop_at (RstopAt
stopped (BRstopped!

stopped_at	 (B0R	stoppedAt

created_at
 (R	createdAt

updated_at (R	updatedAt
deleted (Rdeleted
goal_ids (	RgoalIds
name (	Rname 
description (	Rdescription*
base_variation_id (	RbaseVariationId?
status (2'.bucketeer.experiment.Experiment.StatusRstatus

maintainer (	R
maintainer
archived (RarchivedD
goals (2..bucketeer.experiment.Experiment.GoalReferenceRgoals3
GoalReference
id (	Rid
name (	Rname"B
Status
WAITING 
RUNNING
STOPPED
FORCE_STOPPEDJ"Q
ExperimentsB
experiments (2 .bucketeer.experiment.ExperimentRexperimentsB4Z2github.com/bucketeer-io/bucketeer/proto/experimentbproto3
�
proto/experiment/goal.protobucketeer.experiment!proto/experiment/experiment.proto!proto/autoops/auto_ops_rule.proto"�
Goal
id (	Rid
name (	Rname 
description (	Rdescription
deleted (Rdeleted

created_at (R	createdAt

updated_at (R	updatedAt'
is_in_use_status (RisInUseStatus
archived (RarchivedR
connection_type	 (2).bucketeer.experiment.Goal.ConnectionTypeRconnectionTypeP
experiments
 (2..bucketeer.experiment.Goal.ExperimentReferenceRexperimentsU
auto_ops_rules (2/.bucketeer.experiment.Goal.AutoOpsRuleReferenceRautoOpsRules�
ExperimentReference
id (	Rid
name (	Rname

feature_id (	R	featureId!
feature_name (	RfeatureName?
status (2'.bucketeer.experiment.Experiment.StatusRstatus�
AutoOpsRuleReference
id (	Rid

feature_id (	R	featureId!
feature_name (	RfeatureNameH
auto_ops_status (2 .bucketeer.autoops.AutoOpsStatusRautoOpsStatus"<
ConnectionType
UNKNOWN 

EXPERIMENT
	OPERATIONB4Z2github.com/bucketeer-io/bucketeer/proto/experimentbproto3
�
"proto/coderef/code_reference.protobucketeer.coderef"�
CodeReference
id (	Rid

feature_id (	R	featureId
	file_path (	RfilePath
line_number (R
lineNumber!
code_snippet (	RcodeSnippet!
content_hash (	RcontentHash
aliases (	Raliases'
repository_name (	RrepositoryName)
repository_owner	 (	RrepositoryOwnerX
repository_type
 (2/.bucketeer.coderef.CodeReference.RepositoryTypeRrepositoryType+
repository_branch (	RrepositoryBranch
commit_hash (	R
commitHash%
environment_id (	RenvironmentId

created_at (R	createdAt

updated_at (R	updatedAt

source_url (	R	sourceUrl

branch_url (	R	branchUrl%
file_extension (	RfileExtension"d
RepositoryType
REPOSITORY_TYPE_UNSPECIFIED 

GITHUB

GITLAB
	BITBUCKET

CUSTOMB1Z/github.com/bucketeer-io/bucketeer/proto/coderefbproto3
��
proto/event/domain/event.protobucketeer.event.domaingoogle/protobuf/any.protogoogle/protobuf/wrappers.protoproto/feature/clause.protoproto/feature/feature.protoproto/feature/rule.protoproto/feature/variation.protoproto/feature/strategy.protoproto/feature/segment.protoproto/feature/target.protoproto/account/account.protoproto/account/api_key.proto!proto/autoops/auto_ops_rule.protoproto/autoops/clause.protoproto/autoops/service.proto%proto/notification/subscription.proto"proto/notification/recipient.proto proto/feature/prerequisite.proto'proto/autoops/progressive_rollout.proto proto/feature/flag_trigger.proto!proto/account/search_filter.protoproto/tag/tag.protoproto/experiment/goal.proto!proto/experiment/experiment.proto"proto/coderef/code_reference.proto"�1
Event
id (	Rid
	timestamp (R	timestampI
entity_type (2(.bucketeer.event.domain.Event.EntityTypeR
entityType
	entity_id (	RentityId6
type (2".bucketeer.event.domain.Event.TypeRtype6
editor (2.bucketeer.event.domain.EditorReditor(
data (2.google.protobuf.AnyRdata$
is_admin_event	 (RisAdminEvent9
options
 (2.bucketeer.event.domain.OptionsRoptions
entity_data (	R
entityData0
previous_entity_data (	RpreviousEntityData%
environment_id (	RenvironmentId"�

EntityType
FEATURE 
GOAL

EXPERIMENT
ACCOUNT

APIKEY
SEGMENT
ENVIRONMENT
ADMIN_ACCOUNT
AUTOOPS_RULE
PUSH	
SUBSCRIPTION

ADMIN_SUBSCRIPTION
PROJECT
PROGRESSIVE_ROLLOUT
ORGANIZATION
FLAG_TRIGGER
TAG
CODEREF""�*
Type
UNKNOWN 
FEATURE_CREATED
FEATURE_RENAMED
FEATURE_ENABLED
FEATURE_DISABLED
FEATURE_DELETED
FEATURE_DESCRIPTION_CHANGED
FEATURE_VARIATION_ADDED	
FEATURE_VARIATION_REMOVED
!
FEATURE_OFF_VARIATION_CHANGED
VARIATION_VALUE_CHANGED
VARIATION_NAME_CHANGED!
VARIATION_DESCRIPTION_CHANGED
VARIATION_USER_ADDED
VARIATION_USER_REMOVED
FEATURE_RULE_ADDED!
FEATURE_RULE_STRATEGY_CHANGED
FEATURE_RULE_DELETED
RULE_CLAUSE_ADDED
RULE_CLAUSE_DELETED
RULE_FIXED_STRATEGY_CHANGED!
RULE_ROLLOUT_STRATEGY_CHANGED
CLAUSE_ATTRIBUTE_CHANGED
CLAUSE_OPERATOR_CHANGED
CLAUSE_VALUE_ADDED
CLAUSE_VALUE_REMOVED$
 FEATURE_DEFAULT_STRATEGY_CHANGED
FEATURE_TAG_ADDED
FEATURE_TAG_REMOVED
FEATURE_VERSION_INCREMENTED
FEATURE_ARCHIVED 
FEATURE_CLONED!
FEATURE_UNARCHIVED#
SAMPLING_SEED_RESET"
PREREQUISITE_ADDED$
PREREQUISITE_REMOVED%"
PREREQUISITE_VARIATION_CHANGED&
FEATURE_RULES_ORDER_CHANGED'
FEATURE_UPDATED(
GOAL_CREATEDd
GOAL_RENAMEDe
GOAL_DESCRIPTION_CHANGEDf
GOAL_DELETEDg
GOAL_ARCHIVEDh
GOAL_UPDATEDi
EXPERIMENT_CREATED�
EXPERIMENT_STOPPED� 
EXPERIMENT_START_AT_CHANGED�
EXPERIMENT_STOP_AT_CHANGED�
EXPERIMENT_DELETED�
EXPERIMENT_PERIOD_CHANGED�
EXPERIMENT_NAME_CHANGED�#
EXPERIMENT_DESCRIPTION_CHANGED�
EXPERIMENT_STARTED�
EXPERIMENT_FINISHED�
EXPERIMENT_ARCHIVED�
EXPERIMENT_UPDATED�
ACCOUNT_CREATED�
ACCOUNT_ROLE_CHANGED�
ACCOUNT_ENABLED�
ACCOUNT_DISABLED�
ACCOUNT_DELETED�
ACCOUNT_V2_CREATED�
ACCOUNT_V2_NAME_CHANGED�(
#ACCOUNT_V2_AVATAR_IMAGE_URL_CHANGED�)
$ACCOUNT_V2_ORGANIZATION_ROLE_CHANGED�)
$ACCOUNT_V2_ENVIRONMENT_ROLES_CHANGED�
ACCOUNT_V2_ENABLED�
ACCOUNT_V2_DISABLED�
ACCOUNT_V2_DELETED�%
 ACCOUNT_V2_CREATED_SEARCH_FILTER�*
%ACCOUNT_V2_SEARCH_FILTER_NANE_CHANGED�+
&ACCOUNT_V2_SEARCH_FILTER_QUERY_CHANGED�-
(ACCOUNT_V2_SEARCH_FILTER_DEFAULT_CHANGED�%
 ACCOUNT_V2_SEARCH_FILTER_DELETED�"
ACCOUNT_V2_FIRST_NAME_CHANGED�!
ACCOUNT_V2_LAST_NAME_CHANGED� 
ACCOUNT_V2_LANGUAGE_CHANGED�
ACCOUNT_V2_UPDATED�
ACCOUNT_V2_TAGS_CHANGED�
APIKEY_CREATED�
APIKEY_NAME_CHANGED�
APIKEY_ENABLED�
APIKEY_DISABLED�
APIKEY_CHANGED�
SEGMENT_CREATED�
SEGMENT_DELETED�
SEGMENT_NAME_CHANGED� 
SEGMENT_DESCRIPTION_CHANGED�
SEGMENT_RULE_ADDED�
SEGMENT_RULE_DELETED�
SEGMENT_RULE_CLAUSE_ADDED� 
SEGMENT_RULE_CLAUSE_DELETED�%
 SEGMENT_CLAUSE_ATTRIBUTE_CHANGED�$
SEGMENT_CLAUSE_OPERATOR_CHANGED�
SEGMENT_CLAUSE_VALUE_ADDED�!
SEGMENT_CLAUSE_VALUE_REMOVED�
SEGMENT_USER_ADDED�
SEGMENT_USER_DELETED�
SEGMENT_BULK_UPLOAD_USERS�-
(SEGMENT_BULK_UPLOAD_USERS_STATUS_CHANGED�
SEGMENT_UPDATED�
ENVIRONMENT_CREATED�
ENVIRONMENT_RENAMED�$
ENVIRONMENT_DESCRIPTION_CHANGED�
ENVIRONMENT_DELETED�
ENVIRONMENT_V2_CREATED�
ENVIRONMENT_V2_RENAMED�'
"ENVIRONMENT_V2_DESCRIPTION_CHANGED�
ENVIRONMENT_V2_ARCHIVED�
ENVIRONMENT_V2_UNARCHIVED�+
&ENVIRONMENT_V2_REQUIRE_COMMENT_CHANGED�
ENVIRONMENT_V2_UPDATED�
ADMIN_ACCOUNT_CREATED�
ADMIN_ACCOUNT_ENABLED�
ADMIN_ACCOUNT_DISABLED�
AUTOOPS_RULE_CREATED�
AUTOOPS_RULE_DELETED�"
AUTOOPS_RULE_OPS_TYPE_CHANGED� 
AUTOOPS_RULE_CLAUSE_DELETED�*
!AUTOOPS_RULE_TRIGGERED_AT_CHANGED� 
OPS_EVENT_RATE_CLAUSE_ADDED�"
OPS_EVENT_RATE_CLAUSE_CHANGED�
DATETIME_CLAUSE_ADDED�
DATETIME_CLAUSE_CHANGED�
AUTOOPS_RULE_STOPPED�$
AUTOOPS_RULE_OPS_STATUS_CHANGED�
AUTOOPS_RULE_UPDATED�
PUSH_CREATED�
PUSH_DELETED�
PUSH_TAGS_ADDED�
PUSH_TAGS_DELETED�
PUSH_RENAMED�
PUSH_UPDATED�
SUBSCRIPTION_CREATED�
SUBSCRIPTION_DELETED�
SUBSCRIPTION_ENABLED�
SUBSCRIPTION_DISABLED�#
SUBSCRIPTION_SOURCE_TYPE_ADDED�%
 SUBSCRIPTION_SOURCE_TYPE_DELETED�
SUBSCRIPTION_RENAMED�
SUBSCRIPTION_UPDATED�+
&SUBSCRIPTION_FEATURE_FLAG_TAGS_UPDATED�
ADMIN_SUBSCRIPTION_CREATED�
ADMIN_SUBSCRIPTION_DELETED�
ADMIN_SUBSCRIPTION_ENABLED� 
ADMIN_SUBSCRIPTION_DISABLED�)
$ADMIN_SUBSCRIPTION_SOURCE_TYPE_ADDED�+
&ADMIN_SUBSCRIPTION_SOURCE_TYPE_DELETED�
ADMIN_SUBSCRIPTION_RENAMED�
PROJECT_CREATED�	 
PROJECT_DESCRIPTION_CHANGED�	
PROJECT_ENABLED�	
PROJECT_DISABLED�	
PROJECT_TRIAL_CREATED�	
PROJECT_TRIAL_CONVERTED�	
PROJECT_RENAMED�	
PROJECT_UPDATED�	 
PROGRESSIVE_ROLLOUT_CREATED�
 
PROGRESSIVE_ROLLOUT_DELETED�
6
1PROGRESSIVE_ROLLOUT_SCHEDULE_TRIGGERED_AT_CHANGED�
 
PROGRESSIVE_ROLLOUT_STOPPED�

ORGANIZATION_CREATED�
ORGANIZATION_NAME_CHANGED�%
 ORGANIZATION_DESCRIPTION_CHANGED�
ORGANIZATION_ENABLED�
ORGANIZATION_DISABLED�
ORGANIZATION_ARCHIVED�
ORGANIZATION_UNARCHIVED�!
ORGANIZATION_TRIAL_CONVERTED�%
 ORGANIZATION_OWNER_EMAIL_CHANGED�
ORGANIZATION_UPDATED�
FLAG_TRIGGER_CREATED�
FLAG_TRIGGER_RESET�%
 FLAG_TRIGGER_DESCRIPTION_CHANGED�
FLAG_TRIGGER_DISABLED�
FLAG_TRIGGER_ENABLED�
FLAG_TRIGGER_DELETED�
FLAG_TRIGGER_USAGE_UPDATED�
FLAG_TRIGGER_UPDATED�
TAG_CREATED�
TAG_DELETED�
CODE_REFERENCE_CREATED�
CODE_REFERENCE_UPDATED�
CODE_REFERENCE_DELETED�"�
�
"�
�
"�
�
"�
�
"�
�
"�
�
J	"�
Editor
email (	Remail
is_admin (RisAdmin
name (	RnameZ
public_api_editor (2..bucketeer.event.domain.Editor.PublicAPIEditorRpublicApiEditor!
avatar_image (RavatarImage(
avatar_file_type (	RavatarFileType�
PublicAPIEditor
token (	Rtoken

maintainer (	R
maintainer
name (	Rname!
avatar_image (RavatarImage(
avatar_file_type (	RavatarFileTypeJ"D
Options
comment (	Rcomment
new_version (R
newVersion"�
FeatureCreatedEvent
id (	Rid
name (	Rname 
description (	Rdescription
user (	Ruser<

variations (2.bucketeer.feature.VariationR
variationsX
default_on_variation_index (2.google.protobuf.Int32ValueRdefaultOnVariationIndexZ
default_off_variation_index (2.google.protobuf.Int32ValueRdefaultOffVariationIndexO
variation_type (2(.bucketeer.feature.Feature.VariationTypeRvariationType
tags	 (	RtagsE
prerequisites
 (2.bucketeer.feature.PrerequisiteRprerequisites-
rules (2.bucketeer.feature.RuleRrules3
targets (2.bucketeer.feature.TargetRtargets"f
FeatureUpdatedEvent
id (	Rid
data (	BRdata'
previous_data (	BRpreviousData"%
FeatureEnabledEvent
id (	Rid"&
FeatureDisabledEvent
id (	Rid"&
FeatureArchivedEvent
id (	Rid"(
FeatureUnarchivedEvent
id (	Rid"%
FeatureDeletedEvent
id (	Rid"-
EvaluationDelayableSetEvent
id (	Rid"/
EvaluationUndelayableSetEvent
id (	Rid"9
FeatureRenamedEvent
id (	Rid
name (	Rname"R
FeatureDescriptionChangedEvent
id (	Rid 
description (	Rdescription"V
FeatureOffVariationChangedEvent
id (	Rid#
off_variation (	RoffVariation"h
FeatureVariationAddedEvent
id (	Rid:
	variation (2.bucketeer.feature.VariationR	variation"Q
FeatureVariationRemovedEvent
id (	Rid!
variation_id (	RvariationId"a
VariationValueChangedEvent

feature_id (	R	featureId
id (	Rid
value (	Rvalue"^
VariationNameChangedEvent

feature_id (	R	featureId
id (	Rid
name (	Rname"s
 VariationDescriptionChangedEvent

feature_id (	R	featureId
id (	Rid 
description (	Rdescription"\
VariationUserAddedEvent

feature_id (	R	featureId
id (	Rid
user (	Ruser"^
VariationUserRemovedEvent

feature_id (	R	featureId
id (	Rid
user (	Ruser"T
FeatureRuleAddedEvent
id (	Rid+
rule (2.bucketeer.feature.RuleRrule"�
FeatureChangeRuleStrategyEvent

feature_id (	R	featureId
rule_id (	RruleId7
strategy (2.bucketeer.feature.StrategyRstrategy"Y
FeatureRulesOrderChangedEvent

feature_id (	R	featureId
rule_ids (	RruleIds"B
FeatureRuleDeletedEvent
id (	Rid
rule_id (	RruleId"�
 FeatureFixedStrategyChangedEvent

feature_id (	R	featureId
rule_id (	RruleId<
strategy (2 .bucketeer.feature.FixedStrategyRstrategy"�
"FeatureRolloutStrategyChangedEvent

feature_id (	R	featureId
rule_id (	RruleId>
strategy (2".bucketeer.feature.RolloutStrategyRstrategy"�
RuleClauseAddedEvent

feature_id (	R	featureId
rule_id (	RruleId1
clause (2.bucketeer.feature.ClauseRclause"`
RuleClauseDeletedEvent

feature_id (	R	featureId
rule_id (	RruleId
id (	Rid"�
ClauseAttributeChangedEvent

feature_id (	R	featureId
rule_id (	RruleId
id (	Rid
	attribute (	R	attribute"�
ClauseOperatorChangedEvent

feature_id (	R	featureId
rule_id (	RruleId
id (	Rid>
operator (2".bucketeer.feature.Clause.OperatorRoperator"u
ClauseValueAddedEvent

feature_id (	R	featureId
rule_id (	RruleId
id (	Rid
value (	Rvalue"w
ClauseValueRemovedEvent

feature_id (	R	featureId
rule_id (	RruleId
id (	Rid
value (	Rvalue"m
"FeatureDefaultStrategyChangedEvent
id (	Rid7
strategy (2.bucketeer.feature.StrategyRstrategy"8
FeatureTagAddedEvent
id (	Rid
tag (	Rtag":
FeatureTagRemovedEvent
id (	Rid
tag (	Rtag"J
FeatureVersionIncrementedEvent
id (	Rid
version (Rversion"�
FeatureClonedEvent
id (	Rid
name (	Rname 
description (	Rdescription<

variations (2.bucketeer.feature.VariationR
variations3
targets (2.bucketeer.feature.TargetRtargets-
rules (2.bucketeer.feature.RuleRrulesF
default_strategy (2.bucketeer.feature.StrategyRdefaultStrategy#
off_variation (	RoffVariation
tags	 (	Rtags

maintainer
 (	R
maintainerO
variation_type (2(.bucketeer.feature.Feature.VariationTypeRvariationTypeE
prerequisites (2.bucketeer.feature.PrerequisiteRprerequisites"D
FeatureSamplingSeedResetEvent#
sampling_seed (	RsamplingSeed"�
GoalCreatedEvent
id (	Rid
name (	Rname 
description (	Rdescription
deleted (Rdeleted

created_at (R	createdAt

updated_at (R	updatedAtR
connection_type (2).bucketeer.experiment.Goal.ConnectionTypeRconnectionType"�
GoalUpdatedEvent
id (	Rid0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescription"6
GoalRenamedEvent
id (	Rid
name (	Rname"O
GoalDescriptionChangedEvent
id (	Rid 
description (	Rdescription"#
GoalArchivedEvent
id (	Rid""
GoalDeletedEvent
id (	Rid"�
ExperimentCreatedEvent
id (	Rid

feature_id (	R	featureId'
feature_version (RfeatureVersion<

variations (2.bucketeer.feature.VariationR
variations
goal_id (	BRgoalId
start_at (RstartAt
stop_at (RstopAt
stopped (Rstopped

stopped_at	 (R	stoppedAt

created_at
 (R	createdAt

updated_at (R	updatedAt
goal_ids (	RgoalIds
name (	Rname 
description (	Rdescription*
base_variation_id (	RbaseVariationId"G
ExperimentStoppedEvent
id (	Rid

stopped_at (R	stoppedAt")
ExperimentArchivedEvent
id (	Rid"(
ExperimentDeletedEvent
id (	Rid"J
ExperimentStartAtChangedEvent
id (	Rid
start_at (RstartAt"G
ExperimentStopAtChangedEvent
id (	Rid
stop_at (RstopAt"b
ExperimentPeriodChangedEvent
id (	Rid
start_at (RstartAt
stop_at (RstopAt"@
ExperimentNameChangedEvent
id (	Rid
name (	Rname"U
!ExperimentDescriptionChangedEvent
id (	Rid 
description (	Rdescription"�
ExperimentUpdatedEvent
id (	Rid
name (	Rname 
description (	Rdescription
start_at (RstartAt
stop_at (RstopAt?
status (2'.bucketeer.experiment.Experiment.StatusRstatus"
ExperimentStartedEvent"
ExperimentFinishedEvent"�
AccountV2CreatedEvent
email (	Remail
name (	Rname(
avatar_image_url (	RavatarImageUrl'
organization_id (	RorganizationId[
organization_role (2..bucketeer.account.AccountV2.Role.OrganizationRorganizationRoleY
environment_roles (2,.bucketeer.account.AccountV2.EnvironmentRoleRenvironmentRoles
disabled (Rdisabled

created_at (R	createdAt

updated_at	 (R	updatedAt

first_name
 (	R	firstName
	last_name (	RlastName
language (	Rlanguage
tags (	Rtags"V
AccountV2UpdatedEvent
email (	Remail'
organization_id (	RorganizationId"E
AccountV2NameChangedEvent
email (	Remail
name (	Rname"e
#AccountV2AvatarImageURLChangedEvent
email (	Remail(
avatar_image_url (	RavatarImageUrl"E
AccountV2TagsChangedEvent
email (	Remail
tags (	Rtags"�
%AccountV2OrganizationRoleChangedEvent
email (	Remail[
organization_role (2..bucketeer.account.AccountV2.Role.OrganizationRorganizationRole"�
%AccountV2EnvironmentRolesChangedEvent
email (	RemailY
environment_roles (2,.bucketeer.account.AccountV2.EnvironmentRoleRenvironmentRoles"-
AccountV2EnabledEvent
email (	Remail".
AccountV2DisabledEvent
email (	Remail"-
AccountV2DeletedEvent
email (	Remail"�
SearchFilterCreatedEvent
Name (	RName
Query (	RQueryC

TargetType (2#.bucketeer.account.FilterTargetTypeR
TargetType%
environment_id (	RenvironmentId%
default_filter (RdefaultFilter"B
SearchFilterNameChangedEvent
id (	Rid
Name (	RName"E
SearchFilterQueryChangedEvent
id (	Rid
Query (	RQuery"X
SearchFilterDefaultChangedEvent
id (	Rid%
default_filter (RdefaultFilter"*
SearchFilterDeletedEvent
id (	Rid"�
APIKeyCreatedEvent
id (	Rid
name (	Rname2
role (2.bucketeer.account.APIKey.RoleRrole
disabled (Rdisabled

created_at (R	createdAt

updated_at (R	updatedAt

maintainer (	R
maintainer
api_key (	RapiKey"$
APIKeyChangedEvent
id (	Rid"<
APIKeyNameChangedEvent
id (	Rid
name (	Rname"$
APIKeyEnabledEvent
id (	Rid"%
APIKeyDisabledEvent
id (	Rid"[
SegmentCreatedEvent
id (	Rid
name (	Rname 
description (	Rdescription"%
SegmentDeletedEvent
id (	Rid"�
SegmentUpdatedEvent
id (	Rid0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescription"=
SegmentNameChangedEvent
id (	Rid
name (	Rname"R
SegmentDescriptionChangedEvent
id (	Rid 
description (	Rdescription"T
SegmentRuleAddedEvent
id (	Rid+
rule (2.bucketeer.feature.RuleRrule"B
SegmentRuleDeletedEvent
id (	Rid
rule_id (	RruleId"�
SegmentRuleClauseAddedEvent

segment_id (	R	segmentId
rule_id (	RruleId1
clause (2.bucketeer.feature.ClauseRclause"t
SegmentRuleClauseDeletedEvent

segment_id (	R	segmentId
rule_id (	RruleId
	clause_id (	RclauseId"�
"SegmentClauseAttributeChangedEvent

segment_id (	R	segmentId
rule_id (	RruleId
	clause_id (	RclauseId
	attribute (	R	attribute"�
!SegmentClauseOperatorChangedEvent

segment_id (	R	segmentId
rule_id (	RruleId
	clause_id (	RclauseId>
operator (2".bucketeer.feature.Clause.OperatorRoperator"�
SegmentClauseValueAddedEvent

segment_id (	R	segmentId
rule_id (	RruleId
	clause_id (	RclauseId
value (	Rvalue"�
SegmentClauseValueRemovedEvent

segment_id (	R	segmentId
rule_id (	RruleId
	clause_id (	RclauseId
value (	Rvalue"�
SegmentUserAddedEvent

segment_id (	R	segmentId
user_ids (	RuserIds:
state (2$.bucketeer.feature.SegmentUser.StateRstate"�
SegmentUserDeletedEvent

segment_id (	R	segmentId
user_ids (	RuserIds:
state (2$.bucketeer.feature.SegmentUser.StateRstate"�
SegmentBulkUploadUsersEvent

segment_id (	R	segmentId9
status (2!.bucketeer.feature.Segment.StatusRstatus:
state (2$.bucketeer.feature.SegmentUser.StateRstate"�
(SegmentBulkUploadUsersStatusChangedEvent

segment_id (	R	segmentId9
status (2!.bucketeer.feature.Segment.StatusRstatus:
state (2$.bucketeer.feature.SegmentUser.StateRstate
count (Rcount"�
EnvironmentCreatedEvent
id (	Rid
	namespace (	R	namespace
name (	Rname 
description (	Rdescription
deleted (Rdeleted

created_at (R	createdAt

updated_at (R	updatedAt

project_id (	R	projectId"=
EnvironmentRenamedEvent
id (	Rid
name (	Rname"V
"EnvironmentDescriptionChangedEvent
id (	Rid 
description (	Rdescription"G
EnvironmentDeletedEvent
id (	Rid
	namespace (	R	namespace"�
EnvironmentV2CreatedEvent
id (	Rid
name (	Rname
url_code (	RurlCode 
description (	Rdescription

project_id (	R	projectId
archived (Rarchived

created_at (R	createdAt

updated_at (R	updatedAt'
require_comment	 (RrequireComment"�
EnvironmentV2RenamedEvent
id (	Rid

project_id (	R	projectId
old_name (	RoldName
new_name (	RnewName"�
$EnvironmentV2DescriptionChangedEvent
id (	Rid
name (	Rname

project_id (	R	projectId'
old_description (	RoldDescription'
new_description (	RnewDescription"�
'EnvironmentV2RequireCommentChangedEvent
id (	Rid
name (	Rname

project_id (	R	projectId'
require_comment (RrequireComment"_
EnvironmentV2ArchivedEvent
id (	Rid
name (	Rname

project_id (	R	projectId"a
EnvironmentV2UnarchivedEvent
id (	Rid
name (	Rname

project_id (	R	projectId"�
EnvironmentV2UpdatedEvent
id (	Rid0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescriptionC
require_comment (2.google.protobuf.BoolValueRrequireComment"�
AutoOpsRuleCreatedEvent

feature_id (	R	featureId5
ops_type (2.bucketeer.autoops.OpsTypeRopsType3
clauses (2.bucketeer.autoops.ClauseRclauses

created_at (R	createdAt

updated_at (R	updatedAt?

ops_status (2 .bucketeer.autoops.AutoOpsStatusR	opsStatusJ"
AutoOpsRuleStoppedEvent"
AutoOpsRuleDeletedEvent"W
AutoOpsRuleOpsTypeChangedEvent5
ops_type (2.bucketeer.autoops.OpsTypeRopsType"$
"AutoOpsRuleTriggeredAtChangedEvent"c
 AutoOpsRuleOpsStatusChangedEvent?

ops_status (2 .bucketeer.autoops.AutoOpsStatusR	opsStatus"�
OpsEventRateClauseAddedEvent
	clause_id (	RclauseIdX
ops_event_rate_clause (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClause"�
OpsEventRateClauseChangedEvent
	clause_id (	RclauseIdX
ops_event_rate_clause (2%.bucketeer.autoops.OpsEventRateClauseRopsEventRateClause"<
AutoOpsRuleClauseDeletedEvent
	clause_id (	RclauseId"�
DatetimeClauseAddedEvent
	clause_id (	RclauseIdJ
datetime_clause (2!.bucketeer.autoops.DatetimeClauseRdatetimeClause"�
AutoOpsRuleUpdatedEvent
id (	Rid�
update_ops_event_rate_clauses
 (2D.bucketeer.autoops.UpdateAutoOpsRuleRequest.UpdateOpsEventRateClauseRupdateOpsEventRateClausesx
update_datetime_clauses (2@.bucketeer.autoops.UpdateAutoOpsRuleRequest.UpdateDatetimeClauseRupdateDatetimeClauses"�
DatetimeClauseChangedEvent
	clause_id (	RclauseIdJ
datetime_clause (2!.bucketeer.autoops.DatetimeClauseRdatetimeClause"p
PushCreatedEvent.
fcm_service_account (	RfcmServiceAccount
tags (	Rtags
name (	RnameJ"
PushDeletedEvent"(
PushTagsAddedEvent
tags (	Rtags"*
PushTagsDeletedEvent
tags (	Rtags"&
PushRenamedEvent
name (	Rname"*
PushTagsUpdatedEvent
tags (	Rtags"X
PushUpdatedEvent0
name (2.google.protobuf.StringValueRname
tags (	Rtags"�
SubscriptionCreatedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes?
	recipient (2!.bucketeer.notification.RecipientR	recipient
name (	Rname*
feature_flag_tags (	RfeatureFlagTags"
SubscriptionDeletedEvent"
SubscriptionEnabledEvent"
SubscriptionDisabledEvent"w
!SubscriptionSourceTypesAddedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes"y
#SubscriptionSourceTypesDeletedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes".
SubscriptionRenamedEvent
name (	Rname"U
'SubscriptionFeatureFlagTagsUpdatedEvent*
feature_flag_tags (	RfeatureFlagTags"�
SubscriptionUpdatedEvent
id (	Rid0
name (2.google.protobuf.StringValueRnameR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes6
disabled (2.google.protobuf.BoolValueRdisabled*
feature_flag_tags (	RfeatureFlagTags"�
AdminSubscriptionCreatedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes?
	recipient (2!.bucketeer.notification.RecipientR	recipient
name (	Rname"
AdminSubscriptionDeletedEvent"
AdminSubscriptionEnabledEvent" 
AdminSubscriptionDisabledEvent"|
&AdminSubscriptionSourceTypesAddedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes"~
(AdminSubscriptionSourceTypesDeletedEventR
source_types (2/.bucketeer.notification.Subscription.SourceTypeRsourceTypes"3
AdminSubscriptionRenamedEvent
name (	Rname"�
ProjectCreatedEvent
id (	Rid 
description (	Rdescription
disabled (Rdisabled
trial (Rtrial#
creator_email (	RcreatorEmail

created_at (R	createdAt

updated_at (R	updatedAt
name (	Rname
url_code	 (	RurlCode"�
ProjectUpdatedEvent
id (	Rid'
organization_id (	RorganizationId
name (	Rname 
description (	Rdescription"R
ProjectDescriptionChangedEvent
id (	Rid 
description (	Rdescription"9
ProjectRenamedEvent
id (	Rid
name (	Rname"%
ProjectEnabledEvent
id (	Rid"&
ProjectDisabledEvent
id (	Rid"�
ProjectTrialCreatedEvent
id (	Rid 
description (	Rdescription
disabled (Rdisabled
trial (Rtrial#
creator_email (	RcreatorEmail

created_at (R	createdAt

updated_at (R	updatedAt
name (	Rname
url_code	 (	RurlCode",
ProjectTrialConvertedEvent
id (	Rid"]
PrerequisiteAddedEventC
prerequisite (2.bucketeer.feature.PrerequisiteRprerequisite"h
!PrerequisiteVariationChangedEventC
prerequisite (2.bucketeer.feature.PrerequisiteRprerequisite"9
PrerequisiteRemovedEvent

feature_id (	R	featureId"�
ProgressiveRolloutCreatedEvent
id (	Rid

feature_id (	R	featureId,
clause (2.google.protobuf.AnyRclause

created_at (R	createdAt

updated_at (R	updatedAt>
type (2*.bucketeer.autoops.ProgressiveRollout.TypeRtype"�
ProgressiveRolloutStoppedEvent
id (	RidD
status (2,.bucketeer.autoops.ProgressiveRollout.StatusRstatusN

stopped_by (2/.bucketeer.autoops.ProgressiveRollout.StoppedByR	stoppedBy

stopped_at (R	stoppedAt"0
ProgressiveRolloutDeletedEvent
id (	Rid"T
1ProgressiveRolloutScheduleTriggeredAtChangedEvent
schedule_id (	R
scheduleId"�
OrganizationCreatedEvent
id (	Rid
name (	Rname
url_code (	RurlCode 
description (	Rdescription
disabled (Rdisabled
archived (Rarchived
trial (Rtrial

created_at (R	createdAt

updated_at	 (R	updatedAt
owner_email
 (	R
ownerEmail"W
#OrganizationDescriptionChangedEvent
id (	Rid 
description (	Rdescription"U
"OrganizationOwnerEmailChangedEvent
id (	Rid
owner_email (	R
ownerEmail"B
OrganizationNameChangedEvent
id (	Rid
name (	Rname"�
OrganizationUpdatedEvent
id (	Rid0
name (2.google.protobuf.StringValueRname>
description (2.google.protobuf.StringValueRdescription<

ownerEmail (2.google.protobuf.StringValueR
ownerEmail"*
OrganizationEnabledEvent
id (	Rid"+
OrganizationDisabledEvent
id (	Rid"+
OrganizationArchivedEvent
id (	Rid"-
OrganizationUnarchivedEvent
id (	Rid"1
OrganizationTrialConvertedEvent
id (	Rid"�
FlagTriggerCreatedEvent
id (	Rid

feature_id (	R	featureId7
type (2#.bucketeer.feature.FlagTrigger.TypeRtype=
action (2%.bucketeer.feature.FlagTrigger.ActionRaction 
description (	Rdescription
token (	Rtoken

created_at (R	createdAt

updated_at	 (R	updatedAt%
environment_id
 (	RenvironmentIdJ"�
FlagTriggerUpdateEvent
id (	Rid

feature_id (	R	featureId>
description (2.google.protobuf.StringValueRdescription
reset (Rreset6
disabled (2.google.protobuf.BoolValueRdisabled"�
FlagTriggerResetEvent
id (	Rid

feature_id (	R	featureId
token (	Rtoken%
environment_id (	RenvironmentIdJ"�
"FlagTriggerDescriptionChangedEvent
id (	Rid

feature_id (	R	featureId 
description (	Rdescription%
environment_id (	RenvironmentIdJ"v
FlagTriggerDisabledEvent
id (	Rid

feature_id (	R	featureId%
environment_id (	RenvironmentIdJ"u
FlagTriggerEnabledEvent
id (	Rid

feature_id (	R	featureId%
environment_id (	RenvironmentIdJ"u
FlagTriggerDeletedEvent
id (	Rid

feature_id (	R	featureId%
environment_id (	RenvironmentIdJ"�
FlagTriggerUsageUpdatedEvent
id (	Rid

feature_id (	R	featureId*
last_triggered_at (RlastTriggeredAt#
trigger_times (RtriggerTimes%
environment_id (	RenvironmentIdJ"U
AccountV2FirstNameChangedEvent
email (	Remail

first_name (	R	firstName"R
AccountV2LastNameChangedEvent
email (	Remail
	last_name (	RlastName"Q
AccountV2LanguageChangedEvent
email (	Remail
language (	Rlanguage"�
TagCreatedEvent
id (	Rid
name (	Rname

created_at (R	createdAt

updated_at (R	updatedAt>
entity_type (2.bucketeer.tag.Tag.EntityTypeR
entityType%
environment_id (	RenvironmentId"H
TagDeletedEvent
id (	Rid%
environment_id (	RenvironmentId"�
CodeReferenceCreatedEvent
id (	Rid

feature_id (	R	featureId
	file_path (	RfilePath
line_number (R
lineNumber!
code_snippet (	RcodeSnippet!
content_hash (	RcontentHash
aliases (	Raliases'
repository_name (	RrepositoryName)
repository_owner	 (	RrepositoryOwnerX
repository_type
 (2/.bucketeer.coderef.CodeReference.RepositoryTypeRrepositoryType+
repository_branch (	RrepositoryBranch
commit_hash (	R
commitHash%
environment_id (	RenvironmentId

created_at (R	createdAt

updated_at (R	updatedAt"�
CodeReferenceUpdatedEvent
id (	Rid
	file_path (	RfilePath
line_number (R
lineNumber!
code_snippet (	RcodeSnippet!
content_hash (	RcontentHash
aliases (	Raliases+
repository_branch (	RrepositoryBranch
commit_hash (	R
commitHash%
environment_id	 (	RenvironmentId

updated_at
 (R	updatedAt"R
CodeReferenceDeletedEvent
id (	Rid%
environment_id (	RenvironmentIdB6Z4github.com/bucketeer-io/bucketeer/proto/event/domainbproto3
�
*proto/event/domain/localized_message.protobucketeer.event.domain"D
LocalizedMessage
locale (	Rlocale
message (	RmessageB6Z4github.com/bucketeer-io/bucketeer/proto/event/domainbproto3
�
proto/auditlog/auditlog.protobucketeer.auditloggoogle/protobuf/any.protoproto/event/domain/event.proto*proto/event/domain/localized_message.proto"�
AuditLog
id (	Rid
	timestamp (R	timestampI
entity_type (2(.bucketeer.event.domain.Event.EntityTypeR
entityType
	entity_id (	RentityId6
type (2".bucketeer.event.domain.Event.TypeRtype*
event (2.google.protobuf.AnyRevent6
editor (2.bucketeer.event.domain.EditorReditor9
options (2.bucketeer.event.domain.OptionsRoptionsU
localized_message	 (2(.bucketeer.event.domain.LocalizedMessageRlocalizedMessage
entity_data
 (	R
entityData0
previous_entity_data (	RpreviousEntityDataB2Z0github.com/bucketeer-io/bucketeer/proto/auditlogbproto3
�&
proto/auditlog/service.protobucketeer.auditloggoogle/api/annotations.protogoogle/api/field_behavior.proto.protoc-gen-openapiv2/options/annotations.protogoogle/protobuf/wrappers.protoproto/auditlog/auditlog.proto"U
GetAuditLogRequest
id (	B�ARid*
environment_id (	B�ARenvironmentId"P
GetAuditLogResponse9
	audit_log (2.bucketeer.auditlog.AuditLogRauditLog"�
ListAuditLogsRequest
	page_size (RpageSize
cursor (	RcursorK
order_by (20.bucketeer.auditlog.ListAuditLogsRequest.OrderByRorderBy`
order_direction (27.bucketeer.auditlog.ListAuditLogsRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword
from (Rfrom
to (Rto<
entity_type	 (2.google.protobuf.Int32ValueR
entityType%
environment_id
 (	RenvironmentId"%
OrderBy
DEFAULT 
	TIMESTAMP"#
OrderDirection
DESC 
ASCJ"�
ListAuditLogsResponse;

audit_logs (2.bucketeer.auditlog.AuditLogR	auditLogs
cursor (	Rcursor
total_count (R
totalCount"�
ListAdminAuditLogsRequest
	page_size (RpageSize
cursor (	RcursorP
order_by (25.bucketeer.auditlog.ListAdminAuditLogsRequest.OrderByRorderBye
order_direction (2<.bucketeer.auditlog.ListAdminAuditLogsRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword
from (Rfrom
to (Rto<
entity_type (2.google.protobuf.Int32ValueR
entityType"%
OrderBy
DEFAULT 
	TIMESTAMP"#
OrderDirection
DESC 
ASC"�
ListAdminAuditLogsResponse;

audit_logs (2.bucketeer.auditlog.AuditLogR	auditLogs
cursor (	Rcursor
total_count (R
totalCount"�
ListFeatureHistoryRequest"

feature_id (	B�AR	featureId
	page_size (RpageSize
cursor (	RcursorP
order_by (25.bucketeer.auditlog.ListFeatureHistoryRequest.OrderByRorderBye
order_direction (2<.bucketeer.auditlog.ListFeatureHistoryRequest.OrderDirectionRorderDirection%
search_keyword (	RsearchKeyword
from (Rfrom
to	 (Rto%
environment_id
 (	RenvironmentId"%
OrderBy
DEFAULT 
	TIMESTAMP"#
OrderDirection
DESC 
ASCJ"�
ListFeatureHistoryResponse;

audit_logs (2.bucketeer.auditlog.AuditLogR	auditLogs
cursor (	Rcursor
total_count (R
totalCount2�
AuditLogService�
GetAuditLog&.bucketeer.auditlog.GetAuditLogRequest'.bucketeer.auditlog.GetAuditLogResponse"��A�
	audit_logGet Audit LogGet an audit log details*web.v1.audit_log.getJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }J�
404�
2Returned when the requested resource is not found.
.google.rpc.Status"H
application/json4{ "code": 5, "message": "not found", "details": [] }���/v1/audit_log�
ListAuditLogs(.bucketeer.auditlog.ListAuditLogsRequest).bucketeer.auditlog.ListAuditLogsResponse"��A�
	audit_logList Audit LogsList audit logs*web.v1.audit_log.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/audit_logs�
ListAdminAuditLogs-.bucketeer.auditlog.ListAdminAuditLogsRequest..bucketeer.auditlog.ListAdminAuditLogsResponse"��A�
	audit_logList Admin Audit LogsList admin audit logs*web.v1.audit_log.admin.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/admin_audit_logs�
ListFeatureHistory-.bucketeer.auditlog.ListFeatureHistoryRequest..bucketeer.auditlog.ListFeatureHistoryResponse"��A�
	audit_logList Feature HistoryList feature history*%web.v1.audit_log.feature_history.listJ�
400�
:Returned for bad requests that may have failed validation.
.google.rpc.Status"V
application/jsonB{ "code": 3, "message": "invalid arguments error", "details": [] }J�
401�
=Request could not be authenticated (authentication required).
.google.rpc.Status"Q
application/json={ "code": 16, "message": "not authenticated", "details": [] }���/v1/feature_historyB2Z0github.com/bucketeer-io/bucketeer/proto/auditlogbproto3