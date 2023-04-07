//here i will write the model fopr company who is appling for the company job and


import mongoose from 'mongoose';
const companySchema = new mongoose.Schema({
    name:{
        type: String,
       trim:true,
    },
    companyname:{
        type: String,
        trim:true,
        required: true,
    }
    ,
    role:{
        type: String,
        default: 'company',
        
    },
    companyemail:{
        type: String,

        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()

    }


})

export const company = mongoose.model('company', companySchema);