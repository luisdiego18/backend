const _ = require("lodash");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
});

module.exports = router;
