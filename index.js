import express from 'express';
import bodyParser from 'body-parser';
import { Router } from 'express';
import mongoose from 'mongoose';

import authrouter from './routes/authrouter.js';

import jobrouter from './routes/jobrouter.js';
import userRouter from './routes/userrouter.js';
const router = Router()

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use("/auth",authrouter)
//now i will connect to  ongo db 
mongoose.connect('mongodb://localhost:27017/relevel-hiring-backend', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

    router.get('/', (req, res) => {
        res.send('Hello World');
    }   );
app.use('/users', authrouter);
app.use('/job', jobrouter);
app.use("/details",userRouter)


app.listen(8000, () => console.log('Server running on port 8000'));