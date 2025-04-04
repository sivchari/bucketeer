// source: proto/experiment/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof window !== 'undefined' && window) ||
  (typeof global !== 'undefined' && global) ||
  (typeof self !== 'undefined' && self) ||
  function () {
    return this;
  }.call(null) ||
  Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var proto_experiment_command_pb = require('../../proto/experiment/command_pb.js');
goog.object.extend(proto, proto_experiment_command_pb);
var proto_experiment_goal_pb = require('../../proto/experiment/goal_pb.js');
goog.object.extend(proto, proto_experiment_goal_pb);
var proto_experiment_experiment_pb = require('../../proto/experiment/experiment_pb.js');
goog.object.extend(proto, proto_experiment_experiment_pb);
goog.exportSymbol(
  'proto.bucketeer.experiment.ArchiveExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ArchiveExperimentResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ArchiveGoalRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ArchiveGoalResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.CreateExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.CreateExperimentResponse',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.CreateGoalRequest', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.CreateGoalResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.DeleteExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.DeleteExperimentResponse',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.DeleteGoalRequest', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.DeleteGoalResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.FinishExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.FinishExperimentResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.GetExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.GetExperimentResponse',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.GetGoalRequest', null, global);
goog.exportSymbol('proto.bucketeer.experiment.GetGoalResponse', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListExperimentsRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListExperimentsRequest.OrderBy',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListExperimentsResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListExperimentsResponse.Summary',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.ListGoalsRequest', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListGoalsRequest.OrderBy',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.ListGoalsRequest.OrderDirection',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.ListGoalsResponse', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.StartExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.StartExperimentResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.StopExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.StopExperimentResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.UpdateExperimentRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus',
  null,
  global
);
goog.exportSymbol(
  'proto.bucketeer.experiment.UpdateExperimentResponse',
  null,
  global
);
goog.exportSymbol('proto.bucketeer.experiment.UpdateGoalRequest', null, global);
goog.exportSymbol(
  'proto.bucketeer.experiment.UpdateGoalResponse',
  null,
  global
);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.GetGoalRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.GetGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.GetGoalRequest.displayName =
    'proto.bucketeer.experiment.GetGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.GetGoalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.GetGoalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.GetGoalResponse.displayName =
    'proto.bucketeer.experiment.GetGoalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ListGoalsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.ListGoalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ListGoalsRequest.displayName =
    'proto.bucketeer.experiment.ListGoalsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ListGoalsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.bucketeer.experiment.ListGoalsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.bucketeer.experiment.ListGoalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ListGoalsResponse.displayName =
    'proto.bucketeer.experiment.ListGoalsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.CreateGoalRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.CreateGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.CreateGoalRequest.displayName =
    'proto.bucketeer.experiment.CreateGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.CreateGoalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.CreateGoalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.CreateGoalResponse.displayName =
    'proto.bucketeer.experiment.CreateGoalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ArchiveGoalRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.ArchiveGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ArchiveGoalRequest.displayName =
    'proto.bucketeer.experiment.ArchiveGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ArchiveGoalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.ArchiveGoalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ArchiveGoalResponse.displayName =
    'proto.bucketeer.experiment.ArchiveGoalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.DeleteGoalRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.DeleteGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.DeleteGoalRequest.displayName =
    'proto.bucketeer.experiment.DeleteGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.DeleteGoalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.DeleteGoalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.DeleteGoalResponse.displayName =
    'proto.bucketeer.experiment.DeleteGoalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.UpdateGoalRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.UpdateGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.UpdateGoalRequest.displayName =
    'proto.bucketeer.experiment.UpdateGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.UpdateGoalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.UpdateGoalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.UpdateGoalResponse.displayName =
    'proto.bucketeer.experiment.UpdateGoalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.GetExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.GetExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.GetExperimentRequest.displayName =
    'proto.bucketeer.experiment.GetExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.GetExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.GetExperimentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.GetExperimentResponse.displayName =
    'proto.bucketeer.experiment.GetExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ListExperimentsRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.bucketeer.experiment.ListExperimentsRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.bucketeer.experiment.ListExperimentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ListExperimentsRequest.displayName =
    'proto.bucketeer.experiment.ListExperimentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ListExperimentsResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.bucketeer.experiment.ListExperimentsResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.bucketeer.experiment.ListExperimentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ListExperimentsResponse.displayName =
    'proto.bucketeer.experiment.ListExperimentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.ListExperimentsResponse.Summary,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ListExperimentsResponse.Summary.displayName =
    'proto.bucketeer.experiment.ListExperimentsResponse.Summary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.CreateExperimentRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.bucketeer.experiment.CreateExperimentRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.bucketeer.experiment.CreateExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.CreateExperimentRequest.displayName =
    'proto.bucketeer.experiment.CreateExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.CreateExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.CreateExperimentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.CreateExperimentResponse.displayName =
    'proto.bucketeer.experiment.CreateExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.UpdateExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.UpdateExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.displayName =
    'proto.bucketeer.experiment.UpdateExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus = function (
  opt_data
) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.displayName =
    'proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.UpdateExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.UpdateExperimentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.UpdateExperimentResponse.displayName =
    'proto.bucketeer.experiment.UpdateExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.StartExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.StartExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.StartExperimentRequest.displayName =
    'proto.bucketeer.experiment.StartExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.StartExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.StartExperimentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.StartExperimentResponse.displayName =
    'proto.bucketeer.experiment.StartExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.FinishExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.FinishExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.FinishExperimentRequest.displayName =
    'proto.bucketeer.experiment.FinishExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.FinishExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.FinishExperimentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.FinishExperimentResponse.displayName =
    'proto.bucketeer.experiment.FinishExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.StopExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.StopExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.StopExperimentRequest.displayName =
    'proto.bucketeer.experiment.StopExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.StopExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.StopExperimentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.StopExperimentResponse.displayName =
    'proto.bucketeer.experiment.StopExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ArchiveExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.ArchiveExperimentRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ArchiveExperimentRequest.displayName =
    'proto.bucketeer.experiment.ArchiveExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.ArchiveExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.ArchiveExperimentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.ArchiveExperimentResponse.displayName =
    'proto.bucketeer.experiment.ArchiveExperimentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.DeleteExperimentRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.experiment.DeleteExperimentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.DeleteExperimentRequest.displayName =
    'proto.bucketeer.experiment.DeleteExperimentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bucketeer.experiment.DeleteExperimentResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.bucketeer.experiment.DeleteExperimentResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.experiment.DeleteExperimentResponse.displayName =
    'proto.bucketeer.experiment.DeleteExperimentResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.GetGoalRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.GetGoalRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.GetGoalRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.GetGoalRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        environmentId: jspb.Message.getFieldWithDefault(msg, 3, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.GetGoalRequest}
 */
proto.bucketeer.experiment.GetGoalRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.GetGoalRequest();
  return proto.bucketeer.experiment.GetGoalRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.GetGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.GetGoalRequest}
 */
proto.bucketeer.experiment.GetGoalRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.GetGoalRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.GetGoalRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.GetGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.GetGoalRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getEnvironmentId();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.GetGoalRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.GetGoalRequest} returns this
 */
proto.bucketeer.experiment.GetGoalRequest.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string environment_id = 3;
 * @return {string}
 */
proto.bucketeer.experiment.GetGoalRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.GetGoalRequest} returns this
 */
proto.bucketeer.experiment.GetGoalRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.GetGoalResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.GetGoalResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.GetGoalResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.GetGoalResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        goal:
          (f = msg.getGoal()) &&
          proto_experiment_goal_pb.Goal.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.GetGoalResponse}
 */
proto.bucketeer.experiment.GetGoalResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.GetGoalResponse();
  return proto.bucketeer.experiment.GetGoalResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.GetGoalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.GetGoalResponse}
 */
proto.bucketeer.experiment.GetGoalResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_goal_pb.Goal();
          reader.readMessage(
            value,
            proto_experiment_goal_pb.Goal.deserializeBinaryFromReader
          );
          msg.setGoal(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.GetGoalResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.GetGoalResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.GetGoalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.GetGoalResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getGoal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_experiment_goal_pb.Goal.serializeBinaryToWriter
    );
  }
};

/**
 * optional Goal goal = 1;
 * @return {?proto.bucketeer.experiment.Goal}
 */
proto.bucketeer.experiment.GetGoalResponse.prototype.getGoal = function () {
  return /** @type{?proto.bucketeer.experiment.Goal} */ (
    jspb.Message.getWrapperField(this, proto_experiment_goal_pb.Goal, 1)
  );
};

