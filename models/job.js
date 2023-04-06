// here i will write the model fopr student who is appling for the company job 
import mongoose from "mongoose"
const jobSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true

    },
    companyId:{
        type: String,
        required: true
    },
    appplicants:{
        type: Array,
        default: []
    }
    ,
    createdAt:{
        type: Date,
        default: new Date()
    }
})


export const job = mongoose.model('job', jobSchema);