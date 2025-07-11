import { useState } from "react"
import { IoIosArrowForward, IoIosArrowDown, IoIosLink } from "react-icons/io";
import ResourceLink from "./ResourceLink";


function TaskForm() {
    const [extended, setExtended] = useState(true);
    const [links, setLinks] = useState([
        "http://google.com",
        "http://google.com",
        "http://google.com",
        "http://google.com dsfafasdfasdfasdfdsf",
        "http://google.com",
        "http://google.com",

    ]);
    return (
        <div className="flex items-start gap-2 w-full my-6 px-4">
            <button
                onClick={() => setExtended(prev => !prev)}
                type="button"
                className="rounded-lg bg-gray-200 p-1 transition-all shadow duration-150">
                {
                    extended ?
                        <IoIosArrowDown size={26} /> :
                        <IoIosArrowForward size={26} />
                }
            </button>
            <div className="w-full h-auto flex gap-3 flex-col">

                <input type="text"
                    placeholder="Add new task"
                    className="border-2 rounded-xl w-full px-4 py-2 border-gray-300 shadow"
                />
                {extended &&
                    <>
                        <textarea type="text"
                            placeholder="Add task description"
                            className="border-2 rounded-xl w-full px-4 py-2 border-gray-300 shadow"
                        />
                        <ResourceLink links={links}/>
                    </>
                }
            </div>

            <button
                type="submit"
                className="bg-violet-500 border-2 border-violet-400 text-white px-4 py-2 rounded-xl font-semibold"
            >Add</button>
        </div>
    )
}

export default TaskForm