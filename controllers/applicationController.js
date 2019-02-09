//Bring express into the file.
const express = require("express");
//Ask express to provide us with a new
//instance of it's router module.
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");


//RUTA CAMBIADA
//va a checar si estamos autenticados para darle el welcome
//A simple GET route
router.get("/welcome", isAuthenticated, function(req, res) {
  console.log("TEST WELCOME");
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

// LOGIN
router.get("/login", function(req, res) {
  res.render("login");
});

// SIGN-UP
router.get("/sign-up", function(req, res) {
  res.render("sign-up");
});

// HOMEPAGE
router.get("/", function(req, res) {
  res.render("index");
});

// Admin page
router.get("/admin", function(req, res) {
  res.render("admin");
});

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
      res.redirect("/admin");
    })
});

// ALL THE PRODUCTS IT SHOULD DISPLAY ALL THE PRODUCTS FROM DB
//lo que necesito poner de cada vestido va aqui
router.get("/dresses", function(req, res) {
   models.Dress.findAll({
    attributes: ['id','name', 'price', 'picture']
  }).then(function(dbDress) {
    console.log(dbDress );
    res.render("dresses", {dresses: dbDress});
  });
});

// SINGLE CATEGORY VIEW

router.get("/dresses/:category", function(req, res) {
  models.Dress.findAll({ where: { 
    category: req.params.category } 
  }).then(function(dressCategory) {
    console.log(dressCategory);
    res.render("dresses", {dresses: dressCategory});
  });
});

//SINGLE PRODUCT VIEW
router.get("/dress/:id", function(req, res) {
  models.Dress.findOne({ where: { 
    id: req.params.id } 
  }).then(function(individualDress) {
    console.log("Individual Dress ID: " + individualDress);
    res.render("single", {dresses: individualDress});
  });
});


// PAYMENT : DISPLAY THE PRODUCT REQUERID
router.get("/payment", function(req, res) {
  res.render("payment");
});

//Prepare the file to output our router.
module.exports = router;
