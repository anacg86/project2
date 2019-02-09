//Bring in our controller file into this one.
const applicationController = require("../controllers/applicationController");
const authenticationController = require("../controllers/authenticationController");
const dressController = require("../controllers/dressController");


//Let our file know that it should output a
//function that expects our server as a parameter
//and then adds the controllers one by one.
module.exports = function(app) {
  //Takes the routes inside of our controller
  //and puts them inside of our server, we
  //can do this as many times as we want.
  app.use(applicationController);
  app.use(authenticationController);
  app.use(dressController);

};
