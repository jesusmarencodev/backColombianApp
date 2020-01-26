"use strict";
import express from "express";
import product from "../controllers/productController";
import { ensureAuth, verifySuperSu } from "../middlewares/autenticated";
var multipart = require("connect-multiparty");
var md_upload = multipart({ uploadDir: "./uploads/articles" });
var fileUpload = require("express-fileupload");
let app = express();

//Route products
app.post("/product/save", product.save);
app.get("/product/get", product.get);
app.get("/product/:id", product.getOne);
app.get("/product/search/products/:search?", product.search);

module.exports = app;
