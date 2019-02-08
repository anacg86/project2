var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the dresses - ADMIN & USER
  app.get("/api/dresses", function(req, res) {
    db.Dress.findAll({})
    .then(function(data){
      res.json(data)
    })
  });

  // GET route for returning dresses of a specific category - ADMIN & USER
  app.get("/api/dresses/category/:category", function(req,res){
    db.Dress.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(data){
      res.json(data)
    })
  })

  // GET route for retrieving a single dress - ADMIN & USER
app.get("/api/dresses/:id", function(req, res) {
    db.Dress.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // POST route for creating a new dress - only for ADMIN
  app.post("/api/dresses", function(req, res) {
    console.log(req.body);
    db.Dress.create({
      name: req.body.name,
      category: req.body.category,
      size: req.body.size,
      description: req.body.description,
      stock: req.body.stock,
      picture: req.body.picture,
      price: req.body.price
    }).then(function(data){
      res.json(data);
    })
  });

  // DELETE route for deleting dresses - only for ADMIN.
  app.delete("/api/dresses/:id", function(req, res) {
    db.Dress.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // PUT route for updating dresses - only for ADMIN.
  app.put("/api/edit", function(req, res) {
    db.Dress.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(data) {
      res.json(data);
    });
  });
};