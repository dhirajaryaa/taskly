import { MdLogout } from "react-icons/md";
import Avatar from "./Avatar";

function Navbar() {
    return (
        <header className='w-full h-26 p-4'>
            <nav className='p-2 sm:px-4 max-w-[1400px] w-full mx-auto border-violet-300 border-2 shadow-md rounded-full bg-violet-500/20 flex items-center justify-between'>
                <h1 className='text-violet-500 text-xl sm:text-2xl font-bold ml-2'>Taskly</h1>
                <div className="flex items-center gap-2">
                    <Avatar />
                    <button className="text-violet-500 bg-violet-500/20 hover:bg-violet-400/10 duration-150 flex items-center justify-center border  size-8 p-1 rounded-full"><MdLogout /></button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar