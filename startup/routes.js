const express = require("express");
const home = require("../routes/home");
const jobs = require("../routes/jobs");
const users = require("../routes/users");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/api/jobs", jobs);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
