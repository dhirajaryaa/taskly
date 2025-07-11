import {AsyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import {ApiResponse} from '../utils/apiResponse.js';
import {taskModal} from '../models/task.model.js'

//? create task 
const createTask = AsyncHandler(async (req,res) => {
    const {
    title,
    description ,
    resourceLinks 
} = req.body ;
if(!title){
    throw new ApiError(400,"Task title is missing!")
};

const data = await taskModal.create({title,description,resourceLinks});

    return res.status(201).json(new ApiResponse(201,"task created 📝",data));
})


export {
    createTask
}