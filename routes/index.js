'use strict';

import express from 'express';
const app = express();

//Route master
app.use(require('./productRoute'));
app.use(require('./categoryRoute'));
app.use(require('./saleRoute'));



module.exports = app;
