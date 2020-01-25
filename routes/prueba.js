'use strict';
var express = require('express');
var PruebaController = require('../controllers/pruebaController');
let app = express();

app.get('/', PruebaController.prueba);


module.exports = app;