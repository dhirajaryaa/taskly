import express from 'express';
import { createTask } from '../controllers/task.controller.js';

export const taskRouter = express.Router();

// create new task 
taskRouter.post("/",createTask);