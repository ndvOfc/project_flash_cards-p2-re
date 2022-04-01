const express = require('express');
const config = require('./config/config');
const mainRouter = require('./routes/main.routes');
const questionRouter = require('./routes/question.route');
const loginRouter = require('./routes/login.routes');
const registrationRouter = require('./routes/registration.routes');

const app = express();

config(app);

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

app.use('/main', mainRouter);

app.use('/', questionRouter);

app.listen(3000, () => console.log('listen port 3000'));