/**
 * @param {?proto.bucketeer.experiment.Goal|undefined} value
 * @return {!proto.bucketeer.experiment.GetGoalResponse} returns this
 */
proto.bucketeer.experiment.GetGoalResponse.prototype.setGoal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.GetGoalResponse} returns this
 */
proto.bucketeer.experiment.GetGoalResponse.prototype.clearGoal = function () {
  return this.setGoal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.GetGoalResponse.prototype.hasGoal = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ListGoalsRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.ListGoalsRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ListGoalsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ListGoalsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
        cursor: jspb.Message.getFieldWithDefault(msg, 2, ''),
        orderBy: jspb.Message.getFieldWithDefault(msg, 4, 0),
        orderDirection: jspb.Message.getFieldWithDefault(msg, 5, 0),
        searchKeyword: jspb.Message.getFieldWithDefault(msg, 6, ''),
        isInUseStatus:
          (f = msg.getIsInUseStatus()) &&
          google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
        archived:
          (f = msg.getArchived()) &&
          google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
        environmentId: jspb.Message.getFieldWithDefault(msg, 9, ''),
        connectionType: jspb.Message.getFieldWithDefault(msg, 10, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ListGoalsRequest}
 */
proto.bucketeer.experiment.ListGoalsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.ListGoalsRequest();
  return proto.bucketeer.experiment.ListGoalsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ListGoalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ListGoalsRequest}
 */
proto.bucketeer.experiment.ListGoalsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setPageSize(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setCursor(value);
          break;
        case 4:
          var value =
            /** @type {!proto.bucketeer.experiment.ListGoalsRequest.OrderBy} */ (
              reader.readEnum()
            );
          msg.setOrderBy(value);
          break;
        case 5:
          var value =
            /** @type {!proto.bucketeer.experiment.ListGoalsRequest.OrderDirection} */ (
              reader.readEnum()
            );
          msg.setOrderDirection(value);
          break;
        case 6:
          var value = /** @type {string} */ (reader.readString());
          msg.setSearchKeyword(value);
          break;
        case 7:
          var value = new google_protobuf_wrappers_pb.BoolValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader
          );
          msg.setIsInUseStatus(value);
          break;
        case 8:
          var value = new google_protobuf_wrappers_pb.BoolValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader
          );
          msg.setArchived(value);
          break;
        case 9:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        case 10:
          var value =
            /** @type {!proto.bucketeer.experiment.Goal.ConnectionType} */ (
              reader.readEnum()
            );
          msg.setConnectionType(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ListGoalsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ListGoalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ListGoalsRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(1, f);
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getOrderBy();
  if (f !== 0.0) {
    writer.writeEnum(4, f);
  }
  f = message.getOrderDirection();
  if (f !== 0.0) {
    writer.writeEnum(5, f);
  }
  f = message.getSearchKeyword();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
  f = message.getIsInUseStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getArchived();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnvironmentId();
  if (f.length > 0) {
    writer.writeString(9, f);
  }
  f = message.getConnectionType();
  if (f !== 0.0) {
    writer.writeEnum(10, f);
  }
};

/**
 * @enum {number}
 */
proto.bucketeer.experiment.ListGoalsRequest.OrderBy = {
  DEFAULT: 0,
  NAME: 1,
  CREATED_AT: 2,
  UPDATED_AT: 3,
  CONNECTION_TYPE: 4
};

/**
 * @enum {number}
 */
proto.bucketeer.experiment.ListGoalsRequest.OrderDirection = {
  ASC: 0,
  DESC: 1
};

/**
 * optional int64 page_size = 1;
 * @return {number}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getPageSize =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setPageSize = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getCursor = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setCursor = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional OrderBy order_by = 4;
 * @return {!proto.bucketeer.experiment.ListGoalsRequest.OrderBy}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getOrderBy = function () {
  return /** @type {!proto.bucketeer.experiment.ListGoalsRequest.OrderBy} */ (
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};

/**
 * @param {!proto.bucketeer.experiment.ListGoalsRequest.OrderBy} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setOrderBy = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};

/**
 * optional OrderDirection order_direction = 5;
 * @return {!proto.bucketeer.experiment.ListGoalsRequest.OrderDirection}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getOrderDirection =
  function () {
    return /** @type {!proto.bucketeer.experiment.ListGoalsRequest.OrderDirection} */ (
      jspb.Message.getFieldWithDefault(this, 5, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.ListGoalsRequest.OrderDirection} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setOrderDirection =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 5, value);
  };

/**
 * optional string search_keyword = 6;
 * @return {string}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getSearchKeyword =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 6, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setSearchKeyword =
  function (value) {
    return jspb.Message.setProto3StringField(this, 6, value);
  };

/**
 * optional google.protobuf.BoolValue is_in_use_status = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getIsInUseStatus =
  function () {
    return /** @type{?proto.google.protobuf.BoolValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.BoolValue,
        7
      )
    );
  };

/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setIsInUseStatus =
  function (value) {
    return jspb.Message.setWrapperField(this, 7, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.clearIsInUseStatus =
  function () {
    return this.setIsInUseStatus(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.hasIsInUseStatus =
  function () {
    return jspb.Message.getField(this, 7) != null;
  };

/**
 * optional google.protobuf.BoolValue archived = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getArchived =
  function () {
    return /** @type{?proto.google.protobuf.BoolValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.BoolValue,
        8
      )
    );
  };

/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setArchived = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.clearArchived =
  function () {
    return this.setArchived(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.hasArchived =
  function () {
    return jspb.Message.getField(this, 8) != null;
  };

/**
 * optional string environment_id = 9;
 * @return {string}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 9, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 9, value);
  };

/**
 * optional Goal.ConnectionType connection_type = 10;
 * @return {!proto.bucketeer.experiment.Goal.ConnectionType}
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.getConnectionType =
  function () {
    return /** @type {!proto.bucketeer.experiment.Goal.ConnectionType} */ (
      jspb.Message.getFieldWithDefault(this, 10, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.Goal.ConnectionType} value
 * @return {!proto.bucketeer.experiment.ListGoalsRequest} returns this
 */
proto.bucketeer.experiment.ListGoalsRequest.prototype.setConnectionType =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 10, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.experiment.ListGoalsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ListGoalsResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.ListGoalsResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ListGoalsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ListGoalsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        goalsList: jspb.Message.toObjectList(
          msg.getGoalsList(),
          proto_experiment_goal_pb.Goal.toObject,
          includeInstance
        ),
        cursor: jspb.Message.getFieldWithDefault(msg, 2, ''),
        totalCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ListGoalsResponse}
 */
proto.bucketeer.experiment.ListGoalsResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.ListGoalsResponse();
  return proto.bucketeer.experiment.ListGoalsResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ListGoalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ListGoalsResponse}
 */
proto.bucketeer.experiment.ListGoalsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_goal_pb.Goal();
          reader.readMessage(
            value,
            proto_experiment_goal_pb.Goal.deserializeBinaryFromReader
          );
          msg.addGoals(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setCursor(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setTotalCount(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ListGoalsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ListGoalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ListGoalsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getGoalsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        proto_experiment_goal_pb.Goal.serializeBinaryToWriter
      );
    }
    f = message.getCursor();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getTotalCount();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * repeated Goal goals = 1;
 * @return {!Array<!proto.bucketeer.experiment.Goal>}
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.getGoalsList =
  function () {
    return /** @type{!Array<!proto.bucketeer.experiment.Goal>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        proto_experiment_goal_pb.Goal,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.bucketeer.experiment.Goal>} value
 * @return {!proto.bucketeer.experiment.ListGoalsResponse} returns this
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.setGoalsList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.bucketeer.experiment.Goal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.experiment.Goal}
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.addGoals = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.bucketeer.experiment.Goal,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.experiment.ListGoalsResponse} returns this
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.clearGoalsList =
  function () {
    return this.setGoalsList([]);
  };

/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.getCursor = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListGoalsResponse} returns this
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.setCursor = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 total_count = 3;
 * @return {number}
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.getTotalCount =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListGoalsResponse} returns this
 */
proto.bucketeer.experiment.ListGoalsResponse.prototype.setTotalCount =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.CreateGoalRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.CreateGoalRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.CreateGoalRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.CreateGoalRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.CreateGoalCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 3, ''),
        id: jspb.Message.getFieldWithDefault(msg, 4, ''),
        name: jspb.Message.getFieldWithDefault(msg, 5, ''),
        description: jspb.Message.getFieldWithDefault(msg, 6, ''),
        connectionType: jspb.Message.getFieldWithDefault(msg, 7, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.CreateGoalRequest}
 */
proto.bucketeer.experiment.CreateGoalRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.CreateGoalRequest();
  return proto.bucketeer.experiment.CreateGoalRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.CreateGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.CreateGoalRequest}
 */
