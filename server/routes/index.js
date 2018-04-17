var express = require('express');
var router = express.Router();
const dbClient = require('./../mongodb/dbclient/Product')

/* GET home page. */
router.get('/', function(req, res, next) {
  cb=()=>{
    res.render('index', { title: 'Express' });
  }
  dbClient.addProduct({title:'macbook pro',price:400},cb)
});

module.exports = router;
