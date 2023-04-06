import { Router } from 'express';
import { signUp, signIn } from '../controllers/authcontroller.js';

const authRouter = Router();

authRouter.post('/signin/:role', signIn);
authRouter.post('/signup/:role', signUp);

export default authRouter;