proto.bucketeer.experiment.CreateGoalRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_command_pb.CreateGoalCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.CreateGoalCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 5:
          var value = /** @type {string} */ (reader.readString());
          msg.setName(value);
          break;
        case 6:
          var value = /** @type {string} */ (reader.readString());
          msg.setDescription(value);
          break;
        case 7:
          var value =
            /** @type {!proto.bucketeer.experiment.Goal.ConnectionType} */ (
              reader.readEnum()
            );
          msg.setConnectionType(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.CreateGoalRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.CreateGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.CreateGoalRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_command_pb.CreateGoalCommand.serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
    f = message.getName();
    if (f.length > 0) {
      writer.writeString(5, f);
    }
    f = message.getDescription();
    if (f.length > 0) {
      writer.writeString(6, f);
    }
    f = message.getConnectionType();
    if (f !== 0.0) {
      writer.writeEnum(7, f);
    }
  };

/**
 * optional CreateGoalCommand command = 1;
 * @return {?proto.bucketeer.experiment.CreateGoalCommand}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.CreateGoalCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.CreateGoalCommand,
        1
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.CreateGoalCommand|undefined} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setCommand = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string environment_id = 3;
 * @return {string}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

/**
 * optional string id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string name = 5;
 * @return {string}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setName = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string description = 6;
 * @return {string}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getDescription =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 6, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setDescription =
  function (value) {
    return jspb.Message.setProto3StringField(this, 6, value);
  };

/**
 * optional Goal.ConnectionType connection_type = 7;
 * @return {!proto.bucketeer.experiment.Goal.ConnectionType}
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.getConnectionType =
  function () {
    return /** @type {!proto.bucketeer.experiment.Goal.ConnectionType} */ (
      jspb.Message.getFieldWithDefault(this, 7, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.Goal.ConnectionType} value
 * @return {!proto.bucketeer.experiment.CreateGoalRequest} returns this
 */
proto.bucketeer.experiment.CreateGoalRequest.prototype.setConnectionType =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 7, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.CreateGoalResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.CreateGoalResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.CreateGoalResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.CreateGoalResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        goal:
          (f = msg.getGoal()) &&
          proto_experiment_goal_pb.Goal.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.CreateGoalResponse}
 */
proto.bucketeer.experiment.CreateGoalResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.CreateGoalResponse();
  return proto.bucketeer.experiment.CreateGoalResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.CreateGoalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.CreateGoalResponse}
 */
proto.bucketeer.experiment.CreateGoalResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_goal_pb.Goal();
          reader.readMessage(
            value,
            proto_experiment_goal_pb.Goal.deserializeBinaryFromReader
          );
          msg.setGoal(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.CreateGoalResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.CreateGoalResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.CreateGoalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.CreateGoalResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getGoal();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_goal_pb.Goal.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Goal goal = 1;
 * @return {?proto.bucketeer.experiment.Goal}
 */
proto.bucketeer.experiment.CreateGoalResponse.prototype.getGoal = function () {
  return /** @type{?proto.bucketeer.experiment.Goal} */ (
    jspb.Message.getWrapperField(this, proto_experiment_goal_pb.Goal, 1)
  );
};

/**
 * @param {?proto.bucketeer.experiment.Goal|undefined} value
 * @return {!proto.bucketeer.experiment.CreateGoalResponse} returns this
 */
proto.bucketeer.experiment.CreateGoalResponse.prototype.setGoal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.CreateGoalResponse} returns this
 */
proto.bucketeer.experiment.CreateGoalResponse.prototype.clearGoal =
  function () {
    return this.setGoal(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.CreateGoalResponse.prototype.hasGoal = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ArchiveGoalRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.ArchiveGoalRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ArchiveGoalRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ArchiveGoalRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.ArchiveGoalCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.ArchiveGoalRequest();
  return proto.bucketeer.experiment.ArchiveGoalRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ArchiveGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value = new proto_experiment_command_pb.ArchiveGoalCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ArchiveGoalCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ArchiveGoalRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ArchiveGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ArchiveGoalRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.ArchiveGoalCommand.serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest} returns this
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional ArchiveGoalCommand command = 2;
 * @return {?proto.bucketeer.experiment.ArchiveGoalCommand}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ArchiveGoalCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ArchiveGoalCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ArchiveGoalCommand|undefined} value
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest} returns this
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.setCommand = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest} returns this
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ArchiveGoalRequest} returns this
 */
proto.bucketeer.experiment.ArchiveGoalRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ArchiveGoalResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.ArchiveGoalResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ArchiveGoalResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ArchiveGoalResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ArchiveGoalResponse}
 */
proto.bucketeer.experiment.ArchiveGoalResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.ArchiveGoalResponse();
  return proto.bucketeer.experiment.ArchiveGoalResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ArchiveGoalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ArchiveGoalResponse}
 */
proto.bucketeer.experiment.ArchiveGoalResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ArchiveGoalResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ArchiveGoalResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ArchiveGoalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ArchiveGoalResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.DeleteGoalRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.DeleteGoalRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.DeleteGoalRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.DeleteGoalRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.DeleteGoalCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest}
 */
proto.bucketeer.experiment.DeleteGoalRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.DeleteGoalRequest();
  return proto.bucketeer.experiment.DeleteGoalRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.DeleteGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest}
 */
proto.bucketeer.experiment.DeleteGoalRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value = new proto_experiment_command_pb.DeleteGoalCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.DeleteGoalCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.DeleteGoalRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.DeleteGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.DeleteGoalRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.DeleteGoalCommand.serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest} returns this
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional DeleteGoalCommand command = 2;
 * @return {?proto.bucketeer.experiment.DeleteGoalCommand}
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.DeleteGoalCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.DeleteGoalCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.DeleteGoalCommand|undefined} value
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest} returns this
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.setCommand = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest} returns this
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.DeleteGoalRequest} returns this
 */
proto.bucketeer.experiment.DeleteGoalRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.DeleteGoalResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.DeleteGoalResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.DeleteGoalResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.DeleteGoalResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.DeleteGoalResponse}
 */
proto.bucketeer.experiment.DeleteGoalResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.DeleteGoalResponse();
  return proto.bucketeer.experiment.DeleteGoalResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.DeleteGoalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.DeleteGoalResponse}
 */
proto.bucketeer.experiment.DeleteGoalResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.DeleteGoalResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.DeleteGoalResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.DeleteGoalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.DeleteGoalResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.UpdateGoalRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.UpdateGoalRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.UpdateGoalRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.UpdateGoalRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        renameCommand:
          (f = msg.getRenameCommand()) &&
          proto_experiment_command_pb.RenameGoalCommand.toObject(
            includeInstance,
            f
          ),
        changeDescriptionCommand:
          (f = msg.getChangeDescriptionCommand()) &&
          proto_experiment_command_pb.ChangeDescriptionGoalCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 5, ''),
        name:
          (f = msg.getName()) &&
          google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
        description:
          (f = msg.getDescription()) &&
          google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
        archived:
          (f = msg.getArchived()) &&
          google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest}
 */
proto.bucketeer.experiment.UpdateGoalRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.UpdateGoalRequest();
  return proto.bucketeer.experiment.UpdateGoalRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.UpdateGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest}
 */
