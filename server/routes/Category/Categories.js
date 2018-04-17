var express = require("express");
var router = express.Router();
const CategoryDb = require("../../mongodb/dbclient/Category");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("category/menu");
});

router.get("/edit", function(req, res, next) {
  res.render("category/searchMenu");
});

router.get("/add", (req, res, next) => {
  res.render("category/add");
});

router.post("/add", (req, res, next) => {
  cb = () => res.redirect("/");
  CategoryDb.addCategory(req.body, cb);
});

router.get("/edit/all", (req, res, next) => {
  cb = data => {
    res.render("category/list", { data });
  };
  CategoryDb.findCategory(cb);
});

module.exports = router;
