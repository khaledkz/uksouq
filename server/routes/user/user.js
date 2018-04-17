var express = require("express");
var router = express.Router();
const UserDB = require("../../mongodb/dbclient/User");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("user/menu");
});

router.get("/edit", function(req, res, next) {
  res.render("user/searchMenu");
});

router.get("/add", (req, res, next) => {
  res.render("user/add");
});

router.post("/add", (req, res, next) => {
  cb = () => {
    res.redirect("/");
  };
  UserDB.addUser(req.body, cb);
});

router.get("/edit/all", (req, res, next) => {
  cb = data => {
    console.log(data);
    res.render("user/list", { data });
  };
  UserDB.findUser(cb);
});

module.exports = router;
