var express = require('express');
var mongoose = require('mongoose');


var app = express();

mongoose.connect('mongodb://localhost/calidev-dev', {
      db: {
        safe: true
      }
    });

require('./routes')(app);

app.get('/', function (req, res) {
  res.send('It\'s alive!');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Geomanzr app listening at http://%s:%s', host, port);
});

exports = module.exports = app;