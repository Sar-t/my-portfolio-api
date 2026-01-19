import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    issuer:{
        type:String,
        required:true,
    },
    issueDate:{
        type:Date,
        required:true,
    },
    expirationDate:{
        type:Date,
        default:null,
    },
    link:{
        type:String,
        required:true,
    },
});

export const Certificate = mongoose.model("Certificate", certificateSchema);