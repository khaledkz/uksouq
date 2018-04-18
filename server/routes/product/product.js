var express = require("express");
var router = express.Router();
const productDB = require("../../mongodb/dbclient/Product");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("product/menu");
});
router.get("/edit", (req, res, next) => {
  res.render("product/searchMenu");
});
router.get("/add", (req, res, next) => {
  res.render("product/add");
});
router.post("/add", (req, res, next) => {
  cb = () => {
    return res.redirect("/product/edit/all");
  };
  productDB.addProduct(req.body, cb);
});
router.get("/edit/all", (req, res, next) => {
  cb = data => {
    res.render("product/list", { data });
  };
  productDB.findProduct(cb);
});
router.get("/edit/all/:id", (req, res, next) => {
  const { id } = req.params;
  cb = data => res.render("product/single", { data });
  productDB.findProductById(id, cb);
});
router.get("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  cb = () => res.redirect("/product/edit/all");
  productDB.removeProductById(id, cb);
});
router.get("/update/:id", (req, res, next) => {
  const { id } = req.params;
   cb = (data) => res.render("product/edit",{data});
   productDB.findProductById(id, cb);
});

module.exports = router;
