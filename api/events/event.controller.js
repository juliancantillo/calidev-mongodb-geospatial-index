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

function handleError(res, err) {
  return res.send(500, err);
}