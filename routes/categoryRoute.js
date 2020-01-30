'use strict';
import express from 'express';
import category from '../controllers/categoryController';
let app = express();


//Route category GET
app.get('/category/get', category.get);
app.get('/category/:id', category.getOne);
//Route category POST
app.post('/category/save', category.save);
app.post('/category/edit', category.edit);


module.exports = app;