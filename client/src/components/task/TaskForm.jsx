import { useRef, useState } from "react"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ResourceLink from "./ResourceLink";


function TaskForm() {
    const [extended, setExtended] = useState(false);
    const [links, setLinks] = useState([
        "http://google.com",
        "http://youtube.com"
    ]);
    // handle task add 
    const formRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const title = formData.get("title");
        const description = formData.get("description");
        console.log(title,description);
        
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
            <div className={`flex gap-2 w-full my-6 px-4 ${extended ? "items-start" : "items-center"}`}>
                <button
                    onClick={() => setExtended(prev => !prev)}
                    type="button"
                    className="rounded-lg bg-gray-200 p-1 transition-all shadow duration-150 h-full">
                    {
                        extended ?
                            <IoIosArrowDown size={26} /> :
                            <IoIosArrowForward size={26} />
                    }
                </button>
                <div className="w-full h-auto flex gap-3 flex-col">
                    {/* title  */}
                    <input type="text"
                        name="title"
                        placeholder="Add new task"
                        className="border-2 rounded-xl w-full px-4 py-2 border-gray-300 shadow"
                    />
                    {extended &&
                        <>
                            {/* description  */}
                            <textarea type="text"
                                name="description"
                                placeholder="Add task description"
                                className="border-2 rounded-xl w-full px-4 py-2 border-gray-300 shadow"
                            />
                            {/* links list  */}
                            <ResourceLink links={links} setLinks={setLinks} />
                            {/* add button  */}
                            <button
                                type="submit"
                                className={`bg-violet-500 border-2 border-violet-400 text-white px-4 py-2 rounded-xl font-semibold hover:bg-violet-600 duration-200`}
                            >Add Task</button>
                        </>
                    }
                </div>
                {
                    !extended &&
                    <button
                        type="submit"
                        className={`bg-violet-500 border-2 border-violet-400 text-white px-4 py-2 rounded-xl font-semibold hover:bg-violet-600 duration-200`}
                    >Add</button>
                }
            </div>
        </form>
    )
}

export default TaskForm