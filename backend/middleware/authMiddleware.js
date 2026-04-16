const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleWare = async (req, res, next) => {
  try {
    // Get Token from header

    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
      return res.status(401).json({
        success:false,
        message: "No Token provided",
      });
    }

    // Extract token
    const token=authHeader.split(" ")[1];

    // verify token
    const decoded=jwt.verify(token,process.env.JWT_SECRET);

    // Get usser from DB
    const user=await User.findById(decoded.id).select("-password");

    if(!user){
      return res.status(401).json({
        success:false,
        message:"User Not Found",
      });
    }

    // Attach user to request
    req.user=user;
    next();
  } catch (error) {}
};

module.exports = authMiddleWare;