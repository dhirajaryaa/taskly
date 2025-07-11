import boyAvatar from "../assets/boy.png"

function Avatar() {
  return (
    <div className='rounded-full flex items-center justify-center border border-violet-500 p-[2px]'>
        <img src={boyAvatar} alt="userAvatar" className="size-7 rounded-full"/>
    </div>
  )
}

export default Avatar