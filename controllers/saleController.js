'use strict';
import saleModel from '../models/salesModel';
import productModel  from '../models/productModel';

const controllers = {
	//controller that is responsible for creating a sale
	save: async (req, res) => {
		 let body = req.body;

		 if (body.items){ 
		 
			let total = 0;
			let sale = new saleModel();
			let items = body.items;
			sale.invoice = String(new Date().getTime());

			//findind array products
			const products = await productModel.find({});

			//for --->items
			for (var index = 0; index < items.length; index++) {
				//for -->products
				for (var j = 0; j < products.length; j++) {

					if(items[index].product == products[j]._id){
						let product = await productModel.findById({_id:items[index].product});

						//updating product units
						product.units -=  items[index].quantity;
						product.save();

						items[index].state = undefined;

						total += parseInt(items[index].quantity) * parseFloat(products[j].price);
						sale.total = total;
						sale.items.push(items[index]);
									
						if(index  == items.length -1){

							sale.save()
							.then((result)=>{
								return res.status(200).json({result});
							})
							.catch((err)=>{
								return res.status(400).json({err});
							});
						}
					}
				}
			}
		} 
	},
	//Controller responsible for obtaining one sales
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
	//Controller responsible for obtaining all sales
	getAll:(req, res) => {
		saleModel.find({})
					.populate({path:'items.product', populate:{path:'product'}})
					.then((sales)=>{
						return res.status(200).json({ sales });
					})
					.catch((err) => {
						return res.status(404).json({ TheError: err });
					}); 
	},
   //Controller responsible for removing products from the shopping cart
	deleteProduct:(req, res) =>{
		const id = req.params.id;
		const index = parseInt(req.params.index);
		saleModel.findById({_id:id})
				.populate({path:'items.product', populate:{path:'product'}})
				.then((sale)=>{
					if(!sale) throw new Error(`Sale not found`)
					sale.items.splice( index, 1 )
					sale.save()
						.then((itemRemoved)=>{
							return res.status(200).json({ itemRemoved });
						})
				})
				.catch((err) => {
					return res.status(404).json({ TheError: err.message });
				});
	}

};
module.exports = controllers;
