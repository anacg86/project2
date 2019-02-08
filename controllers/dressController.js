const express = require("express");
//Ask express to provide us with a new
//instance of it's router module.
const router = express.Router();


router.post("/api/dresses", function(req, res) {
    console.log(req.body);
    models.Dress.create({
      name: req.body.name,
      category: req.body.category,
      size: parseInt(req.body.size),
      description: req.body.description,
      stock: parseInt(req.body.stock),
      picture: req.body.picture,
      price: parseInt(req.body.price)
    })
      .then(function() {
        res.redirect(301, "/admin");
      })
  });
  
module.exports = router;