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
						if(!categories){
							return res.status(404).json({ message:'Not found results' });
						}
						return res.status(200).json({ categories });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
	},
	//Controller responsible for update all categories
	edit: async (req, res) =>{
		let body = req.body;
		let category = await categoryModel.findById({_id:body.id});
		category.name = body.name;
		category.save()
				.then((categoryUpdate)=>{
					if(!categoryUpdate) return res.status(404).json({message:'Not found results'})
					return res.status(200).json({categoryUpdate});
				})
				.catch((err)=> {
					return res.status(500).json({err})
				})
	}
};
module.exports = controllers;
