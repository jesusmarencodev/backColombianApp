'use strict';
import express from 'express';
import sale from '../controllers/saleController';
//import {ensureAuth, verifySuperSu} from '../middlewares/autenticated';
let app = express();

//Route products
app.post('/sale/save', sale.save);


module.exports = app;