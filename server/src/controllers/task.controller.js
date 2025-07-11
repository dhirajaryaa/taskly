import { AsyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { taskModal } from '../models/task.model.js'

//? create task 
const createTask = AsyncHandler(async (req, res) => {
    const {
        title,
        description,
        resourceLinks
    } = req.body;
    if (!title) {
        throw new ApiError(400, "Task title is missing!")
    };

    const data = await taskModal.create({ title, description, resourceLinks });

    return res.status(201).json(new ApiResponse(201, "task created 📝", data));
});

//? get all Tasks
const getAllTasks = AsyncHandler(async (req, res) => {
    const pageNo = parseInt(req.query.page || 1);
    const limit = parseInt(req.query.limit || 10);

    if (!(parseInt(pageNo) && parseInt(limit))) {
        throw new ApiError(400, "invalid type pageNo and limit");
    };
    const skip = (pageNo - 1) * limit;

    const tasks = await taskModal.find().skip(skip).limit(limit);
    if(!tasks){
        throw new ApiError(400,"task not found!");
    };
    const totalTasks = await taskModal.countDocuments();
    const totalPages = Math.ceil(totalTasks / limit);

    return res.status(200).json(
        new ApiResponse(200, "all Task fetched ✅",{
            tasks,
            totalTasks,
            totalPages
        })
    )
});


export {
    createTask,
    getAllTasks
}