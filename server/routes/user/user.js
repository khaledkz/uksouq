var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/menu');
});

router.get('/edit', function(req, res, next) {
  res.render('user/searchMenu');
});

module.exports = router;
