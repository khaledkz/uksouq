require("../connection");
const Product = require("../models/Product");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const ProductDB = {
  addProduct: (query, callback) => {
    return Product.create(query).then(callback);
  },
  findProduct: callback => {
    return Product.find({}).then(callback);
  },
  findProductById: (id, callback) => {
    return Product.findById(id).then(callback);
  },
  removeProductById:(id,cb)=>{
    return Product.remove({_id:ObjectId(id)}).then(cb)
  },
  updateProduct:(id,query,cb)=>(
     Product.update({_id:ObjectId(id)},{$set: query}).then(cb)
  )
};

module.exports = ProductDB;
