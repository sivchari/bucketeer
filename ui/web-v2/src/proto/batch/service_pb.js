// source: proto/batch/service.proto
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

goog.exportSymbol('proto.bucketeer.batch.BatchJob', null, global);
goog.exportSymbol('proto.bucketeer.batch.BatchJobRequest', null, global);
goog.exportSymbol('proto.bucketeer.batch.BatchJobResponse', null, global);
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
proto.bucketeer.batch.BatchJobRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.batch.BatchJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.batch.BatchJobRequest.displayName =
    'proto.bucketeer.batch.BatchJobRequest';
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
proto.bucketeer.batch.BatchJobResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bucketeer.batch.BatchJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bucketeer.batch.BatchJobResponse.displayName =
    'proto.bucketeer.batch.BatchJobResponse';
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
  proto.bucketeer.batch.BatchJobRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.batch.BatchJobRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.batch.BatchJobRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.batch.BatchJobRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        job: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bucketeer.batch.BatchJobRequest}
 */
proto.bucketeer.batch.BatchJobRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.batch.BatchJobRequest();
  return proto.bucketeer.batch.BatchJobRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.batch.BatchJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.batch.BatchJobRequest}
 */
proto.bucketeer.batch.BatchJobRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.bucketeer.batch.BatchJob} */ (
          reader.readEnum()
        );
        msg.setJob(value);
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
proto.bucketeer.batch.BatchJobRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.batch.BatchJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.batch.BatchJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.batch.BatchJobRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getJob();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional BatchJob job = 1;
 * @return {!proto.bucketeer.batch.BatchJob}
 */
proto.bucketeer.batch.BatchJobRequest.prototype.getJob = function () {
  return /** @type {!proto.bucketeer.batch.BatchJob} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/**
 * @param {!proto.bucketeer.batch.BatchJob} value
 * @return {!proto.bucketeer.batch.BatchJobRequest} returns this
 */
proto.bucketeer.batch.BatchJobRequest.prototype.setJob = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
  proto.bucketeer.batch.BatchJobResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.bucketeer.batch.BatchJobResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.bucketeer.batch.BatchJobResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.bucketeer.batch.BatchJobResponse.toObject = function (
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
 * @return {!proto.bucketeer.batch.BatchJobResponse}
 */
proto.bucketeer.batch.BatchJobResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bucketeer.batch.BatchJobResponse();
  return proto.bucketeer.batch.BatchJobResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bucketeer.batch.BatchJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bucketeer.batch.BatchJobResponse}
 */
proto.bucketeer.batch.BatchJobResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
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
proto.bucketeer.batch.BatchJobResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.bucketeer.batch.BatchJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bucketeer.batch.BatchJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bucketeer.batch.BatchJobResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
};

/**
 * @enum {number}
 */
proto.bucketeer.batch.BatchJob = {
  EXPERIMENTSTATUSUPDATER: 0,
  EXPERIMENTRUNNINGWATCHER: 1,
  FEATURESTALEWATCHER: 2,
  MAUCOUNTWATCHER: 3,
  DATETIMEWATCHER: 4,
  EVENTCOUNTWATCHER: 5,
  DOMAINEVENTINFORMER: 6,
  REDISCOUNTERDELETER: 7,
  PROGRESSIVEROLLOUTWATCHER: 8,
  EXPERIMENTCALCULATOR: 9,
  MAUSUMMARIZER: 10,
  MAUPARTITIONDELETER: 11,
  MAUPARTITIONCREATOR: 12,
  FEATUREFLAGCACHER: 13,
  SEGMENTUSERCACHER: 14,
  APIKEYCACHER: 15,
  AUTOOPSRULESCACHER: 16,
  EXPERIMENTCACHER: 17,
  TAGDELETER: 18
};

goog.object.extend(exports, proto.bucketeer.batch);
