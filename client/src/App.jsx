import { useState } from "react"
import Navbar from "./components/Navbar"
import TaskForm from "./components/task/TaskForm"
import TaskItem from "./components/task/TaskItem";

function App() {
  const [tasks, setTasks] = useState([
  {
    title: "Read Book 📖",
    description: "Finish reading chapter 3 of 'Deep Work'.",
    resourceLink: [],
    completed: true
  },
  {
    title: "Read Docs 📕",
    description: "Go through the ReactJS documentation on useEffect.",
    resourceLink: ["https://reactjs.org/docs/hooks-effect.html"],
    completed: false
  },
  {
    title: "Watch Tutorial 🎥",
    description: "Watch a YouTube tutorial on JavaScript basics.",
    resourceLink: ["https://www.youtube.com/watch?v=W6NZfCO5SIk","https://www.youtube.com/watch?v=W6NZfCO5SIk"],
    completed: false
  },
  {
    title: "Practice Coding 💻",
    description: "Solve 5 problems on LeetCode (Easy level).",
    resourceLink: ["https://leetcode.com/problemset/all/"],
    completed: false
  },
  {
    title: "Write Summary 📝",
    description: "Write a summary of today's learning in Notion.",
    resourceLink: [],
    completed: false
  }
]
);
  return (
    <section className="p-4">
      {/* header  */}
      <Navbar />
      <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full p-4 border border-gray-200 shadow rounded-xl my-12">
        <h2 className="text-xl font-bold text-center">Daily Tasks {"(2/5)"} </h2>
        {/* task add form  */}
        <TaskForm />
        {/* list tasks  */}
        {
          tasks?.map((task,index)=>(
         <TaskItem task={task} key={index}/>
          ))
        }

      </div>
    </section>
  )
}

export default App