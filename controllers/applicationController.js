//Bring express into the file.
const express = require("express");
//Ask express to provide us with a new
//instance of it's router module.
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

//va a checar si estamos autenticados para darle el welcome
//A simple GET route
router.get("/", isAuthenticated, function(req, res) {
  //Using the handlebars view engine
  //we tell it to render the
  //welcome.hbs view, and give it
  //an object containing a key called
  //username with the value
  //'Your nice name' so that the view can
  //use it.
  res.render("welcome.hbs", {
    username: req.user.firstName
  });
});

//TEST ROUTE -- DELETE LATER
//We use this route to check if the relationship between user
//and dress is established correctly
router.get("/reservations", isAuthenticated, function(req, res) {
  models.User.findOne({
    where: {
      id: req.user.id
    },
    include: [ models.Reservation ]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

//Prepare the file to output our router.
module.exports = router;
