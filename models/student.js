import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
    },
    role:{
        type: String,
        default: 'student'
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
        ,
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

export const student = mongoose.model('Student', studentSchema);
