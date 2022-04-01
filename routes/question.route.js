/* eslint-disable camelcase */
const router = require('express').Router();

const { Question } = require('../db/models');

// router.post('/questions/:topic_id/:id', async (req, res) => {
//   const { id } = req.params;
//   const quiestionId = await Question.findByPk(Number(id) - 1);

//   if (req.body.answer === quiestionId.answer) {
//     return res.json({ message: 'Верно' });
//   }
//   return res.json({ message: 'Неверно' });
// });

router.get('/questions/:topic_id/:id', async (req, res) => {
  const { id, topic_id } = req.params;
  console.log(req.params);
  console.log(req.body);

  const questions = await Question.findAll({
    where: {
      topic_id,
    },
    offset: id - 1,
    limit: 1,
    raw: true,
  });
  // console.log(questions);
  const nextId = Number(id) + 1;
  res.render('questions', { questions: questions[0], nextId, topic_id });
});

router.post('/questions/:topic_id/:id', async (req, res) => {
  if (req.body.status) {
    console.log('GOOD =>', req.body);
    res.send('Что правда, то правда');
  } else {
    console.log('FALSE =>', req.body);
    res.send('Малыш, подумай еще');
  }
});

module.exports = router;
