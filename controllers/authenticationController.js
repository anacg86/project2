const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

//muestra el html del login
router.get("/login", function(req, res) {
  res.render("login.hbs", {});
});

//guarda rutas
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

router.get("/signup", function(req, res) {
  res.render("signup.hbs", {});
});
router.post("/signup", function(req, res) {
  console.log(req.body);
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/login");
    })
    .catch(function(err) {
      console.log(err);
      res.redirect("/signup");
    });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
module.exports = router;
