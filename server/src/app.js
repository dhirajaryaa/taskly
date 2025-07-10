import express from 'express';
import cors from 'cors';
import { NODE_ENV, ORIGIN } from './config/config.js';

export const app = express();

//setup middlewares 
app.use(cors({
    origin : NODE_ENV === "development" ? true : ORIGIN,
    credentials: true,
}));