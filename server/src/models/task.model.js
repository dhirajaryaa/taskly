import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    title : 'String',
    description : 'String',
    link : 'String',
    image : 'String'
},{_id: false});

const taskSchema = new mongoose.Schema({
    title: {
        type: 'String',
        min: [5, "Task Title must be greater than 5 characters"],
        max: [100, "Task Title must be less than 100 characters"],
        unique: [true, "Task already present."],
        index: true,
        trim: true,
        required: [true, "Task Title is Required!"]
    },
    description: {
        type: "String",
        required : false,
        trim: true
    },
    resourceLinks : [linkSchema],
    isCompleted : {
        type: 'Boolean',
        default : false,
    },
    inTrash : {
         type: 'Boolean',
        default : false,
    },
    priority : {
        type : 'String',
        enum : ['high','medium','low','urgent'],
        default : 'low'
    }
}, { timestamps: true });

export const taskModal = mongoose.model("Task", taskSchema);