proto.bucketeer.experiment.UpdateGoalRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value = new proto_experiment_command_pb.RenameGoalCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.RenameGoalCommand
              .deserializeBinaryFromReader
          );
          msg.setRenameCommand(value);
          break;
        case 3:
          var value =
            new proto_experiment_command_pb.ChangeDescriptionGoalCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ChangeDescriptionGoalCommand
              .deserializeBinaryFromReader
          );
          msg.setChangeDescriptionCommand(value);
          break;
        case 5:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        case 6:
          var value = new google_protobuf_wrappers_pb.StringValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader
          );
          msg.setName(value);
          break;
        case 7:
          var value = new google_protobuf_wrappers_pb.StringValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader
          );
          msg.setDescription(value);
          break;
        case 8:
          var value = new google_protobuf_wrappers_pb.BoolValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader
          );
          msg.setArchived(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.UpdateGoalRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.UpdateGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.UpdateGoalRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getRenameCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.RenameGoalCommand.serializeBinaryToWriter
      );
    }
    f = message.getChangeDescriptionCommand();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        proto_experiment_command_pb.ChangeDescriptionGoalCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(5, f);
    }
    f = message.getName();
    if (f != null) {
      writer.writeMessage(
        6,
        f,
        google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
      );
    }
    f = message.getDescription();
    if (f != null) {
      writer.writeMessage(
        7,
        f,
        google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
      );
    }
    f = message.getArchived();
    if (f != null) {
      writer.writeMessage(
        8,
        f,
        google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
      );
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional RenameGoalCommand rename_command = 2;
 * @return {?proto.bucketeer.experiment.RenameGoalCommand}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getRenameCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.RenameGoalCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.RenameGoalCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.RenameGoalCommand|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setRenameCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.clearRenameCommand =
  function () {
    return this.setRenameCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.hasRenameCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional ChangeDescriptionGoalCommand change_description_command = 3;
 * @return {?proto.bucketeer.experiment.ChangeDescriptionGoalCommand}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getChangeDescriptionCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ChangeDescriptionGoalCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ChangeDescriptionGoalCommand,
        3
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ChangeDescriptionGoalCommand|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setChangeDescriptionCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.clearChangeDescriptionCommand =
  function () {
    return this.setChangeDescriptionCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.hasChangeDescriptionCommand =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional string environment_id = 5;
 * @return {string}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 5, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 5, value);
  };

/**
 * optional google.protobuf.StringValue name = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getName = function () {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(
      this,
      google_protobuf_wrappers_pb.StringValue,
      6
    )
  );
};

/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setName = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.clearName = function () {
  return this.setName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.hasName = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional google.protobuf.StringValue description = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getDescription =
  function () {
    return /** @type{?proto.google.protobuf.StringValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.StringValue,
        7
      )
    );
  };

/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setDescription =
  function (value) {
    return jspb.Message.setWrapperField(this, 7, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.clearDescription =
  function () {
    return this.setDescription(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.hasDescription =
  function () {
    return jspb.Message.getField(this, 7) != null;
  };

/**
 * optional google.protobuf.BoolValue archived = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.getArchived =
  function () {
    return /** @type{?proto.google.protobuf.BoolValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.BoolValue,
        8
      )
    );
  };

/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.setArchived = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalRequest} returns this
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.clearArchived =
  function () {
    return this.setArchived(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalRequest.prototype.hasArchived =
  function () {
    return jspb.Message.getField(this, 8) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.UpdateGoalResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.experiment.UpdateGoalResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.UpdateGoalResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.UpdateGoalResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        goal:
          (f = msg.getGoal()) &&
          proto_experiment_goal_pb.Goal.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.UpdateGoalResponse}
 */
proto.bucketeer.experiment.UpdateGoalResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.UpdateGoalResponse();
  return proto.bucketeer.experiment.UpdateGoalResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.UpdateGoalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.UpdateGoalResponse}
 */
proto.bucketeer.experiment.UpdateGoalResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_goal_pb.Goal();
          reader.readMessage(
            value,
            proto_experiment_goal_pb.Goal.deserializeBinaryFromReader
          );
          msg.setGoal(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.UpdateGoalResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.UpdateGoalResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.UpdateGoalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.UpdateGoalResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getGoal();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_goal_pb.Goal.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Goal goal = 1;
 * @return {?proto.bucketeer.experiment.Goal}
 */
proto.bucketeer.experiment.UpdateGoalResponse.prototype.getGoal = function () {
  return /** @type{?proto.bucketeer.experiment.Goal} */ (
    jspb.Message.getWrapperField(this, proto_experiment_goal_pb.Goal, 1)
  );
};

/**
 * @param {?proto.bucketeer.experiment.Goal|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateGoalResponse} returns this
 */
proto.bucketeer.experiment.UpdateGoalResponse.prototype.setGoal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateGoalResponse} returns this
 */
proto.bucketeer.experiment.UpdateGoalResponse.prototype.clearGoal =
  function () {
    return this.setGoal(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateGoalResponse.prototype.hasGoal = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.GetExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.GetExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.GetExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.GetExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        environmentId: jspb.Message.getFieldWithDefault(msg, 3, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.GetExperimentRequest}
 */
proto.bucketeer.experiment.GetExperimentRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.GetExperimentRequest();
  return proto.bucketeer.experiment.GetExperimentRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.GetExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.GetExperimentRequest}
 */
proto.bucketeer.experiment.GetExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.GetExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.GetExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.GetExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.GetExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.GetExperimentRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.GetExperimentRequest} returns this
 */
proto.bucketeer.experiment.GetExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string environment_id = 3;
 * @return {string}
 */
proto.bucketeer.experiment.GetExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.GetExperimentRequest} returns this
 */
proto.bucketeer.experiment.GetExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.GetExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.GetExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.GetExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.GetExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        experiment:
          (f = msg.getExperiment()) &&
          proto_experiment_experiment_pb.Experiment.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.GetExperimentResponse}
 */
proto.bucketeer.experiment.GetExperimentResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.GetExperimentResponse();
  return proto.bucketeer.experiment.GetExperimentResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.GetExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.GetExperimentResponse}
 */
proto.bucketeer.experiment.GetExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_experiment_pb.Experiment();
          reader.readMessage(
            value,
            proto_experiment_experiment_pb.Experiment
              .deserializeBinaryFromReader
          );
          msg.setExperiment(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.GetExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.GetExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.GetExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.GetExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getExperiment();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_experiment_pb.Experiment.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Experiment experiment = 1;
 * @return {?proto.bucketeer.experiment.Experiment}
 */
proto.bucketeer.experiment.GetExperimentResponse.prototype.getExperiment =
  function () {
    return /** @type{?proto.bucketeer.experiment.Experiment} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_experiment_pb.Experiment,
        1
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.Experiment|undefined} value
 * @return {!proto.bucketeer.experiment.GetExperimentResponse} returns this
 */
proto.bucketeer.experiment.GetExperimentResponse.prototype.setExperiment =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.GetExperimentResponse} returns this
 */
proto.bucketeer.experiment.GetExperimentResponse.prototype.clearExperiment =
  function () {
    return this.setExperiment(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.GetExperimentResponse.prototype.hasExperiment =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.experiment.ListExperimentsRequest.repeatedFields_ = [14];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ListExperimentsRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.ListExperimentsRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ListExperimentsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ListExperimentsRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        featureId: jspb.Message.getFieldWithDefault(msg, 1, ''),
        featureVersion:
          (f = msg.getFeatureVersion()) &&
          google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
        startAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
        stopAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
        pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
        cursor: jspb.Message.getFieldWithDefault(msg, 6, ''),
        maintainer: jspb.Message.getFieldWithDefault(msg, 9, ''),
        orderBy: jspb.Message.getFieldWithDefault(msg, 10, 0),
        orderDirection: jspb.Message.getFieldWithDefault(msg, 11, 0),
        searchKeyword: jspb.Message.getFieldWithDefault(msg, 12, ''),
        archived:
          (f = msg.getArchived()) &&
          google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
        statusesList:
          (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
        environmentId: jspb.Message.getFieldWithDefault(msg, 15, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest}
 */
proto.bucketeer.experiment.ListExperimentsRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.ListExperimentsRequest();
  return proto.bucketeer.experiment.ListExperimentsRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ListExperimentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest}
 */
proto.bucketeer.experiment.ListExperimentsRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setFeatureId(value);
          break;
        case 2:
          var value = new google_protobuf_wrappers_pb.Int32Value();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader
          );
          msg.setFeatureVersion(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartAt(value);
          break;
        case 4:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStopAt(value);
          break;
        case 5:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setPageSize(value);
          break;
        case 6:
          var value = /** @type {string} */ (reader.readString());
          msg.setCursor(value);
          break;
        case 9:
          var value = /** @type {string} */ (reader.readString());
          msg.setMaintainer(value);
          break;
        case 10:
          var value =
            /** @type {!proto.bucketeer.experiment.ListExperimentsRequest.OrderBy} */ (
              reader.readEnum()
            );
          msg.setOrderBy(value);
          break;
        case 11:
          var value =
            /** @type {!proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection} */ (
              reader.readEnum()
            );
          msg.setOrderDirection(value);
          break;
        case 12:
          var value = /** @type {string} */ (reader.readString());
          msg.setSearchKeyword(value);
          break;
        case 13:
          var value = new google_protobuf_wrappers_pb.BoolValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader
          );
          msg.setArchived(value);
          break;
        case 14:
          var values =
            /** @type {!Array<!proto.bucketeer.experiment.Experiment.Status>} */ (
              reader.isDelimited()
                ? reader.readPackedEnum()
                : [reader.readEnum()]
            );
          for (var i = 0; i < values.length; i++) {
            msg.addStatuses(values[i]);
          }
          break;
        case 15:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ListExperimentsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ListExperimentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ListExperimentsRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getFeatureId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getFeatureVersion();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
      );
    }
    f = message.getStartAt();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
    f = message.getStopAt();
    if (f !== 0) {
      writer.writeInt64(4, f);
    }
    f = message.getPageSize();
    if (f !== 0) {
      writer.writeInt64(5, f);
    }
    f = message.getCursor();
    if (f.length > 0) {
      writer.writeString(6, f);
    }
    f = message.getMaintainer();
    if (f.length > 0) {
      writer.writeString(9, f);
    }
    f = message.getOrderBy();
    if (f !== 0.0) {
      writer.writeEnum(10, f);
    }
    f = message.getOrderDirection();
    if (f !== 0.0) {
      writer.writeEnum(11, f);
    }
    f = message.getSearchKeyword();
    if (f.length > 0) {
      writer.writeString(12, f);
    }
    f = message.getArchived();
    if (f != null) {
      writer.writeMessage(
        13,
        f,
        google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
      );
    }
    f = message.getStatusesList();
    if (f.length > 0) {
      writer.writePackedEnum(14, f);
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(15, f);
    }
  };

