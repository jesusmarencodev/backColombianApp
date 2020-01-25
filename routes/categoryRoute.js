'use strict';
import express from 'express';
import category from '../controllers/categoryController';
//import {ensureAuth, verifySuperSu} from '../middlewares/autenticated';
let app = express();

//Route products
app.post('/category/save', category.save);


module.exports = app;