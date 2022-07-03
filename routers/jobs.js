const { Job } = require("../models/job");
const express = require("express");
const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

// POST
router.post("/", async (req, res) => {
  let job = new Job({ title: req.body.title });
  job = await job.save();

  res.send(job);
});

module.exports = router;
