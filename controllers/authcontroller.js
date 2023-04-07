import jwt  from "jsonwebtoken";
import { student } from "../models/student.js";
import { company } from "../models/company.js";
import { admin } from "../models/admin.js";
import bcrypt from "bcryptjs";



export const signUp = async(req,res) => {
    const data  = req.body;
    data.password = await bcrypt.hash(data.password, 12);
    
    const role = req.params.role;
    if (role == "admin"){
console.log("hitting admin")
try{ const user = await admin(data)
    await user.save()
    console.log(user)
        const token = jwt.sign({role:role,user:user._id},"secret")

        res.status(200).send({user,token});

}
       catch(err){
           console.log(err)
       }


    }
    if (role=="student"){
        console.log("hitting student")
        
        const user = await student(data)
        await user.save()
        const token = jwt.sign({role:role,user:user._id},"secret")
        const userObj = user.toObject(); // convert to plain JS object
  delete userObj.password;
        res.status(200).send({userObj,token});

    }
    if (role=="company"){
        console.log("hitting company")
        const user = await company(data)
        await user.save()
        console.log(user)
            const token = jwt.sign({role:role,user:user._id},"secret")
        res.status(200).send({user,token});
        
    }

}
export const signIn = async (req, res) =>{
    console.log("hitting signup")
}