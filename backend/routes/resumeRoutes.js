const express = require("express");

// Import multer upload middleware
const upload = require("../middleware/uploadMiddleware");

// Import auth middleware
const authMiddleware = require("../middleware/authMiddleware");

// Import Resume model
const Resume = require("../models/Resume");

const router = express.Router();

// Upload resume and save data to MongoDB
router.post(
  "/upload",
  authMiddleware, // Check if user is authenticated
  upload.single("resume"), // Upload single file with field name "resume"
  async (req, res) => {
    try {
      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }

      console.log("REQ FILE:", req.file);
      console.log("REQ USER:", req.user);

      console.log("Before DB save");

      // Create a new resume record in database
      const newResume = await Resume.create({
        user: req.user._id, // Logged-in user ID from auth middleware
        fileName: req.file.filename, // Uploaded file name
        filePath: req.file.path, // Uploaded file path
      });

      console.log("After DB save:", newResume);

      // Send success response
      res.status(201).json({
        success: true,
        message: "Resume uploaded and saved successfully",
        resume: newResume,
      });
    } catch (error) {
      // Handle server error
      console.log("Resume Upload Error:", error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  },
);

// Get all resumes uploaded by logged-in-user

router.get("/my", authMiddleware, async (req, res) => {
  try {
    // Find resumes that belong to logged in user
    const resumes = await Resume.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    console.log("Logged in user:", req.user);
    console.log("Fetched resumes:", resumes);

    // send response with resume list
    res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });
  } catch (error) {
    // Log error for debugging
    console.log("Get ressumes error", error);

    // send server response
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
