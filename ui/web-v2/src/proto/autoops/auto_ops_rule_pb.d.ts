// package: bucketeer.autoops
// file: proto/autoops/auto_ops_rule.proto

import * as jspb from 'google-protobuf';
import * as proto_autoops_clause_pb from '../../proto/autoops/clause_pb';

export class AutoOpsRule extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFeatureId(): string;
  setFeatureId(value: string): void;

  getOpsType(): OpsTypeMap[keyof OpsTypeMap];
  setOpsType(value: OpsTypeMap[keyof OpsTypeMap]): void;

  clearClausesList(): void;
  getClausesList(): Array<proto_autoops_clause_pb.Clause>;
  setClausesList(value: Array<proto_autoops_clause_pb.Clause>): void;
  addClauses(
    value?: proto_autoops_clause_pb.Clause,
    index?: number
  ): proto_autoops_clause_pb.Clause;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getAutoOpsStatus(): AutoOpsStatusMap[keyof AutoOpsStatusMap];
  setAutoOpsStatus(value: AutoOpsStatusMap[keyof AutoOpsStatusMap]): void;

  getFeatureName(): string;
  setFeatureName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoOpsRule.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AutoOpsRule
  ): AutoOpsRule.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AutoOpsRule,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AutoOpsRule;
  static deserializeBinaryFromReader(
    message: AutoOpsRule,
    reader: jspb.BinaryReader
  ): AutoOpsRule;
}

export namespace AutoOpsRule {
  export type AsObject = {
    id: string;
    featureId: string;
    opsType: OpsTypeMap[keyof OpsTypeMap];
    clausesList: Array<proto_autoops_clause_pb.Clause.AsObject>;
    createdAt: number;
    updatedAt: number;
    deleted: boolean;
    autoOpsStatus: AutoOpsStatusMap[keyof AutoOpsStatusMap];
    featureName: string;
  };
}

export class AutoOpsRules extends jspb.Message {
  clearAutoOpsRulesList(): void;
  getAutoOpsRulesList(): Array<AutoOpsRule>;
  setAutoOpsRulesList(value: Array<AutoOpsRule>): void;
  addAutoOpsRules(value?: AutoOpsRule, index?: number): AutoOpsRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoOpsRules.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AutoOpsRules
  ): AutoOpsRules.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AutoOpsRules,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AutoOpsRules;
  static deserializeBinaryFromReader(
    message: AutoOpsRules,
    reader: jspb.BinaryReader
  ): AutoOpsRules;
}

export namespace AutoOpsRules {
  export type AsObject = {
    autoOpsRulesList: Array<AutoOpsRule.AsObject>;
  };
}

export interface OpsTypeMap {
  TYPE_UNKNOWN: 0;
  SCHEDULE: 2;
  EVENT_RATE: 3;
}

export const OpsType: OpsTypeMap;

export interface AutoOpsStatusMap {
  WAITING: 0;
  RUNNING: 1;
  FINISHED: 2;
  STOPPED: 3;
}

export const AutoOpsStatus: AutoOpsStatusMap;
