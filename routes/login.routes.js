const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    res.render('login');
  });

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const user = await User.findOne({
    where: { email },
  });

  if (user) {
    // const passwordCheck = await bcrypt.compare(password, user.password);
    // if (passwordCheck) {
    req.session.user = user.name; // вроде правильно
    req.session.userId = user.userId; // вроде правильно
    res.sendStatus(200);
    // } else {
    res.sendStatus(400).json({ message: 'neOK' });
    // }
  } else {
    res.sendStatus(400).json({ message: 'neOK' });
  }
});

module.exports = router;
