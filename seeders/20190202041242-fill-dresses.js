'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let dressesData = [];
    const sizes = [0, 2, 4, 6, 8, 10, 12, 14, 16];

    for (let i = 0; i < 50; i++) {
      let size = sizes[Math.floor(Math.random() * sizes.length)];

      const seedData = {
        name: "Vestido X",
        category: "Vestidos feos",
        size: size,
        description: "Algo",
        stock: Math.floor(Math.random() * 20),
        picture: "",
        price: (Math.random() * (5000 - 800) + 800)
      };
      dressesData.push(seedData);
    }

    return queryInterface.bulkInsert('Dresses', dressesData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dresses', null, {});
  }
};
