import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true,
    },
    skills:{
        type:[String],
        required: true
    },
    github:{
        type: String,
        default: null
    },
    live:{
        type: String,
        default: null
    }
}, { timestamps: true });

export const Project = mongoose.model("Project", projectSchema);