/**
 * @enum {number}
 */
proto.bucketeer.experiment.ListExperimentsRequest.OrderBy = {
  DEFAULT: 0,
  NAME: 1,
  CREATED_AT: 2,
  UPDATED_AT: 3,
  START_AT: 4,
  STOP_AT: 5,
  STATUS: 6,
  GOALS_COUNT: 7
};

/**
 * @enum {number}
 */
proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection = {
  ASC: 0,
  DESC: 1
};

/**
 * optional string feature_id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getFeatureId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setFeatureId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional google.protobuf.Int32Value feature_version = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getFeatureVersion =
  function () {
    return /** @type{?proto.google.protobuf.Int32Value} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.Int32Value,
        2
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setFeatureVersion =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.clearFeatureVersion =
  function () {
    return this.setFeatureVersion(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.hasFeatureVersion =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional int64 start_at = 3;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getStartAt =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setStartAt =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * optional int64 stop_at = 4;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getStopAt =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setStopAt =
  function (value) {
    return jspb.Message.setProto3IntField(this, 4, value);
  };

/**
 * optional int64 page_size = 5;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getPageSize =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setPageSize =
  function (value) {
    return jspb.Message.setProto3IntField(this, 5, value);
  };

/**
 * optional string cursor = 6;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getCursor =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 6, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setCursor =
  function (value) {
    return jspb.Message.setProto3StringField(this, 6, value);
  };

/**
 * optional string maintainer = 9;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getMaintainer =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 9, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setMaintainer =
  function (value) {
    return jspb.Message.setProto3StringField(this, 9, value);
  };

/**
 * optional OrderBy order_by = 10;
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest.OrderBy}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getOrderBy =
  function () {
    return /** @type {!proto.bucketeer.experiment.ListExperimentsRequest.OrderBy} */ (
      jspb.Message.getFieldWithDefault(this, 10, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.ListExperimentsRequest.OrderBy} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setOrderBy =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 10, value);
  };

/**
 * optional OrderDirection order_direction = 11;
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getOrderDirection =
  function () {
    return /** @type {!proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection} */ (
      jspb.Message.getFieldWithDefault(this, 11, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.ListExperimentsRequest.OrderDirection} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setOrderDirection =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 11, value);
  };

/**
 * optional string search_keyword = 12;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getSearchKeyword =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 12, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setSearchKeyword =
  function (value) {
    return jspb.Message.setProto3StringField(this, 12, value);
  };

/**
 * optional google.protobuf.BoolValue archived = 13;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getArchived =
  function () {
    return /** @type{?proto.google.protobuf.BoolValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.BoolValue,
        13
      )
    );
  };

/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setArchived =
  function (value) {
    return jspb.Message.setWrapperField(this, 13, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.clearArchived =
  function () {
    return this.setArchived(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.hasArchived =
  function () {
    return jspb.Message.getField(this, 13) != null;
  };

/**
 * repeated Experiment.Status statuses = 14;
 * @return {!Array<!proto.bucketeer.experiment.Experiment.Status>}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getStatusesList =
  function () {
    return /** @type {!Array<!proto.bucketeer.experiment.Experiment.Status>} */ (
      jspb.Message.getRepeatedField(this, 14)
    );
  };

/**
 * @param {!Array<!proto.bucketeer.experiment.Experiment.Status>} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setStatusesList =
  function (value) {
    return jspb.Message.setField(this, 14, value || []);
  };

/**
 * @param {!proto.bucketeer.experiment.Experiment.Status} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.addStatuses =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.clearStatusesList =
  function () {
    return this.setStatusesList([]);
  };

/**
 * optional string environment_id = 15;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 15, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsRequest} returns this
 */
proto.bucketeer.experiment.ListExperimentsRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 15, value);
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.experiment.ListExperimentsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ListExperimentsResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.ListExperimentsResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ListExperimentsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ListExperimentsResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        experimentsList: jspb.Message.toObjectList(
          msg.getExperimentsList(),
          proto_experiment_experiment_pb.Experiment.toObject,
          includeInstance
        ),
        cursor: jspb.Message.getFieldWithDefault(msg, 2, ''),
        totalCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
        summary:
          (f = msg.getSummary()) &&
          proto.bucketeer.experiment.ListExperimentsResponse.Summary.toObject(
            includeInstance,
            f
          )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse}
 */
proto.bucketeer.experiment.ListExperimentsResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.ListExperimentsResponse();
    return proto.bucketeer.experiment.ListExperimentsResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ListExperimentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse}
 */
proto.bucketeer.experiment.ListExperimentsResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_experiment_pb.Experiment();
          reader.readMessage(
            value,
            proto_experiment_experiment_pb.Experiment
              .deserializeBinaryFromReader
          );
          msg.addExperiments(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setCursor(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setTotalCount(value);
          break;
        case 4:
          var value =
            new proto.bucketeer.experiment.ListExperimentsResponse.Summary();
          reader.readMessage(
            value,
            proto.bucketeer.experiment.ListExperimentsResponse.Summary
              .deserializeBinaryFromReader
          );
          msg.setSummary(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ListExperimentsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ListExperimentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ListExperimentsResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getExperimentsList();
    if (f.length > 0) {
      writer.writeRepeatedMessage(
        1,
        f,
        proto_experiment_experiment_pb.Experiment.serializeBinaryToWriter
      );
    }
    f = message.getCursor();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getTotalCount();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
    f = message.getSummary();
    if (f != null) {
      writer.writeMessage(
        4,
        f,
        proto.bucketeer.experiment.ListExperimentsResponse.Summary
          .serializeBinaryToWriter
      );
    }
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.ListExperimentsResponse.Summary.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ListExperimentsResponse.Summary.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          totalWaitingCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
          totalRunningCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
          totalStoppedCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse.Summary}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.ListExperimentsResponse.Summary();
    return proto.bucketeer.experiment.ListExperimentsResponse.Summary.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse.Summary}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setTotalWaitingCount(value);
          break;
        case 2:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setTotalRunningCount(value);
          break;
        case 3:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setTotalStoppedCount(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ListExperimentsResponse.Summary.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getTotalWaitingCount();
    if (f !== 0) {
      writer.writeInt64(1, f);
    }
    f = message.getTotalRunningCount();
    if (f !== 0) {
      writer.writeInt64(2, f);
    }
    f = message.getTotalStoppedCount();
    if (f !== 0) {
      writer.writeInt64(3, f);
    }
  };

/**
 * optional int64 total_waiting_count = 1;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.getTotalWaitingCount =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.setTotalWaitingCount =
  function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
  };

/**
 * optional int64 total_running_count = 2;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.getTotalRunningCount =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.setTotalRunningCount =
  function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
  };

/**
 * optional int64 total_stopped_count = 3;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.getTotalStoppedCount =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse.Summary} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.Summary.prototype.setTotalStoppedCount =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * repeated Experiment experiments = 1;
 * @return {!Array<!proto.bucketeer.experiment.Experiment>}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.getExperimentsList =
  function () {
    return /** @type{!Array<!proto.bucketeer.experiment.Experiment>} */ (
      jspb.Message.getRepeatedWrapperField(
        this,
        proto_experiment_experiment_pb.Experiment,
        1
      )
    );
  };

