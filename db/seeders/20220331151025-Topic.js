"use strict";
const fs = require("fs").promises;

module.exports = {
  async up(queryInterface, Sequelize) {
    const text = await fs.readFile("../public/src/Topics.txt", "utf-8");
    const res = text.trim().split("\n");
    for(let i = 0; i < res.length; i++){

      await queryInterface.bulkInsert(
        "Topics",
        [
          {
            // id: i,
            name: `${res[i]}`,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      }
        );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
