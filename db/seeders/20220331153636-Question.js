'use strict';
const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const text = await fs.readFile(path.join(process.env.PWD, 'public', 'src', 'questions.txt'), 'utf-8');
    const arrOfArr = text.trim().split('\n').map((str) => str.split(','));
    const arr = [];
    for (let i = 0; i < arrOfArr.length; i += 1) {
      const obj = {
        question: arrOfArr[i][0],
        answer: Boolean(arrOfArr[i][1]),
        topic_id: Number(arrOfArr[i][2]),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      arr.push(obj);
    }

    await queryInterface.bulkInsert('Questions', arr, {});
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
