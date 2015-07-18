'use strict';

var Event = require('./event.model');

// Get list of events
exports.index = function(req, res) {
  Event.find()
  .exec(function (err, events) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(events);
  });
};

// Creates a new event in the DB.
exports.create = function(req, res) {
  Event.create(req.body, function(err, event) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(event);
  });
};

// Creates a new event in the DB.
exports.search = function(req, res) {
  var geo = req.query.lat && req.query.lng ? [ req.query.lng, req.query.lat ] : false;
  
  // For distance calculation 
  // http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/
  var d = req.query.distance ? req.query.distance / 6378.137 : 1;
  
  if (!geo) {
    //If we don't provide a lng, lat pair fail
    return res.status(401).json({
      error: false,
      message: 'Lat and Lng required'
    });
  }

  geo = [ parseFloat(req.query.lng), parseFloat(req.query.lat) ];
  var position = { type:'Point', coordinates: geo };

  console.log(geo);

  Event.find({"location.geo": { $nearSphere: geo, $maxDistance: d  } }, {} ,function (err, events) {
    if(err) { return handleError(res, err); }

    res.status(200).json(events);
  });

};

function handleError(res, err) {
  return res.status(500).send(err);
}