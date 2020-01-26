'use strict';
import productModel from '../models/productModel';
var path = require('path');
import fs from 'fs';
var controllers = {
	//Controller that is responsible for creating a product
	save: (req, res) => {
		let body = req.body;
		if (body.code && body.name && body.about && body.category && body.price && body.units && body.category) {
			let product = new productModel();
			console.log(body);

			product.code = body.code;
			product.name = body.name;
			product.about = body.about;
			product.category = body.category;
			product.img = body.img;
			product.price = body.price;
			product.units = body.units;
			product.category = body.category;

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
	},
	//Controller responsible for obtaining all products
	get:(req, res) => {
		 productModel.find({})
		 			.populate('category')
					.then((products)=>{
						return res.status(200).json({ products });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
	},
	//Controller responsible for search  products
	search:(req, res) => {
		var searchString = req.params.search;
		console.log(searchString, "################");
		if(searchString){

			productModel.find({
				"$or": [
                    { "name": { "$regex": searchString, "$options": "i" } },
                    { "about": { "$regex": searchString, "$options": "i" } }
                ]
			})
			.sort([['date', 'descending']])
			.then((products) => {
				return res.status(200).json({ products });
			})
			.catch((err) => {
				return res.status(404).json({ TheError: err });
			});
		}else{

			productModel.find({})
					.then((products) => {
						return res.status(200).json({ products });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
        }
	}
};
module.exports = controllers;
