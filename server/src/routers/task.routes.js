import express from 'express';
import { createTask, getAllTasks, getTask, taskCompletedMark, taskMoveOnTrash, updateTask } from '../controllers/task.controller.js';

export const taskRouter = express.Router();

// create new task 
taskRouter.post("/",createTask);
// get all tasks
taskRouter.get("/",getAllTasks);
// get task
taskRouter.get("/:taskId",getTask);
// mark completed task
taskRouter.patch("/:taskId/complete",taskCompletedMark);
// update task
taskRouter.put("/:taskId",updateTask);
// trash move task
taskRouter.delete("/:taskId",taskMoveOnTrash);