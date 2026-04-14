const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        res.status(200).json({
            success:true,
            message:"Register API is working",
            data:{
                name,
                email,
                password,
            },
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server Error",
        });
    }
};

module.exports={
    registerUser,
}