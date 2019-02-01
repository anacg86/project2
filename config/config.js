const express = require("express");
//Bring in the handlebars middleware for express.
const expresshbs = require("express-handlebars");

//Bring all the contents form the /models
//directory and put it inside a global named
//models.
global.models = require("../models");

const passport = require("./passport");

const session = require("express-session");

module.exports = function(app) {
  //Tells the handlebars middleware
  //to create a new instance of the
  //view engine
  //defaultLayour: What our main layout
  //file will be called.
  //extname: The extension for our
  //handlebars files
  let hbs = expresshbs.create({
    defaultLayout: "main",
    extname: ".hbs"
  });

  //guarda la sesion para la aplicacion
  app.use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true
    })
  );
  //Tells our server to use handlebars as
  //our view engine and to expect the
  //handlebars files to be .hbs
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");

  //va a utilizar passport, initialize carga toda la configuracion, session es para q el servidor se acuerde quien es
  app.use(passport.initialize());
  app.use(passport.session());

  //que le llegue la info a express
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //Load our routes into the server
  require("./routes")(app);

  //Allow access to public folder
  app.use(express.static("public"));
};
