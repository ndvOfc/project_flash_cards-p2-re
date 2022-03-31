const express = require("express");
const hbs = require("hbs");
const path = require("path");

const config = (app) => {
  app.set("view engine", "hbs");
  app.set("views", path.join(process.env.PWD, "views"));

  hbs.registerPartials(path.join(process.env.PWD, "views", "partials"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, "public")));
};

module.exports = config;
