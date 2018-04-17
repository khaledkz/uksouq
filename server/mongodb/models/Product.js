const mongoose = require('mongoose');
 const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    price:Number,
    brief:String,
    fullContent: String,
    visible: {
        type: Boolean,
        default: true,
    },
    language:{
        type:String,
        default:'En'
    },
    order:{
       type: Number,
       unique:false}
       
       
});

const Product = mongoose.model('product', schema);

module.exports = Product;