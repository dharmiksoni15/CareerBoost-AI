const mongoose = require("mongoose");

// Create schema for resume
const resumeSchema = new mongoose.Schema(
  {
    // Reference to the user who uploaded the resume
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Store uploaded file name
    fileName: {
      type: String,
      required: true,
    },

    // Store file path
    filePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Export model
module.exports = mongoose.model("Resume", resumeSchema);