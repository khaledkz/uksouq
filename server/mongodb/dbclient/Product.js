require("../connection");
const Product = require("../models/Product");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const ProductDB = {
  addProduct: (query, callback) => {
    return Product.create(query).then(callback);
  },
  findProduct:(callback)=>{
      return Product.find({}).then(callback);
  }
};

module.exports = ProductDB;
