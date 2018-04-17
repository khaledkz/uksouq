const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: String     
});

const Category = mongoose.model('category', schema);

module.exports = Category;