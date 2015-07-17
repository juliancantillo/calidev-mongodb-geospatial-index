var express = require('express');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('It\'s alive!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Geomanzr app listening at http://%s:%s', host, port);
});

module.exports = server;