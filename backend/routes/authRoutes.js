const express=require("express");
const { registerUser } = require("../controllers/authController");

const router=express.Router();

router.get("/test",(req,res)=>{
    res.send("Auth Route is working");
});

router.post("/register",registerUser);

module.exports=router;