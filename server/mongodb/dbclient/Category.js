require('../connection')
const Category = require('../models/Category');
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;

const CategoryDb={

    addCategory:(query, callback)=>{
        return Category.create(query).then(callback)
    }
}

module.exports = CategoryDb;