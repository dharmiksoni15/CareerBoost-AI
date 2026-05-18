// Import Express framework
const express = require("express");

// Import CORS package
const cors = require("cors");

// Import dotenv package to use environment variables
const dotenv = require("dotenv");

// Import MongoDB connection function
const connectDB = require("./config/db");

// Import authentication routes
const authRoutes = require("./routes/authRoutes");

// Import resume routes
const resumeRoutes = require("./routes/resumeRoutes");

// Import job description routes
const jobDescriptionRoutes = require("./routes/jobDescriptionRoutes");

// Load environment variables from .env file
dotenv.config();

// Create Express application
const app = express();


// ==================== Middleware ====================

// Enable CORS so frontend can communicate with backend
app.use(cors());

// Parse incoming JSON request body
app.use(express.json());


// ==================== Database Connection ====================

// Connect backend server to MongoDB database
connectDB();


// ==================== Routes ====================

// Authentication routes
// Base URL: /api/auth
app.use("/api/auth", authRoutes);

// Resume routes
// Base URL: /api/resume
app.use("/api/resume", resumeRoutes);

// Job description routes
// Base URL: /api/job-description
app.use("/api/job-description", jobDescriptionRoutes);


// ==================== Start Server ====================

// Use PORT from .env file or default to 5000
const PORT = process.env.PORT || 5000;

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});