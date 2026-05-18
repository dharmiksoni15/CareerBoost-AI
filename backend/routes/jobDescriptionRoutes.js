const express = require("express");

// Import controller function
const {
  createJobDescription,
} = require("../controllers/jobDescriptionController");

// Import authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Save job description route
// Only logged-in users can access this route
router.post("/create", authMiddleware, createJobDescription);

module.exports = router;