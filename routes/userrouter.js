import { Router } from 'express';
import {deleteuser,getuserbyid} from "../controllers/usercontroller.js";

import {verify} from "../middleware/jwtverify.js"

const userRouter = Router();

userRouter.post('/deleted/:id',verify, deleteuser);
userRouter.get("/get/:id",verify, getuserbyid);



export default userRouter;
