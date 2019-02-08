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
      res.redirect(200, "/admin");
    })
});



// ALL THE PRODUCTS IT SHOULD DISPLAY ALL THE PRODUCTS FROM DB
//lo que necesito poner de cada vestido va aqui
router.get("/dresses", function(req, res) {
  res.render("dresses",
  {
    collections: [
      [
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        }
      ],
      [
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        }
      ],
      [
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        },
        {
          name: "dress_1",
          description: "dress",
          image: "/assets/images/SequinStripeSleevelessWrapDress.jpg"
        }
      ]
    ]
  });
});

// DISPLAYIN BASE ON FILTER NEED TO COMPLETE THE FUNCTION

router.get("/dresses/:id", function(req, res) {
  res.render("dresses");
});

//SINGLE PRODUCT VIEW
router.get("/single", function(req, res) {
  res.render("single");
});


// PAYMENT : DISPLAY THE PRODUCT REQUERID
router.get("/payment", function(req, res) {
  res.render("payment");
});

//Prepare the file to output our router.
module.exports = router;
