const User = require("../models/User");

const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        // check required fields 
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"all fields are required",
            });
        }

        // check if user already exists
        const existingUser=await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists with this email",
            });
        }

        // create a new user
        const newUser=await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            success:true,
            message:"User Registered Succesfully",
            user:{
               id:newUser._id,
               name:newUser.name,
               email:newUser.email,
            },
        });
    } catch (error) {
        console.log("Register Error",error);
        
        res.status(500).json({
            success:false,
            message:"server Error",
        });
    };
};

module.exports={
    registerUser,
}