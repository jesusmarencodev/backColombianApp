'use strict'; 
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
//Product models
let productSchema = new Schema({
    code:{
        type:String,
        required: [true, 'The description is necessary'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'The name is necessary']
    },
    about: {
        type: String,
        required: [true, 'The about is necesary']
    },
    category: {
        type: String,
        required: [true, 'The category is necesary']
    },
    img: {
        type: String,
        required: false
    },
    state: {
        type: Boolean,
        default: true
    },
    date:{
        type:Date, default: Date.now
    },
    price:{
        type:Number,
        require: [true, 'The price is necesary']
    },
    units:{
        type:Number,
        require: [true, 'The unit quantity is necesary']
    },
    category :{
        type:Schema.ObjectId,
        ref:'categories',
        required:[true, 'The category is necesary']
    },
});

module.exports = mongoose.model('products', productSchema);