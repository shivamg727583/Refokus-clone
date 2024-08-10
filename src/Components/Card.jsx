import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

export default function Card({w,heading}) {
   
  return (
    <motion.div   whileHover={{backgroundColor:heading===true && "#7443ff" , padding:"20px"}} style={{width:w,}} className={` p-2 py-3  cursor-pointer  rounded-2xl bg-zinc-700 p-3 flex flex-col justify-between h-[350px]`}>
     <div className='flex flex-col gap-2'>
     <div className="upper flex justify-between items-center w-full">
        <h2 className='text-lg font-normal text-zinc-300 capitalize'>
            {!heading ?" Up : Next Culture":"Get in touch"}
             </h2>
        <i className="ri-arrow-right-line text-xl"></i>
       </div>
       <h2  className='text-3xl font-normal  w-[40%]'>
       
      {!heading?"  Who we are":`Let's get to it, together.`}
        
        </h2>
     </div>
     <div className='flex flex-col gap-2'>
       {heading?  
       <div className='flex flex-col gap-2'>
        <h1 className='text-[6vw] text-white '>Start a Project</h1> 
        <Button title='Contact us' />
        </div>
       
       :<p className='text-lg text-zinc-300'>Expore what we drives our team.</p>}
        
     </div>

    </motion.div>
  )
}
