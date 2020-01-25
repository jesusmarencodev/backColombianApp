'use strict'; 
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
//Product models
let saleSchema = new Schema({
    invoice:{
        type:String,
        required: [true, 'The description is necessary'],
        unique: true
    },
    buyer: {
        type: String,
        required: [true, 'The buyer is necessary']
    },
    total: {
        type: String,
        required: [true, 'The about is necesary']
    },
    items:[
        {
            product: {type:Schema.ObjectId, ref:'Products', required:[true, 'The item is necesary']},
            units:Number
        },
    ],
});

module.exports = mongoose.model('sales', saleSchema);