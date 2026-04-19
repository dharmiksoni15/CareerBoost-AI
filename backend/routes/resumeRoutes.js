const express=require("express");

const upload=require("../middleware/uploadMiddleware");
const authMiddleware=require("../middleware/authMiddleware");
const router=express.Router();

router.post("/upload",authMiddleware,upload.single("resume"),(req,res)=>{
    res.status(200).json({
        file:req.file,
    })
})

module.exports=router;