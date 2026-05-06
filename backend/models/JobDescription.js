const mongoose=require("mongoose");

// Job Description Schema
const jobDesriptionSchema=new mongoose.Schema(
    {
        //Logged-in user id will be stored header
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },

        // company name
        companyName:{
            type:String,
            required:true,
            trim:true,
        },

        //Job role/title
        jobTitle:{
            type:String,
            required:true,
            trime:true
        },

        // Full Job Description Text
        description:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);

// create Model
const jobDesription=mongoose.model(
    "JobDescription",
    jobDesriptionSchema
);

module.exports=jobDesription;