'use strict';
import express from 'express';
import sale from '../controllers/saleController';
let app = express();

//Route products POST
app.post('/sale/save', sale.save);
app.post('/sale/deleteItem/:id/:index', sale.deleteProduct);


//Route products GET
app.get('/sale/get/:id', sale.get);
app.get('/sale/getAll', sale.getAll);



module.exports = app;