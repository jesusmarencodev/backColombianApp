'use strict';
import express from 'express';
import category from '../controllers/categoryController';
//import {ensureAuth, verifySuperSu} from '../middlewares/autenticated';
let app = express();

//Route products
app.post('/category/save', category.save);
app.post('/category/edit', category.edit);
app.get('/category/get', category.get);


module.exports = app;