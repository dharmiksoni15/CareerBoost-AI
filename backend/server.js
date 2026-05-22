const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jobDescriptionRoutes = require("./routes/jobDescriptionRoutes");
const analysisRoutes = require("./routes/analysisRoutes");
const aiRoutes = require("./routes/aiRoutes");
console.log("Ai Route Import",aiRoutes);

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/hello", (req, res) => {
  res.send("Hello route working");
});

app.get("/test-server", (req, res) => {
  res.send("Correct server is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/job-description", jobDescriptionRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/ai", aiRoutes);

console.log("Analysis routes mounted at /api/analysis");
console.log("AI routes mounted at /api/ai");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});