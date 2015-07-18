'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var EventSchema = new Schema({
  name: String,
  tags: [String],
  location: {
    name: String,
    state: String,
    city: String,
    address: String,
    position: { type: [Number], index: '2d' }, // use [ lng , lat ] format to be consistent with GeoJSON
    geo: { type: [Number], index: '2dsphere' }, // use [ lng , lat ] format to be consistent with GeoJSON
  }
});

module.exports = mongoose.model('Event', EventSchema);