/**
 * @param {!Array<!proto.bucketeer.experiment.Experiment>} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.setExperimentsList =
  function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
  };

/**
 * @param {!proto.bucketeer.experiment.Experiment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.experiment.Experiment}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.addExperiments =
  function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(
      this,
      1,
      opt_value,
      proto.bucketeer.experiment.Experiment,
      opt_index
    );
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.clearExperimentsList =
  function () {
    return this.setExperimentsList([]);
  };

/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.getCursor =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.setCursor =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional int64 total_count = 3;
 * @return {number}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.getTotalCount =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.setTotalCount =
  function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
  };

/**
 * optional Summary summary = 4;
 * @return {?proto.bucketeer.experiment.ListExperimentsResponse.Summary}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.getSummary =
  function () {
    return /** @type{?proto.bucketeer.experiment.ListExperimentsResponse.Summary} */ (
      jspb.Message.getWrapperField(
        this,
        proto.bucketeer.experiment.ListExperimentsResponse.Summary,
        4
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ListExperimentsResponse.Summary|undefined} value
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.setSummary =
  function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ListExperimentsResponse} returns this
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.clearSummary =
  function () {
    return this.setSummary(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ListExperimentsResponse.prototype.hasSummary =
  function () {
    return jspb.Message.getField(this, 4) != null;
  };

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bucketeer.experiment.CreateExperimentRequest.repeatedFields_ = [7];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.CreateExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.CreateExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.CreateExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.CreateExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.CreateExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 3, ''),
        featureId: jspb.Message.getFieldWithDefault(msg, 4, ''),
        startAt: jspb.Message.getFieldWithDefault(msg, 5, 0),
        stopAt: jspb.Message.getFieldWithDefault(msg, 6, 0),
        goalIdsList:
          (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
        name: jspb.Message.getFieldWithDefault(msg, 8, ''),
        description: jspb.Message.getFieldWithDefault(msg, 9, ''),
        baseVariationId: jspb.Message.getFieldWithDefault(msg, 10, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest}
 */
proto.bucketeer.experiment.CreateExperimentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.CreateExperimentRequest();
    return proto.bucketeer.experiment.CreateExperimentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.CreateExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest}
 */
proto.bucketeer.experiment.CreateExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_command_pb.CreateExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.CreateExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setFeatureId(value);
          break;
        case 5:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStartAt(value);
          break;
        case 6:
          var value = /** @type {number} */ (reader.readInt64());
          msg.setStopAt(value);
          break;
        case 7:
          var value = /** @type {string} */ (reader.readString());
          msg.addGoalIds(value);
          break;
        case 8:
          var value = /** @type {string} */ (reader.readString());
          msg.setName(value);
          break;
        case 9:
          var value = /** @type {string} */ (reader.readString());
          msg.setDescription(value);
          break;
        case 10:
          var value = /** @type {string} */ (reader.readString());
          msg.setBaseVariationId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.CreateExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.CreateExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.CreateExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_command_pb.CreateExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
    f = message.getFeatureId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
    f = message.getStartAt();
    if (f !== 0) {
      writer.writeInt64(5, f);
    }
    f = message.getStopAt();
    if (f !== 0) {
      writer.writeInt64(6, f);
    }
    f = message.getGoalIdsList();
    if (f.length > 0) {
      writer.writeRepeatedString(7, f);
    }
    f = message.getName();
    if (f.length > 0) {
      writer.writeString(8, f);
    }
    f = message.getDescription();
    if (f.length > 0) {
      writer.writeString(9, f);
    }
    f = message.getBaseVariationId();
    if (f.length > 0) {
      writer.writeString(10, f);
    }
  };

/**
 * optional CreateExperimentCommand command = 1;
 * @return {?proto.bucketeer.experiment.CreateExperimentCommand}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.CreateExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.CreateExperimentCommand,
        1
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.CreateExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

/**
 * optional string environment_id = 3;
 * @return {string}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

/**
 * optional string feature_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getFeatureId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setFeatureId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

/**
 * optional int64 start_at = 5;
 * @return {number}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getStartAt =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setStartAt =
  function (value) {
    return jspb.Message.setProto3IntField(this, 5, value);
  };

/**
 * optional int64 stop_at = 6;
 * @return {number}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getStopAt =
  function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
  };

/**
 * @param {number} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setStopAt =
  function (value) {
    return jspb.Message.setProto3IntField(this, 6, value);
  };

/**
 * repeated string goal_ids = 7;
 * @return {!Array<string>}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getGoalIdsList =
  function () {
    return /** @type {!Array<string>} */ (
      jspb.Message.getRepeatedField(this, 7)
    );
  };

/**
 * @param {!Array<string>} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setGoalIdsList =
  function (value) {
    return jspb.Message.setField(this, 7, value || []);
  };

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.addGoalIds =
  function (value, opt_index) {
    return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
  };

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.clearGoalIdsList =
  function () {
    return this.setGoalIdsList([]);
  };

/**
 * optional string name = 8;
 * @return {string}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getName =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 8, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setName =
  function (value) {
    return jspb.Message.setProto3StringField(this, 8, value);
  };

/**
 * optional string description = 9;
 * @return {string}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getDescription =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 9, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setDescription =
  function (value) {
    return jspb.Message.setProto3StringField(this, 9, value);
  };

/**
 * optional string base_variation_id = 10;
 * @return {string}
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.getBaseVariationId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 10, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.CreateExperimentRequest} returns this
 */
proto.bucketeer.experiment.CreateExperimentRequest.prototype.setBaseVariationId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 10, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.CreateExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.CreateExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.CreateExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.CreateExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        experiment:
          (f = msg.getExperiment()) &&
          proto_experiment_experiment_pb.Experiment.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.CreateExperimentResponse}
 */
proto.bucketeer.experiment.CreateExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.CreateExperimentResponse();
    return proto.bucketeer.experiment.CreateExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.CreateExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.CreateExperimentResponse}
 */
