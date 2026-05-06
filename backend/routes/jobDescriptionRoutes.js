const express=require("express");

// import controller functions
const {createJobDescription,getMyJobDescriptions}=require("../controllers/jobDescriptionController");

const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();

// create job description route
// user must be logged in to access this route
router.post("/create",authMiddleware,createJobDescription);

// get logged user job description
// user must logged in to access this route
router.get("/my",authMiddleware,getMyJobDescriptions);

module.exports=router;
