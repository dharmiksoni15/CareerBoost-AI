const express = require("express");

// Import controller functions
const {
  createJobDescription,
  getMyJobDescriptions,
} = require("../controllers/jobDescriptionController");

// Import authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create job description route
// Only logged-in users can access this route
router.post("/create", authMiddleware, createJobDescription);

// Get logged-in user's job descriptions route
// Only logged-in users can access this route
router.get("/my", authMiddleware, getMyJobDescriptions);

// Export router
module.exports = router;