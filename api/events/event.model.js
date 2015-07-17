'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var EventSchema = new Schema({
  name: String,
  tags: [String],
  state: String,
  city: String,
  address: String,
  position: { type: [Number], index: '2d' }, // use [ lng , lat ] format to be consistent with GeoJSON
  loc: { type: [Number], index: '2dsphere' }, // use [ lng , lat ] format to be consistent with GeoJSON
});

mongoose.model('Event', EventSchema);