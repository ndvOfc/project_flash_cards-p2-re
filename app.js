const express = require("express");
const config = require("./config/config");
const mainRouter = require("./routes/main.route");
const registrationRouter = require("./routes/registration.route");

const app = express();

config(app);

app.use("/", mainRouter);
app.use("/registration", registrationRouter);

app.listen(3000, () => console.log("listen port 3000"));
