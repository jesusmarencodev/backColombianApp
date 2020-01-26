'use strict';
import saleModel from '../models/salesModel';

const controllers = {
	//controller that is responsible for creating a sale
	save: (req, res) => {
        let body = req.body;
		if (body.buyer && body.items) {
			let sale = new saleModel();
			sale.invoice = String(new Date().getTime());
			sale.buyer = body.buyer;
			sale.total = 5000;
			sale.items = body.items;

			sale
				.save()
				.then((saleCreated) => {
					return res.status(200).json({ saleCreated });
				})
				.catch((err) => {
					return res.status(404).json({ TheError: err.message });
				});
		}else{
			return res.status(400).json({message:"Complete the required fields"})
		}
	},
	//Controller responsible for obtaining all sales
	get:(req, res) => {
		const id = req.params.id
		saleModel.findById({_id:id})
					.populate({path:'items.product', populate:{path:'product'}})
					.then((sales)=>{
						return res.status(200).json({ sales });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
   },

};
module.exports = controllers;
