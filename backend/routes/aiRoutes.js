const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const aiController = require("../controllers/aiController");

const router = express.Router();

// Debug (remove later if you want)
console.log("AUTH:", typeof authMiddleware);
console.log("TEST:", typeof aiController.testGemini);
console.log("ANALYZE:", typeof aiController.analyzeResume);

// Test Gemini route
router.get("/test", authMiddleware, aiController.testGemini);

// Analyze resume route
router.post("/analyze", authMiddleware, aiController.analyzeResume);

module.exports = router;