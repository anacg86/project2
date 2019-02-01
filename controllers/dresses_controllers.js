var express = require("express");

var router = express.Router();
var dress = require("../models/dresses.js");

router.get("/", function(req, res) {
  res.redirect("/dresses");
});

router.get("/dresses", function(req, res) {
  burger.all(function(dressData) {
    res.render("index", { dress_data: dressData });
  });
});

router.post("/dresses/create", function(req, res) {
  burger.create(req.body.dresses_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/dresses/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;