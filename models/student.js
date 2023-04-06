//here i will write the model fopr student who is appling for the company job and


import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
       trim:true,
    },
    role:{
        type: String,
        defaultValue: 'Student'
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

export const student = mongoose.model('Student', studentSchema);