import React from 'react'
import TaskForm from '../components/task/TaskForm'
import TaskItem from '../components/task/TaskItem'

function TaskPage({ handleTaskFilters, totalTasks, completedTasks, activeFilter, filteredTasks }) {
    return (
        <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full p-4 border border-gray-200 shadow rounded-xl my-12">
            <h2 className="text-xl font-bold text-center">Daily Tasks {`(${totalTasks - completedTasks}/${totalTasks})`} </h2>
            {/* task add form  */}
            <TaskForm />
            {/* filter btn  */}
            <div className="flex gap-3 items-center w-full sm:w-sm mx-auto mb-2">
                <button onClick={() => handleTaskFilters("all")} type="button" className={`p-1 font-semibold border-2 border-violet-500 rounded-lg text-sm w-full shadow-sm shadow-violet-400 cursor-pointer ${activeFilter === 'all' ? "bg-violet-500 text-white" : ""}`}>All {`(${totalTasks})`}</button>
                <button onClick={() => handleTaskFilters("active")} type="button" className={`p-1 font-semibold border-2 border-violet-500 rounded-lg text-sm w-full shadow-sm shadow-violet-400 cursor-pointer ${activeFilter === 'active' ? "bg-violet-500 text-white" : ""}`}>Active {`(${totalTasks - completedTasks})`}</button>
                <button onClick={() => handleTaskFilters("completed")} type="button" className={`p-1 font-semibold border-2 border-violet-500 rounded-lg text-sm w-full shadow-sm cursor-pointer shadow-violet-400 ${activeFilter === 'completed' ? "bg-violet-500 text-white" : ""}`}>Completed {`(${completedTasks})`}</button>
            </div>
            {/* list tasks  */}
            {
                filteredTasks?.map((task, index) => (
                    <TaskItem task={task} key={index} />
                ))
            }

        </div>
    )
}

export default TaskPage