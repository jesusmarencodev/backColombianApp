'use strict';
import express from 'express';
const app = express();
//Route master
app.use(require('./prueba'));
app.use(require('./productRoute'));



module.exports = app;
