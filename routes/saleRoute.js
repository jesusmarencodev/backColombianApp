'use strict';
import express from 'express';
import sale from '../controllers/saleController';
//import {ensureAuth, verifySuperSu} from '../middlewares/autenticated';
let app = express();

//Route products POST
app.post('/sale/save', sale.save);
app.post('/sale/deleteItem/:id/:index', sale.deleteProduct);


//Route products GET
app.get('/sale/get/:id', sale.get);


module.exports = app;