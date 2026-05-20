const express = require("express");

// Import auth middleware
const authMiddleware = require("../middleware/authMiddleware");

// Import AI controller
const { testGemini } = require("../controllers/aiController");

const router = express.Router();

// Test Gemini API connection
// Protected route: only logged-in users can test AI
router.get("/test", authMiddleware, testGemini);

module.exports = router;