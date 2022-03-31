const router = require("express").Router();

// router.get("/", (req, res) => res.redirect("/login"));

// router.get("/login", (req, res) => res.render("login"));

router.get("/", (req, res) => res.redirect("/registration"));

router.get("/registration", (req, res) => res.render("registration"));

module.exports = router;
