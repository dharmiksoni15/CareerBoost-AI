const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");
const resumeRoutes=require("./routes/resumeRoutes");
dotenv.config();

const app = express();

connectDB();


app.get("/", (req, res) => {
  res.send("CareerBoost-AI backend is running...");
});
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/resume",resumeRoutes);

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});