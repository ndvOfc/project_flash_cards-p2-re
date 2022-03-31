const express = require("express");
const config = require("./config/config");

const app = express();

config(app);

app.listen(3000, () => console.log("listen port 3000"));

module.exports = app;
