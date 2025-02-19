/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.common.Aggregation', null, global);
goog.exportSymbol('proto.common.KeyEnvelope', null, global);
goog.exportSymbol('proto.common.Location', null, global);
goog.exportSymbol('proto.common.LocationSource', null, global);
goog.exportSymbol('proto.common.MType', null, global);
goog.exportSymbol('proto.common.MacVersion', null, global);
goog.exportSymbol('proto.common.Metric', null, global);
goog.exportSymbol('proto.common.MetricDataset', null, global);
goog.exportSymbol('proto.common.MetricKind', null, global);
goog.exportSymbol('proto.common.Modulation', null, global);
goog.exportSymbol('proto.common.RegParamsRevision', null, global);
goog.exportSymbol('proto.common.Region', null, global);

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
proto.common.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.Location.displayName = 'proto.common.Location';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Location} msg The msg instance to transform.
 * @return {!Object}
 */
proto.common.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: msg.getLatitude(),
    longitude: msg.getLongitude(),
    altitude: msg.getAltitude(),
    source: msg.getSource(),
    accuracy: msg.getAccuracy()
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
 * @return {!proto.common.Location}
 */
proto.common.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Location;
  return proto.common.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Location}
 */
proto.common.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAltitude(value);
      break;
    case 4:
      var value = /** @type {!proto.common.LocationSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccuracy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.common.Location} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.Location.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.Location.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = this.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = this.getAltitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = this.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = this.getAccuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.common.Location} The clone.
 */
proto.common.Location.prototype.cloneMessage = function() {
  return /** @type {!proto.common.Location} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.common.Location.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.common.Location.prototype.setLatitude = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.common.Location.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.common.Location.prototype.setLongitude = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double altitude = 3;
 * @return {number}
 */
proto.common.Location.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.common.Location.prototype.setAltitude = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional LocationSource source = 4;
 * @return {!proto.common.LocationSource}
 */
proto.common.Location.prototype.getSource = function() {
  return /** @type {!proto.common.LocationSource} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {!proto.common.LocationSource} value  */
proto.common.Location.prototype.setSource = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional float accuracy = 5;
 * @return {number}
 */
proto.common.Location.prototype.getAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.common.Location.prototype.setAccuracy = function(value) {
  jspb.Message.setField(this, 5, value);
};



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
proto.common.KeyEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.KeyEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.KeyEnvelope.displayName = 'proto.common.KeyEnvelope';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.KeyEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.common.KeyEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.KeyEnvelope} msg The msg instance to transform.
 * @return {!Object}
 */
proto.common.KeyEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    kekLabel: msg.getKekLabel(),
    aesKey: msg.getAesKey_asB64()
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
 * @return {!proto.common.KeyEnvelope}
 */
proto.common.KeyEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.KeyEnvelope;
  return proto.common.KeyEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.KeyEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.KeyEnvelope}
 */
proto.common.KeyEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKekLabel(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAesKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.common.KeyEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.KeyEnvelope.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.KeyEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.KeyEnvelope.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKekLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getAesKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.common.KeyEnvelope} The clone.
 */
proto.common.KeyEnvelope.prototype.cloneMessage = function() {
  return /** @type {!proto.common.KeyEnvelope} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string kek_label = 1;
 * @return {string}
 */
proto.common.KeyEnvelope.prototype.getKekLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.common.KeyEnvelope.prototype.setKekLabel = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes aes_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.common.KeyEnvelope.prototype.getAesKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes aes_key = 2;
 * This is a type-conversion wrapper around `getAesKey()`
 * @return {string}
 */
proto.common.KeyEnvelope.prototype.getAesKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAesKey()));
};


/**
 * optional bytes aes_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAesKey()`
 * @return {!Uint8Array}
 */
proto.common.KeyEnvelope.prototype.getAesKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAesKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.common.KeyEnvelope.prototype.setAesKey = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.common.Metric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.Metric.repeatedFields_, null);
};
goog.inherits(proto.common.Metric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.Metric.displayName = 'proto.common.Metric';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.Metric.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.Metric.prototype.toObject = function(opt_includeInstance) {
  return proto.common.Metric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.Metric} msg The msg instance to transform.
 * @return {!Object}
 */
proto.common.Metric.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    timestampsList: jspb.Message.toObjectList(msg.getTimestampsList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance),
    datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    proto.common.MetricDataset.toObject, includeInstance),
    kind: msg.getKind()
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
 * @return {!proto.common.Metric}
 */
proto.common.Metric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.Metric;
  return proto.common.Metric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.Metric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.Metric}
 */
proto.common.Metric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.getTimestampsList().push(value);
      msg.setTimestampsList(msg.getTimestampsList());
      break;
    case 3:
      var value = new proto.common.MetricDataset;
      reader.readMessage(value,proto.common.MetricDataset.deserializeBinaryFromReader);
      msg.getDatasetsList().push(value);
      msg.setDatasetsList(msg.getDatasetsList());
      break;
    case 4:
      var value = /** @type {!proto.common.MetricKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.common.Metric} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.Metric.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.Metric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.Metric.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTimestampsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.common.MetricDataset.serializeBinaryToWriter
    );
  }
  f = this.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.common.Metric} The clone.
 */
