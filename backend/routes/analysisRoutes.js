const express = require("express");

// Import authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// Import controller function
const {
  prepareAnalysisData,
} = require("../controllers/analysisController");

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.send("Analysis route working");
});

// Prepare analysis route
router.post("/prepare", authMiddleware, prepareAnalysisData);

module.exports = router;