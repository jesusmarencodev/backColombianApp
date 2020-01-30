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
    total: {
        type: Number,
        required: [true, 'The about is necesary']
    },
    items:[
        {
            product: {type:Schema.ObjectId, ref:'products', required:[true, 'The item is necesary']},
            quantity:Number
        },
    ],
});

module.exports = mongoose.model('sales', saleSchema);