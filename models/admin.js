//here i will write the model fopr admin who is appling for the company job and


import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema({
    name:{
        type: String,
       trim:true,
    },
    role:{
        type: String,
        defaultValue: 'admin'
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
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

export const admin = mongoose.model('admin', adminSchema);