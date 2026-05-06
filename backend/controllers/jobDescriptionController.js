const JobDescription = require("../models/JobDescription");

const createJobDescription = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { companyName, jobTitle, description } = req.body || {};

    if (!companyName || !jobTitle || !description) {
      return res.status(400).json({
        success: false,
        message: "Company name, job title, and description are required",
        receivedBody: req.body,
      });
    }

    const jobDescription = await JobDescription.create({
      userId: req.user._id,
      companyName,
      jobTitle,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Job description saved successfully",
      jobDescription,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving job description",
      error: error.message,
    });
  }
};

const getMyJobDescriptions = async (req, res) => {
  try {
    const jobDescriptions = await JobDescription.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Job descriptions fetched successfully",
      count: jobDescriptions.length,
      jobDescriptions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching job descriptions",
      error: error.message,
    });
  }
};

module.exports = {
  createJobDescription,
  getMyJobDescriptions,
};