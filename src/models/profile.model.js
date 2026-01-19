import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim:true,
    lowercase: true
  },
  profileDescription:{
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  skills:{
    type: [String],
    required: true
  },
  workExperience:{
    type: String,
    enum: ["fresher","1 year","more than 1 year"],
    required: true,
  },
  links:{
    github:{
        type:String,
        default: null
    },
    linkedin:{
        type:String,
        default: null
    },
    portfolio:{
        type:String,
        default:null
    },
    resume:{
        type:String,
        default:null
    }
  },
}, { timestamps: true });

export const Profile = mongoose.model("Profile", profileSchema);
