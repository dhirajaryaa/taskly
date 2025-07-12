import Navbar from "./components/Navbar"
import TaskForm from "./components/task/TaskForm"

function App() {
  return (
    <section className="p-4">
      {/* header  */}
      <Navbar />
      <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full  border border-gray-200 shadow rounded-xl my-12">
        <h2 className="text-xl font-bold text-center mt-7">Daily Tasks {"(2/5)"} </h2>
        {/* task add form  */}
        <TaskForm />

      </div>
    </section>
  )
}

export default App