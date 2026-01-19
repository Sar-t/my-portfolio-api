import mongoose from "mongoose"

const workSchema = mongoose.Schema({
    role:{
        type:String,
        required:true,
    },
    organisation:{
        type:String,
        required:true,
    },
    empType:{
        type:String,
        enum:['Full-time','Part-time','Freelance','Internship'],
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    }, 
    endDate:{
        type:Date,
        default:null,
    },
    currentlyWorking:{
        type:Boolean,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    skills:{
        type:[String],
        required:true,
    }
}, { timestamps: true });

export const Work = mongoose.model("Work", workSchema);