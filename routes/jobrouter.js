import { Router } from 'express';
import {create,getjobbyid,getjobbycompanyid,applyjob} from "../controllers/jobcontroller.js";
import {verify} from "../middleware/jwtverify.js"

const jobRouter = Router();

jobRouter.post('/create',verify, create);
jobRouter.get("/get/:id",verify, getjobbyid);
jobRouter.get("/getbycompany/:id",verify, getjobbycompanyid);
jobRouter.patch("/apply/:id",verify, applyjob)



export default jobRouter;
