'use strict';
const bcrypt = require("bcrypt-nodejs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let password = bcrypt.hashSync(
      "123456",
      bcrypt.genSaltSync(10),
      null
    );

    const seedData = {
      firstName: "Test",
      lastName: "Test",
      email: "test@email.com",
      password: password,
    };

    return queryInterface.bulkInsert('Users', [seedData]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
