"use strict";
const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function() {
    // associations can be defined here
  };
  //va al template original del user y le pone el login
  //se le manda el password, del usuario actual (this user) agarra su password y la compara con la que le habiamos mandado
  User.prototype.login = function(password) {
    //bcrypt funciona con una promesa y la compara mientras se hace otra cosa
    return bcrypt.compareSync(password, this.password);
  };

  //hook antes de insertarlo en la base de datos, encripta la contrase;a y se crea el nuevo usuario
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
