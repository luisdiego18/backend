const mongoose = require("mongoose");

// Schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

// Model
const Job = mongoose.model("Job", jobSchema);

// Joi Validation

exports.Job = Job;
