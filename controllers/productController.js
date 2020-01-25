'use strict';
import productModel from '../models/productModel';
var path = require('path');
import fs from 'fs';
var controllers = {
	//controller that is responsible for creating a product
	save: (req, res) => {
		let body = req.body;
		if (body.code && body.name && body.about && body.category && body.price && body.units) {
			let product = new productModel();

			product.code = body.code;
			product.name = body.name;
			product.about = body.about;
			product.category = body.category;
			product.img = body.img;
			product.price = body.price;
			product.units = body.units;

			product
				.save()
				.then((productCreated) => {
					return res.status(200).json({ productCreated });
				})
				.catch((err) => {
					return res.status(404).json({ TheError: err });
				});
		}else{
			return res.status(400).json({message:"Complete the required fields"})
		}
	}
};
module.exports = controllers;
