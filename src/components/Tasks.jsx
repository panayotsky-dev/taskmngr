import React, { useEffect } from 'react'

import {motion} from 'framer-motion'


function Tasks({data}) {
    

    
  
  return (
    <>
    <motion.h1 
    initial={{opacity:0,}}
    animate={{opacity:1,}}    
    exit={{opacity:0,}}
    transition={{duration:1}}
    className='text-xl font-semibold font-mono py-10'>Tasks</motion.h1>
    {data.map((task)=>(
        <motion.div 
        initial={{opacity:0,x:-10,y:1000}}
    animate={{opacity:1,x:0,y:0,}}    
    exit={{opacity:0,x:400}}
    
    whileHover={{scale:1.05}}
        className='w-[300px] bg-slate-400 flex flex-col items-center font-mono rounded-md mt-2 mb-2 py-2   '>
            
             <p>Title:</p><p>{task.title}</p>
             <p>Description:</p> <p>{task.description}</p>
             <button type='button' className=' bg-cyan-400 hover:bg-red-400 rounded-full mx-2 px-2'>Delete task</button>
        </motion.div>
        
    ))}
    </>
  )
}

export default Tasks