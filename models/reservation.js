'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    reservationDate: DataTypes.DATE
  }, {});

  //una reservation tiene 1 usuario
  //si borro el usuario se borra la reservacion
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    //una reservation tiene 1 vestido
    //si borro el vestido se borra la reservacion
    Reservation.belongsTo(models.Dress, {
      onDelete: "CASCADE",
      //le tienes que pasar el vestido y el usuario para que se haga valida la reservacion
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reservation;
};