proto.bucketeer.experiment.CreateExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_experiment_pb.Experiment();
          reader.readMessage(
            value,
            proto_experiment_experiment_pb.Experiment
              .deserializeBinaryFromReader
          );
          msg.setExperiment(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.CreateExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.CreateExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.CreateExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.CreateExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getExperiment();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_experiment_pb.Experiment.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Experiment experiment = 1;
 * @return {?proto.bucketeer.experiment.Experiment}
 */
proto.bucketeer.experiment.CreateExperimentResponse.prototype.getExperiment =
  function () {
    return /** @type{?proto.bucketeer.experiment.Experiment} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_experiment_pb.Experiment,
        1
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.Experiment|undefined} value
 * @return {!proto.bucketeer.experiment.CreateExperimentResponse} returns this
 */
proto.bucketeer.experiment.CreateExperimentResponse.prototype.setExperiment =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.CreateExperimentResponse} returns this
 */
proto.bucketeer.experiment.CreateExperimentResponse.prototype.clearExperiment =
  function () {
    return this.setExperiment(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.CreateExperimentResponse.prototype.hasExperiment =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.UpdateExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.UpdateExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        changeExperimentPeriodCommand:
          (f = msg.getChangeExperimentPeriodCommand()) &&
          proto_experiment_command_pb.ChangeExperimentPeriodCommand.toObject(
            includeInstance,
            f
          ),
        changeNameCommand:
          (f = msg.getChangeNameCommand()) &&
          proto_experiment_command_pb.ChangeExperimentNameCommand.toObject(
            includeInstance,
            f
          ),
        changeDescriptionCommand:
          (f = msg.getChangeDescriptionCommand()) &&
          proto_experiment_command_pb.ChangeExperimentDescriptionCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 8, ''),
        name:
          (f = msg.getName()) &&
          google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
        description:
          (f = msg.getDescription()) &&
          google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
        startAt:
          (f = msg.getStartAt()) &&
          google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
        stopAt:
          (f = msg.getStopAt()) &&
          google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
        archived:
          (f = msg.getArchived()) &&
          google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
        status:
          (f = msg.getStatus()) &&
          proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.toObject(
            includeInstance,
            f
          )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.UpdateExperimentRequest();
    return proto.bucketeer.experiment.UpdateExperimentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.UpdateExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 5:
          var value =
            new proto_experiment_command_pb.ChangeExperimentPeriodCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ChangeExperimentPeriodCommand
              .deserializeBinaryFromReader
          );
          msg.setChangeExperimentPeriodCommand(value);
          break;
        case 6:
          var value =
            new proto_experiment_command_pb.ChangeExperimentNameCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ChangeExperimentNameCommand
              .deserializeBinaryFromReader
          );
          msg.setChangeNameCommand(value);
          break;
        case 7:
          var value =
            new proto_experiment_command_pb.ChangeExperimentDescriptionCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ChangeExperimentDescriptionCommand
              .deserializeBinaryFromReader
          );
          msg.setChangeDescriptionCommand(value);
          break;
        case 8:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        case 9:
          var value = new google_protobuf_wrappers_pb.StringValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader
          );
          msg.setName(value);
          break;
        case 10:
          var value = new google_protobuf_wrappers_pb.StringValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader
          );
          msg.setDescription(value);
          break;
        case 11:
          var value = new google_protobuf_wrappers_pb.Int64Value();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader
          );
          msg.setStartAt(value);
          break;
        case 12:
          var value = new google_protobuf_wrappers_pb.Int64Value();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader
          );
          msg.setStopAt(value);
          break;
        case 13:
          var value = new google_protobuf_wrappers_pb.BoolValue();
          reader.readMessage(
            value,
            google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader
          );
          msg.setArchived(value);
          break;
        case 14:
          var value =
            new proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus();
          reader.readMessage(
            value,
            proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus
              .deserializeBinaryFromReader
          );
          msg.setStatus(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.UpdateExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.UpdateExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.UpdateExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getChangeExperimentPeriodCommand();
    if (f != null) {
      writer.writeMessage(
        5,
        f,
        proto_experiment_command_pb.ChangeExperimentPeriodCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getChangeNameCommand();
    if (f != null) {
      writer.writeMessage(
        6,
        f,
        proto_experiment_command_pb.ChangeExperimentNameCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getChangeDescriptionCommand();
    if (f != null) {
      writer.writeMessage(
        7,
        f,
        proto_experiment_command_pb.ChangeExperimentDescriptionCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(8, f);
    }
    f = message.getName();
    if (f != null) {
      writer.writeMessage(
        9,
        f,
        google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
      );
    }
    f = message.getDescription();
    if (f != null) {
      writer.writeMessage(
        10,
        f,
        google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
      );
    }
    f = message.getStartAt();
    if (f != null) {
      writer.writeMessage(
        11,
        f,
        google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
      );
    }
    f = message.getStopAt();
    if (f != null) {
      writer.writeMessage(
        12,
        f,
        google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
      );
    }
    f = message.getArchived();
    if (f != null) {
      writer.writeMessage(
        13,
        f,
        google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
      );
    }
    f = message.getStatus();
    if (f != null) {
      writer.writeMessage(
        14,
        f,
        proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus
          .serializeBinaryToWriter
      );
    }
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.toObject =
    function (includeInstance, msg) {
      var f,
        obj = {
          status: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };

      if (includeInstance) {
        obj.$jspbMessageInstance = msg;
      }
      return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg =
      new proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus();
    return proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value =
            /** @type {!proto.bucketeer.experiment.Experiment.Status} */ (
              reader.readEnum()
            );
          msg.setStatus(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getStatus();
    if (f !== 0.0) {
      writer.writeEnum(1, f);
    }
  };

/**
 * optional Experiment.Status status = 1;
 * @return {!proto.bucketeer.experiment.Experiment.Status}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.prototype.getStatus =
  function () {
    return /** @type {!proto.bucketeer.experiment.Experiment.Status} */ (
      jspb.Message.getFieldWithDefault(this, 1, 0)
    );
  };

/**
 * @param {!proto.bucketeer.experiment.Experiment.Status} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus.prototype.setStatus =
  function (value) {
    return jspb.Message.setProto3EnumField(this, 1, value);
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional ChangeExperimentPeriodCommand change_experiment_period_command = 5;
 * @return {?proto.bucketeer.experiment.ChangeExperimentPeriodCommand}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getChangeExperimentPeriodCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ChangeExperimentPeriodCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ChangeExperimentPeriodCommand,
        5
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ChangeExperimentPeriodCommand|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setChangeExperimentPeriodCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 5, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearChangeExperimentPeriodCommand =
  function () {
    return this.setChangeExperimentPeriodCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasChangeExperimentPeriodCommand =
  function () {
    return jspb.Message.getField(this, 5) != null;
  };

/**
 * optional ChangeExperimentNameCommand change_name_command = 6;
 * @return {?proto.bucketeer.experiment.ChangeExperimentNameCommand}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getChangeNameCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ChangeExperimentNameCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ChangeExperimentNameCommand,
        6
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ChangeExperimentNameCommand|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setChangeNameCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 6, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearChangeNameCommand =
  function () {
    return this.setChangeNameCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasChangeNameCommand =
  function () {
    return jspb.Message.getField(this, 6) != null;
  };

/**
 * optional ChangeExperimentDescriptionCommand change_description_command = 7;
 * @return {?proto.bucketeer.experiment.ChangeExperimentDescriptionCommand}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getChangeDescriptionCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ChangeExperimentDescriptionCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ChangeExperimentDescriptionCommand,
        7
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ChangeExperimentDescriptionCommand|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setChangeDescriptionCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 7, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearChangeDescriptionCommand =
  function () {
    return this.setChangeDescriptionCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasChangeDescriptionCommand =
  function () {
    return jspb.Message.getField(this, 7) != null;
  };

/**
 * optional string environment_id = 8;
 * @return {string}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 8, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 8, value);
  };

/**
 * optional google.protobuf.StringValue name = 9;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getName =
  function () {
    return /** @type{?proto.google.protobuf.StringValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.StringValue,
        9
      )
    );
  };

/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setName =
  function (value) {
    return jspb.Message.setWrapperField(this, 9, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearName =
  function () {
    return this.setName(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasName =
  function () {
    return jspb.Message.getField(this, 9) != null;
  };

/**
 * optional google.protobuf.StringValue description = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getDescription =
  function () {
    return /** @type{?proto.google.protobuf.StringValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.StringValue,
        10
      )
    );
  };

/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setDescription =
  function (value) {
    return jspb.Message.setWrapperField(this, 10, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearDescription =
  function () {
    return this.setDescription(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasDescription =
  function () {
    return jspb.Message.getField(this, 10) != null;
  };

/**
 * optional google.protobuf.Int64Value start_at = 11;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getStartAt =
  function () {
    return /** @type{?proto.google.protobuf.Int64Value} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.Int64Value,
        11
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setStartAt =
  function (value) {
    return jspb.Message.setWrapperField(this, 11, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearStartAt =
  function () {
    return this.setStartAt(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasStartAt =
  function () {
    return jspb.Message.getField(this, 11) != null;
  };

/**
 * optional google.protobuf.Int64Value stop_at = 12;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getStopAt =
  function () {
    return /** @type{?proto.google.protobuf.Int64Value} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.Int64Value,
        12
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setStopAt =
  function (value) {
    return jspb.Message.setWrapperField(this, 12, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearStopAt =
  function () {
    return this.setStopAt(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasStopAt =
  function () {
    return jspb.Message.getField(this, 12) != null;
  };

/**
 * optional google.protobuf.BoolValue archived = 13;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getArchived =
  function () {
    return /** @type{?proto.google.protobuf.BoolValue} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_wrappers_pb.BoolValue,
        13
      )
    );
  };

/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setArchived =
  function (value) {
    return jspb.Message.setWrapperField(this, 13, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearArchived =
  function () {
    return this.setArchived(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasArchived =
  function () {
    return jspb.Message.getField(this, 13) != null;
  };

/**
 * optional UpdatedStatus status = 14;
 * @return {?proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.getStatus =
  function () {
    return /** @type{?proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus} */ (
      jspb.Message.getWrapperField(
        this,
        proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus,
        14
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.UpdateExperimentRequest.UpdatedStatus|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.setStatus =
  function (value) {
    return jspb.Message.setWrapperField(this, 14, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentRequest} returns this
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.clearStatus =
  function () {
    return this.setStatus(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentRequest.prototype.hasStatus =
  function () {
    return jspb.Message.getField(this, 14) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.UpdateExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.UpdateExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.UpdateExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.UpdateExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        experiment:
          (f = msg.getExperiment()) &&
          proto_experiment_experiment_pb.Experiment.toObject(includeInstance, f)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.UpdateExperimentResponse}
 */
proto.bucketeer.experiment.UpdateExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.UpdateExperimentResponse();
    return proto.bucketeer.experiment.UpdateExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.UpdateExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.UpdateExperimentResponse}
 */
proto.bucketeer.experiment.UpdateExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = new proto_experiment_experiment_pb.Experiment();
          reader.readMessage(
            value,
            proto_experiment_experiment_pb.Experiment
              .deserializeBinaryFromReader
          );
          msg.setExperiment(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.UpdateExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.UpdateExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.UpdateExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.UpdateExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getExperiment();
    if (f != null) {
      writer.writeMessage(
        1,
        f,
        proto_experiment_experiment_pb.Experiment.serializeBinaryToWriter
      );
    }
  };

/**
 * optional Experiment experiment = 1;
 * @return {?proto.bucketeer.experiment.Experiment}
 */
proto.bucketeer.experiment.UpdateExperimentResponse.prototype.getExperiment =
  function () {
    return /** @type{?proto.bucketeer.experiment.Experiment} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_experiment_pb.Experiment,
        1
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.Experiment|undefined} value
 * @return {!proto.bucketeer.experiment.UpdateExperimentResponse} returns this
 */
proto.bucketeer.experiment.UpdateExperimentResponse.prototype.setExperiment =
  function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.UpdateExperimentResponse} returns this
 */
proto.bucketeer.experiment.UpdateExperimentResponse.prototype.clearExperiment =
  function () {
    return this.setExperiment(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.UpdateExperimentResponse.prototype.hasExperiment =
  function () {
    return jspb.Message.getField(this, 1) != null;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.StartExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.StartExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.StartExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.StartExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 2, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.StartExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.StartExperimentRequest}
 */
proto.bucketeer.experiment.StartExperimentRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.StartExperimentRequest();
  return proto.bucketeer.experiment.StartExperimentRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.StartExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.StartExperimentRequest}
 */
proto.bucketeer.experiment.StartExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 3:
          var value = new proto_experiment_command_pb.StartExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.StartExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.StartExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.StartExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.StartExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        proto_experiment_command_pb.StartExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.getId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.StartExperimentRequest} returns this
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional StartExperimentCommand command = 3;
 * @return {?proto.bucketeer.experiment.StartExperimentCommand}
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.StartExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.StartExperimentCommand,
        3
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.StartExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.StartExperimentRequest} returns this
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.StartExperimentRequest} returns this
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.StartExperimentRequest} returns this
 */
proto.bucketeer.experiment.StartExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.StartExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.StartExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.StartExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.StartExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.StartExperimentResponse}
 */
proto.bucketeer.experiment.StartExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.StartExperimentResponse();
    return proto.bucketeer.experiment.StartExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.StartExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.StartExperimentResponse}
 */
proto.bucketeer.experiment.StartExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.StartExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.StartExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.StartExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.StartExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.FinishExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.FinishExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.FinishExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.FinishExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 2, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.FinishExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest}
 */
proto.bucketeer.experiment.FinishExperimentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.FinishExperimentRequest();
    return proto.bucketeer.experiment.FinishExperimentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.FinishExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest}
 */
proto.bucketeer.experiment.FinishExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 3:
          var value = new proto_experiment_command_pb.FinishExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.FinishExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.FinishExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.FinishExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.FinishExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        3,
        f,
        proto_experiment_command_pb.FinishExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 2;
 * @return {string}
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.getId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest} returns this
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional FinishExperimentCommand command = 3;
 * @return {?proto.bucketeer.experiment.FinishExperimentCommand}
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.FinishExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.FinishExperimentCommand,
        3
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.FinishExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest} returns this
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest} returns this
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 3) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.FinishExperimentRequest} returns this
 */
