require("../connection");
const User = require("../models/User");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const UserDB = {
  addUser: (query, callback) => {
    return User.create(query).then(callback);
  }
};

module.exports = UserDB;