proto.common.Metric.prototype.cloneMessage = function() {
  return /** @type {!proto.common.Metric} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.common.Metric.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.common.Metric.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated google.protobuf.Timestamp timestamps = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Timestamp>}
 */
proto.common.Metric.prototype.getTimestampsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {Array.<!proto.google.protobuf.Timestamp>} value  */
proto.common.Metric.prototype.setTimestampsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.common.Metric.prototype.clearTimestampsList = function() {
  this.setTimestampsList([]);
};


/**
 * repeated MetricDataset datasets = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.common.MetricDataset>}
 */
proto.common.Metric.prototype.getDatasetsList = function() {
  return /** @type{!Array.<!proto.common.MetricDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.common.MetricDataset, 3));
};


/** @param {Array.<!proto.common.MetricDataset>} value  */
proto.common.Metric.prototype.setDatasetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.common.Metric.prototype.clearDatasetsList = function() {
  this.setDatasetsList([]);
};


/**
 * optional MetricKind kind = 4;
 * @return {!proto.common.MetricKind}
 */
proto.common.Metric.prototype.getKind = function() {
  return /** @type {!proto.common.MetricKind} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {!proto.common.MetricKind} value  */
proto.common.Metric.prototype.setKind = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.common.MetricDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.common.MetricDataset.repeatedFields_, null);
};
goog.inherits(proto.common.MetricDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.common.MetricDataset.displayName = 'proto.common.MetricDataset';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.common.MetricDataset.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.MetricDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.common.MetricDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.MetricDataset} msg The msg instance to transform.
 * @return {!Object}
 */
proto.common.MetricDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: msg.getLabel(),
    dataList: jspb.Message.getRepeatedFloatingPointField(msg, 2)
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
 * @return {!proto.common.MetricDataset}
 */
proto.common.MetricDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.MetricDataset;
  return proto.common.MetricDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.MetricDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.MetricDataset}
 */
proto.common.MetricDataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setDataList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.common.MetricDataset} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.MetricDataset.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.MetricDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.common.MetricDataset.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDataList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.common.MetricDataset} The clone.
 */
proto.common.MetricDataset.prototype.cloneMessage = function() {
  return /** @type {!proto.common.MetricDataset} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.common.MetricDataset.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.common.MetricDataset.prototype.setLabel = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated float data = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.common.MetricDataset.prototype.getDataList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {Array.<number>} value  */
proto.common.MetricDataset.prototype.setDataList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.common.MetricDataset.prototype.clearDataList = function() {
  jspb.Message.setField(this, 2, []);
};


/**
 * @enum {number}
 */
proto.common.Modulation = {
  LORA: 0,
  FSK: 1,
  LR_FHSS: 2
};

/**
 * @enum {number}
 */
proto.common.Region = {
  EU868: 0,
  US915: 2,
  CN779: 3,
  EU433: 4,
  AU915: 5,
  CN470: 6,
  AS923: 7,
  AS923_2: 12,
  AS923_3: 13,
  AS923_4: 14,
  KR920: 8,
  IN865: 9,
  RU864: 10,
  ISM2400: 11,
  KZ865: 15,
};

/**
 * @enum {number}
 */
proto.common.MType = {
  JOIN_REQUEST: 0,
  JOIN_ACCEPT: 1,
  UNCONFIRMED_DATA_UP: 2,
  UNCONFIRMED_DATA_DOWN: 3,
  CONFIRMED_DATA_UP: 4,
  CONFIRMED_DATA_DOWN: 5,
  REJOIN_REQUEST: 6,
  PROPRIETARY: 7
};

/**
 * @enum {number}
 */
proto.common.MacVersion = {
  LORAWAN_1_0_0: 0,
  LORAWAN_1_0_1: 1,
  LORAWAN_1_0_2: 2,
  LORAWAN_1_0_3: 3,
  LORAWAN_1_0_4: 4,
  LORAWAN_1_1_0: 5
};

/**
 * @enum {number}
 */
proto.common.RegParamsRevision = {
  A: 0,
  B: 1,
  RP002_1_0_0: 2,
  RP002_1_0_1: 3,
  RP002_1_0_2: 4,
  RP002_1_0_3: 5
};

/**
 * @enum {number}
 */
proto.common.LocationSource = {
  UNKNOWN: 0,
  GPS: 1,
  CONFIG: 2,
  GEO_RESOLVER_TDOA: 3,
  GEO_RESOLVER_RSSI: 4,
  GEO_RESOLVER_GNSS: 5,
  GEO_RESOLVER_WIFI: 6
};

/**
 * @enum {number}
 */
proto.common.Aggregation = {
  HOUR: 0,
  DAY: 1,
  MONTH: 2
};

/**
 * @enum {number}
 */
proto.common.MetricKind = {
  COUNTER: 0,
  ABSOLUTE: 1,
  GAUGE: 2
};

goog.object.extend(exports, proto.common);
