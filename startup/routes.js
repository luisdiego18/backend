const express = require("express");
const home = require("../routers/home");
const jobs = require("../routers/jobs");
const users = require("../routers/users");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/api/jobs", jobs);
  app.use("/api/users", users);
};
