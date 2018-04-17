const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    username: String     
});

const User = mongoose.model('user', schema);

module.exports = User;