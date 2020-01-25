'use strict';
import categoryModel from '../models/categoryModel';
var controllers = {
	//controller that is responsible for creating a category
	save: (req, res) => {
		let body = req.body;
		if (body.code && body.name) {
			let categoty = new categoryModel();

			categoty.code = body.code;
			categoty.name = body.name;

			categoty
				.save()
				.then((categotyCreated) => {
					return res.status(200).json({ categotyCreated });
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
