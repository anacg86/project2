var orm = require("../config/orm.js");

var dresses = {
  all: function(cb) {
    orm.all("dresses", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("dresses", [
      "nombre", "categoria", "talla", "inventario", "foto", "precio", "descripcion"
    ], [
      name, false
    ], cb);
  },
  
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("dresses", {
    }, condition, cb);
  }
};

module.exports = dresses;
