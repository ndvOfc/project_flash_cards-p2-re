'use strict';
const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const text = await fs.readFile(path.join(process.env.PWD, 'public', 'src', 'topics.txt'), 'utf-8');
    const arr2 = text.trim().split('\n');
    const arr = [];
    for (let i = 0; i < arr2.length; i += 1) {
      const obj = {
        name: arr2[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      arr.push(obj);
    }

    await queryInterface.bulkInsert('Topics', arr, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
