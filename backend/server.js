const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env FIRST
dotenv.config();

// DB connection
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jobDescriptionRoutes = require("./routes/jobDescriptionRoutes");
const analysisRoutes = require("./routes/analysisRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DB CONNECT =================
connectDB();

// ================= TEST ROUTE =================
app.get("/test-server", (req, res) => {
  res.json({
    success: true,
    message: "Server is running correctly 🚀",
  });
});

// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/job-description", jobDescriptionRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/ai", aiRoutes);

// ================= DEBUG LOGS =================
console.log("✅ Routes loaded:");
console.log("- /api/auth");
console.log("- /api/resume");
console.log("- /api/job-description");
console.log("- /api/analysis");
console.log("- /api/ai");

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});