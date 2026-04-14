const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Hash Password

    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user with hashedPassword
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Succesfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Register Error", error);

    res.status(500).json({
      success: false,
      message: "server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // check if user Exists

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare entered password with hashed password
    const isPasswordMatched=await bcrypt.compare(
        password,
        existingUser.password
    );

    if(!isPasswordMatched){
        return res.status(400).json({
            success:false,
            message: "Invalid email or password",
        });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });

  } catch (error) {
    console.log("Login Error",error);

    res.status(500).json({
        success:false,
        message:"Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
