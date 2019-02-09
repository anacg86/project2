require("dotenv").config();

//Bring the express package into this file and
//put it inside a variable named express.
const express = require("express");

const models = require("./models");

//The port for our express server.
const PORT = process.env.PORT || 8080;

//Create a new express server instance and put
//it inside a variable named app.
const app = express();

//Send our server into the configuration file
//to set it up.
require("./config/config.js")(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

/*if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}  else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'demonR3@lm',
    database: 'class_project'
  })
} */
//Tell sequelize to sync our models to our database
//this executes pending migrations if we have any.
//We use a .then() to make sure that our server won't
//start until the database is ready.
models.sequelize.sync(syncOptions).then(function() {
  console.log("\nDatabase ready \n");
  //Execute the listen method of the express server
  //instance, pass it the port we want for our server
  //and a callback function that should let us know
  //the server was able to start properly.
  require("./routes/api-routes.js")(app);

  app.listen(PORT, function() {
    console.log("Server is listening on port", PORT);
  });
});
