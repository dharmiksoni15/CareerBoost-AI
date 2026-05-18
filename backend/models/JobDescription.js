const mongoose = require("mongoose");

// Job Description Schema
const jobDescriptionSchema = new mongoose.Schema(
  {
    // Logged-in user id will be stored here
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Job role/title
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    // Full job description text
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create Model
const JobDescription = mongoose.model("JobDescription", jobDescriptionSchema);

module.exports = JobDescription;