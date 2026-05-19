const Resume = require("../models/Resume");
const JobDescription = require("../models/JobDescription");

// Prepare analysis data
const prepareAnalysisData = async (req, res) => {
  try {
    // Get IDs from request body
    const { resumeId, jobDescriptionId } = req.body;

    // Validate IDs
    if (!resumeId || !jobDescriptionId) {
      return res.status(400).json({
        success: false,
        message: "Resume ID and Job Description ID are required",
      });
    }

    // Find resume of logged-in user
    const resume = await Resume.findOne({
      _id: resumeId,
      user: req.user._id,
    });

    // Resume not found
    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    // Find job description of logged-in user
    const jobDescription = await JobDescription.findOne({
      _id: jobDescriptionId,
      userId: req.user._id,
    });

    // Job description not found
    if (!jobDescription) {
      return res.status(404).json({
        success: false,
        message: "Job description not found",
      });
    }

    // Combine data
    const analysisInput = {
      userId: req.user._id,

      resume: {
        id: resume._id,
        fileName: resume.fileName,
        filePath: resume.filePath,
      },

      jobDescription: {
        id: jobDescription._id,
        jobTitle: jobDescription.jobTitle,
        description: jobDescription.description,
      },
    };

    // Send response
    return res.status(200).json({
      success: true,
      message: "Analysis data prepared successfully",
      analysisInput,
    });
  } catch (error) {
    console.log("Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  prepareAnalysisData,
};