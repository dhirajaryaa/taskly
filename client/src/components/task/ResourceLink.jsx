import { IoIosLink } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function ResourceLink({ links, setLinks }) {
    // remove tags 
    function removeTag(index) {
        setLinks(prev => prev.splice(index, index));
    };
    // handle tag submit 
    function handleAddTag(e) {
        if (e.key === "Enter") {
            e.target.blur();
        }else if(e.key === " "){
            setLinks(prev=>([...prev,e.target.value.trim()]));
            e.target.value = ""
        }
    }
    return (
        <div className="border-2 rounded-xl p-2 border-gray-300 shadow-sm inline-flex flex-wrap gap-1 w-full">
            {/* link show  */}
            {
                links?.map((link, index) =>
                    <p key={index}
                        className="inline-flex text-xs max-w-38 w-full pl-2 pr-1 py-1 rounded-lg gap-1 items-center bg-violet-500/20 text-violet-600">
                        <IoIosLink size={16} />
                        <span className="truncate w-full overflow-hidden">{link}</span>
                        <button type="button" className="cursor-pointer" onClick={() => removeTag(index)}>
                            <RxCross2 size={16} />
                        </button>
                    </p>
                )
            }
            {/* link add  */}
            <input
                onKeyDown={(e) => handleAddTag(e)}
                type="text"
                placeholder="add more links"
                className="inline-block cursor-text outline-0 border-0 text-gray-500 text-sm"
            />
        </div>
    )
}

export default ResourceLink