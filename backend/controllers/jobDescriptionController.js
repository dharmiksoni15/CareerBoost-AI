const JobDescription = require("../models/JobDescription");

// Create and save job description
const createJobDescription = async (req, res) => {
  try {
    // Get data from request body
    const { jobTitle, description } = req.body || {};

    // Validate required fields
    if (!jobTitle || !description) {
      return res.status(400).json({
        success: false,
        message: "Job title and description are required",
      });
    }

    // Save job description in MongoDB with logged-in user ID
    const jobDescription = await JobDescription.create({
      userId: req.user._id,
      jobTitle,
      description,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Job description saved successfully",
      jobDescription,
    });
  } catch (error) {
    // Send server error response
    return res.status(500).json({
      success: false,
      message: "Error saving job description",
      error: error.message,
    });
  }
};

module.exports = {
  createJobDescription,
};