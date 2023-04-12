import jwt from "jsonwebtoken";
import { student } from "../models/student.js";
import { company } from "../models/company.js";
import { admin } from "../models/admin.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  const data = req.body;
  data.password = await bcrypt.hash(data.password, 12);

  const role = req.params.role;

  if (data.email) {
    const checkEmailInStudent = await student.find({ email: data.email });
    const checkEmailInAdmin = await student.find({ email: data.email });
    const checkEmailInCompany = await student.find({ email: data.email });
    if (
      checkEmailInStudent.length > 0 ||
      checkEmailInAdmin.length > 0 ||
      checkEmailInCompany.length > 0
    ) {
      res.send("email already exists").status(400);
      return;
    }
  } else {
    res.send("please send the wmail for signing up ").status(400);
    return;
  }



  if (role == "admin") {
    console.log("hitting admin");
    try {
      const user = await admin(data);
      await user.save();
      console.log(user);
      const token = jwt.sign({ role: role, user: user._id }, "secret");

      res.status(200).send({ user, token });
    } catch (err) {
      console.log(err);
    }
  }
  if (role == "student") {
    console.log("hitting student");

    const user = await student(data);
    await user.save();
    const token = jwt.sign({ role: role, user: user._id }, "secret");
    const userObj = user.toObject(); // convert to plain JS object
    delete userObj.password;
    res.status(200).send({ userObj, token });
  }
  if (role == "company") {
    console.log("hitting company");
    const user = await company(data);
    await user.save();
    console.log(user);
    const token = jwt.sign({ role: role, user: user._id }, "secret");
    res.status(200).send({ user, token });
  }
};






async function sender(user,req,res) {
    console.log("hitting sender");
    const {password } = req.body;
    const role = req.params.role;
    if (!user) {
        console.log("user not found");
        res.status(400).send("user not found");return;}
        
      
      else {
        const verification = await bcrypt.compare(password, user.password);
        if (verification) {
            console.log("password verified");
          const token = jwt.sign({ role: role, user: user._id }, "secret");
          res.status(200).send({ user, token });
          
        } else {
            console.log("wrong password");
          res.status(400).send("wrong password");
         
        }
      }

    }




export const signIn = async (req, res) => {
  console.log("hitting signin");
  const { email} = req.body;
  
  const role = req.params.role;
  console.log(role);

  if (role == "admin") {
    const user = await admin.findOne({ email: email });
    sender(user,req,res)
    
  }
  else if (role == "student") {
    console.log("hitting student");
    const user = await student.findOne({ email: email });
    sender(user,req,res)
  }
  else if (role == "company") {
    const user = await company.findOne({ email: email });
    sender(user,req,res)
  }
  else{
        console.log("role not found");
        res.status(400).send("role not found");
        return;
  }
 
};
