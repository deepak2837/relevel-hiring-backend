import {jobs} from "../models/job.js";
import { constants } from "../constant/constant.js";



export const create = async(req,res) => {
    console.log(req.user)
    if(req.user.role==constants.COMPANY){
        try{
            // console.log(req.user);
            const data = req.body;
            data.companyId = req.user.user
            console.log(data);
            console.log("hello")
            const job = await jobs.create(data);
            
            res.status(200).send(job);
        }
        catch{
            res.status(400).send("error occured");
        }   
    }
    else{
        res.status(400).send("you are not allowed to create a job");
    }
}






export const getjobbyid = async(req,res) => {
    try{
        const job = await jobs.findById(req.params.id);
        res.status(200).send(job);
    }
    catch{
        res.status(400).send("error occured");
    }
}


export const getjobbycompanyid = async(req,res) => {
    console.log("hit")
    try{
        const job = await jobs.find({companyId:req.params.id});
        res.status(200).send(job);
    }
    catch{
        res.status(400).send("error occured");
    }
}
export const applyjob = async(req,res) => {
    
}