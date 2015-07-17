// Here we can create routes for our application

'use strict';

console.log('Routes loaded');

module.exports = function (app) {
  
  // Here you can add more routes
  app.use('/api/events', require('./api/events'));

}