'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/search', controller.search);

module.exports = router;