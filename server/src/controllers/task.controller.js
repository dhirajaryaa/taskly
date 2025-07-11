import {AsyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
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

    return res.status(201).json({"message":"task created 📝!",
        "data": data
    });
})


export {
    createTask
}