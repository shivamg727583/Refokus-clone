import React from 'react'

function Button({title="Start a Project"}) {
  return (
   <button className='button max-w-40 bg-zinc-100 text-black h-[40px] outline-none rounded-2xl px-4    overflow-hidden '>
    <div className='w-full h-full flex items-center gap-2'>
        <span className='text-md'>{title}</span>
    <i className="ri-corner-down-right-line"></i></div>

    <div className='w-full h-full flex items-center gap-2'>
        <span className='text-md'>{title}</span>
    <i className="ri-corner-down-right-line"></i></div>


   </button>
   
  )
}

export default Button