'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dress = sequelize.define('Dress', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Dress.associate = function(models) {
    Dress.hasMany(models.Reservation);
  };
  return Dress;
};