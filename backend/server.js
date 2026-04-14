const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("CareerBoost-AI backend is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});