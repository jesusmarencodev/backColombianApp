"use strict";
import express from "express";
import product from "../controllers/productController";
import { ensureAuth, verifySuperSu } from "../middlewares/autenticated";

const fileUpload = require("express-fileupload");
let app = express();

//Route products

app.get("/product/get", product.get);
app.get("/product/:id", product.getOne);
app.get("/product/search/products/:search?", product.search);
app.get("/product/category/:id", product.category);


app.post("/product/save", product.save);
app.post("/product/edit", product.update);
app.use(fileUpload());
app.post("/product/upload/:_id", product.upload);

module.exports = app;
