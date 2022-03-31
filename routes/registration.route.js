const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
// const auth = require('../middleware/authChecker');

router
  .route("/")
  .get((req, res) => {
    res.render("registration");
  })
  .post(async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const uniqueUser = await User.findOne({ where: { email } });
    if (uniqueUser) {
      res.sendStatus(404);
    } else {
      const newUser = await User.create({
        name: userName,
        email,
        password: hashedPassword,
      });
      res.sendStatus(200);
    }
  });

module.exports = router;
