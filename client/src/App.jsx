import { useState } from "react"
import Navbar from "./components/Navbar"
import TaskForm from "./components/task/TaskForm"
import TaskItem from "./components/task/TaskItem";
import TaskPage from "./pages/TaskPage";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Read Book 📖",
      description: "",
      resourceLink: [],
      completed: true
    },
    {
      title: "Read Docs 📕",
      description: "Go through the ReactJS documentation on useEffect.",
      resourceLink: ["https://reactjs.org/docs/hooks-effect.html"],
      completed: true
    },
    {
      title: "Watch Tutorial 🎥",
      description: "Watch a YouTube tutorial on JavaScript basics.",
      resourceLink: ["https://www.youtube.com/watch?v=W6NZfCO5SIk",],
      completed: true
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  function handleTaskFilters(type) {
    switch (type) {
      case "completed":
        setActiveFilter("completed")
        setFilteredTasks(tasks.filter(task => task.completed));
        break;
      case "active":
        setActiveFilter("active")
        setFilteredTasks(tasks.filter(task => !task.completed));
        break;
      default:
        setActiveFilter("all");
        setFilteredTasks(tasks);
    }
  }

  return (
    <section className="p-4">
      {/* header  */}
      <Navbar />
      {/* task page  */}
      <TaskPage  handleTaskFilters={handleTaskFilters} totalTasks={totalTasks} completedTasks={completedTasks} activeFilter={activeFilter} filteredTasks={filteredTasks} />
    </section>
  )
}

export default App;