import { IoIosLink } from "react-icons/io";

function ResourceLink({links}) {
    return (
        <div className="border-2 rounded-xl p-2 border-gray-300 shadow inline-flex flex-wrap gap-1 w-full">
            {/* link show  */}
            {
                links?.map((link, index) =>
                    <p key={index}
                        className="inline-flex text-xs max-w-35 w-full px-2 py-1 rounded-lg gap-1 items-center bg-violet-500/20 text-violet-600"
                    ><IoIosLink size={16} /><span className="truncate w-full overflow-hidden">{link}</span>
                    </p>
                )
            }
            {/* link add  */}
            <input type="text"
            placeholder="add more links"
                className="inline-block cursor-text outline-0 border-0 text-gray-500 text-sm"
            />
        </div>
    )
}

export default ResourceLink