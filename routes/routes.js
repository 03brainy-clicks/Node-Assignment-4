const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

const userSList = [];

// routes
router.get("/users", (req, res, next) => {
  res.render("users", { userlist: userSList, path: req.route.path });
});

router.get("/", (req, res, next) => {
  res.render("home", { path: req.route.path });
});

router.post("/", (req, res, next) => {
  userSList.push({ name: req.body.user });
  console.log(userSList);
  res.redirect("/users");
});

module.exports = router;
