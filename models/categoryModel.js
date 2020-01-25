'use strict'; 
import mongoose from 'mongoose';

let Schema = mongoose.Schema;
//Category models
let categorySchema = new Schema({
    code:{
        type:String,
        required: [true, 'The description is necessary'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'The name is necessary']
    }
});

module.exports = mongoose.model('categories', categorySchema);