proto.bucketeer.experiment.FinishExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.FinishExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.FinishExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.FinishExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.FinishExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.FinishExperimentResponse}
 */
proto.bucketeer.experiment.FinishExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.FinishExperimentResponse();
    return proto.bucketeer.experiment.FinishExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.FinishExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.FinishExperimentResponse}
 */
proto.bucketeer.experiment.FinishExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.FinishExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.FinishExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.FinishExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.FinishExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.StopExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.StopExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.StopExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.StopExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.StopExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.StopExperimentRequest}
 */
proto.bucketeer.experiment.StopExperimentRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.StopExperimentRequest();
  return proto.bucketeer.experiment.StopExperimentRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.StopExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.StopExperimentRequest}
 */
proto.bucketeer.experiment.StopExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value = new proto_experiment_command_pb.StopExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.StopExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.StopExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.StopExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.StopExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.StopExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.getId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.StopExperimentRequest} returns this
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional StopExperimentCommand command = 2;
 * @return {?proto.bucketeer.experiment.StopExperimentCommand}
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.StopExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.StopExperimentCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.StopExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.StopExperimentRequest} returns this
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.StopExperimentRequest} returns this
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.StopExperimentRequest} returns this
 */
proto.bucketeer.experiment.StopExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.StopExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.StopExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.StopExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.StopExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.StopExperimentResponse}
 */
proto.bucketeer.experiment.StopExperimentResponse.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.experiment.StopExperimentResponse();
  return proto.bucketeer.experiment.StopExperimentResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.StopExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.StopExperimentResponse}
 */
proto.bucketeer.experiment.StopExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.StopExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.StopExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.StopExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.StopExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.ArchiveExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ArchiveExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ArchiveExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.ArchiveExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.ArchiveExperimentRequest();
    return proto.bucketeer.experiment.ArchiveExperimentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ArchiveExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value =
            new proto_experiment_command_pb.ArchiveExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.ArchiveExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ArchiveExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ArchiveExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.ArchiveExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.getId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest} returns this
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional ArchiveExperimentCommand command = 2;
 * @return {?proto.bucketeer.experiment.ArchiveExperimentCommand}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.ArchiveExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.ArchiveExperimentCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.ArchiveExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest} returns this
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest} returns this
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.ArchiveExperimentRequest} returns this
 */
proto.bucketeer.experiment.ArchiveExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.ArchiveExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.ArchiveExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.ArchiveExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.ArchiveExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.ArchiveExperimentResponse}
 */
proto.bucketeer.experiment.ArchiveExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.ArchiveExperimentResponse();
    return proto.bucketeer.experiment.ArchiveExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.ArchiveExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.ArchiveExperimentResponse}
 */
proto.bucketeer.experiment.ArchiveExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.ArchiveExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.ArchiveExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.ArchiveExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.ArchiveExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.DeleteExperimentRequest.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.DeleteExperimentRequest.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.DeleteExperimentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.DeleteExperimentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
        command:
          (f = msg.getCommand()) &&
          proto_experiment_command_pb.DeleteExperimentCommand.toObject(
            includeInstance,
            f
          ),
        environmentId: jspb.Message.getFieldWithDefault(msg, 4, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.DeleteExperimentRequest();
    return proto.bucketeer.experiment.DeleteExperimentRequest.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.DeleteExperimentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setId(value);
          break;
        case 2:
          var value = new proto_experiment_command_pb.DeleteExperimentCommand();
          reader.readMessage(
            value,
            proto_experiment_command_pb.DeleteExperimentCommand
              .deserializeBinaryFromReader
          );
          msg.setCommand(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setEnvironmentId(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.DeleteExperimentRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.DeleteExperimentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.DeleteExperimentRequest.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getCommand();
    if (f != null) {
      writer.writeMessage(
        2,
        f,
        proto_experiment_command_pb.DeleteExperimentCommand
          .serializeBinaryToWriter
      );
    }
    f = message.getEnvironmentId();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
  };

/**
 * optional string id = 1;
 * @return {string}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.getId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest} returns this
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.setId = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional DeleteExperimentCommand command = 2;
 * @return {?proto.bucketeer.experiment.DeleteExperimentCommand}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.getCommand =
  function () {
    return /** @type{?proto.bucketeer.experiment.DeleteExperimentCommand} */ (
      jspb.Message.getWrapperField(
        this,
        proto_experiment_command_pb.DeleteExperimentCommand,
        2
      )
    );
  };

/**
 * @param {?proto.bucketeer.experiment.DeleteExperimentCommand|undefined} value
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest} returns this
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.setCommand =
  function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest} returns this
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.clearCommand =
  function () {
    return this.setCommand(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.hasCommand =
  function () {
    return jspb.Message.getField(this, 2) != null;
  };

/**
 * optional string environment_id = 4;
 * @return {string}
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.getEnvironmentId =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, '')
    );
  };

/**
 * @param {string} value
 * @return {!proto.bucketeer.experiment.DeleteExperimentRequest} returns this
 */
proto.bucketeer.experiment.DeleteExperimentRequest.prototype.setEnvironmentId =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.bucketeer.experiment.DeleteExperimentResponse.prototype.toObject =
    function (opt_includeInstance) {
      return proto.bucketeer.experiment.DeleteExperimentResponse.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.experiment.DeleteExperimentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.experiment.DeleteExperimentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bucketeer.experiment.DeleteExperimentResponse}
 */
proto.bucketeer.experiment.DeleteExperimentResponse.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.bucketeer.experiment.DeleteExperimentResponse();
    return proto.bucketeer.experiment.DeleteExperimentResponse.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.experiment.DeleteExperimentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.experiment.DeleteExperimentResponse}
 */
proto.bucketeer.experiment.DeleteExperimentResponse.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bucketeer.experiment.DeleteExperimentResponse.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.bucketeer.experiment.DeleteExperimentResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.experiment.DeleteExperimentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.experiment.DeleteExperimentResponse.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
  };

goog.object.extend(exports, proto.bucketeer.experiment);
