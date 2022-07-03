const express = require("express");
const home = require("../routers/home");
const jobs = require("../routers/jobs");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/api/jobs", jobs);
};
