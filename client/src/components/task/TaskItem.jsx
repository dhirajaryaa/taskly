import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";

function TaskItem({ task }) {
  return (
    <article className="w-full border-2 border-gray-200 rounded-lg p-2 flex gap-2 mb-2 items-center  justify-between group transition-all shadow duration-150 ">
      <div className="flex items-start gap-2 flex-1">
        {/* checkbox  */}
        <button type="button" className="size-">
          {task.completed ? <MdCheckBox size={25} className="text-green-500" /> : <MdOutlineCheckBoxOutlineBlank size={25} />}
        </button>
        <div className="flex flex-col gap-2justify-center">
        <h3 className="text-base font-semibold capitalize">{task.title}</h3>
        <p className="text-sm text-gray-700 -mt-1">{task.description || ""}</p>
        <div className="flex gap-2 items-center mt-1">
          {
                          task?.resourceLink?.map((link, index) =>
                              <a key={index} href={link} target="_blank"
                                  className="inline-flex text-xs transition-[max-width] duration-400 ease-in-out max-w-[9.5rem] hover:max-w-full bg-violet-500/20 text-violet-600 rounded-lg p-1 space-x-1">
                                  <IoIosLink size={16} />
                                  <span className="truncate w-full overflow-hidden">{link}</span>
                              </a>
                          )
                      }
        </div>
        </div>
      </div>
      <div className="flex gap-2">
        {/* edit button  */}
        <button type="button" className="group-hover:block hidden">
          <FiEdit size={18} />
        </button>
        {/* delete button  */}
        <button type="button" className="group-hover:block hidden ">
          <FiTrash2 size={18} />
        </button>

      </div>
    </article>

  )
}

export default TaskItem