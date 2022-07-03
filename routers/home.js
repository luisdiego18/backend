const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.send("This is my Backend!");
});

module.exports = router;
