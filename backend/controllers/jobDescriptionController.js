const JobDescription = require("../models/JobDescription");

// Create and save a new job description
const createJobDescription = async (req, res) => {
  try {
    // Get job title and description from request body
    const { jobTitle, description } = req.body || {};

    // Validate required fields
    if (!jobTitle || !description) {
      return res.status(400).json({
        success: false,
        message: "Job title and description are required",
      });
    }

    // Save job description with logged-in user's ID
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
    // Handle server error
    return res.status(500).json({
      success: false,
      message: "Error saving job description",
      error: error.message,
    });
  }
};

// Get all job descriptions saved by logged-in user
const getMyJobDescriptions = async (req, res) => {
  try {
    // Find job descriptions that belong to the logged-in user
    const jobDescriptions = await JobDescription.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    // Send success response with job descriptions list
    return res.status(200).json({
      success: true,
      message: "Job descriptions fetched successfully",
      count: jobDescriptions.length,
      jobDescriptions,
    });
  } catch (error) {
    // Handle server error
    return res.status(500).json({
      success: false,
      message: "Error fetching job descriptions",
      error: error.message,
    });
  }
};

// Export controller functions
module.exports = {
  createJobDescription,
  getMyJobDescriptions,
};