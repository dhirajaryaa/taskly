import express from 'express';
import cors from 'cors';
import { NODE_ENV, ORIGIN } from './config/config.js';

export const app = express();

//setup middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin : NODE_ENV === "development" ? true : ORIGIN,
    credentials: true,
}));

//! Router setup
import { taskRouter } from './routers/task.routes.js';
app.use("/api/v1/tasks",taskRouter);

//! error middlewares
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 400;
    const message = err.message || 'something went wrong!';
    console.log(err.name);
    
    return res.status(statusCode).json({
        code : statusCode,
        name : err.name,
        message,
        error : err.error,
        isError : err.isError,
        isSuccess : err.isSuccess
    })
})