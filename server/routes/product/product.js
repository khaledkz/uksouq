var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('product/menu');
});

router.get('/edit', (req, res, next) => {
  res.render('product/searchMenu');
});

 

module.exports = router;
