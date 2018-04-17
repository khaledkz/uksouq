var express = require('express');
var router = express.Router();
const productDB=require('../../mongodb/dbclient/Product')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('product/menu');
});

router.get('/edit', (req, res, next) => {
  res.render('product/searchMenu');
});

router.get('/add', (req, res, next) => {
  res.render('product/add');
});


router.post('/add', (req, res, next) => {
  cb=()=>{
    return res.redirect('/')
  }
  productDB.addProduct(req.body,cb)
 });


module.exports = router;
