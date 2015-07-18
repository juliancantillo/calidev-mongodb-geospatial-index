'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/calidev-dev', {
      db: {
        safe: true
      }
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app.html');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Geomanzr app listening at http://%s:%s', host, port);
});

exports = module.exports = app;