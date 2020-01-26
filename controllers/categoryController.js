'use strict';
import categoryModel from '../models/categoryModel';
var controllers = {
	//controller that is responsible for creating a category
	save: (req, res) => {
		let body = req.body;
		if (body.code && body.name) {
			let category = new categoryModel();

			category.code = body.code;
			category.name = body.name;

			category
				.save()
				.then((categoryCreated) => {
					return res.status(200).json({ categoryCreated });
				})
				.catch((err) => {
					return res.status(404).json({ TheError: err });
				});
		}else{
			return res.status(400).json({message:"Complete the required fields"})
		}
	},
	//Controller responsible for obtaining all categories
	get:(req, res) =>{
		categoryModel.find({})
					.then((categories)=>{
						return res.status(200).json({ categories });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
	}
};
module.exports = controllers;
