'use strict';
import saleModel from '../models/salesModel';

const controllers = {
	//controller that is responsible for creating a sale
	save: (req, res) => {
        let body = req.body;
		if (body.buyer && body.items) {
			let sale = new saleModel();
            console.log(new Date().getTime());
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
					return res.status(404).json({ TheError: err });
				});
		}else{
			return res.status(400).json({message:"Complete the required fieldsq"})
		}
	}
};
module.exports = controllers;
