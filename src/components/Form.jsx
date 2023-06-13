import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Tasks from './Tasks'



function Form() {
    const storedData = localStorage.getItem('formData')
    const parsedData =JSON.parse(storedData);

    const [formInputs, setFormInputs] = useState([parsedData])

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if(storedData) {
          const parsedData =JSON.parse(storedData);
          setFormInputs(parsedData)
  
        }
      }, [])
    
    
    console.log(formInputs)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [completed,setCompleted] = useState('')
    
      const handleSubmit = (event) => {
        event.preventDefault();         
        const id = Date.now();      
        
        const formData = {
          id: id,
          title: title,
          description: description,
        };      
        
        localStorage.setItem('formData', JSON.stringify(formData));     
        
        setTitle('');
        setDescription('');
      }

    // useEffect(() => {
    //   console.log({title})
    //   console.log({completed});
    // }, [completed])
   
    
    
    
  return (
    <>
    <motion.div
    initial={{opacity:0,x:-1000,y:-10}}
    animate={{opacity:1,x:0,y:0,}}    
    exit={{opacity:0,x:400}}
     className=' bg-slate-400 flex flex-row items-center font-mono rounded-md mt-2  '>
        <form onSubmit={handleSubmit} 
        className='px-2 mx-2 flex flex-col '>
    <label>Title:
        <input 
        type='text' 
        className='rounded-md px-2 mx-2 w-auto mt-2'
        onChange={(e) => setTitle(e.target.value)} />
    </label>

    <label className='text-center'>Description:
        <textarea 
        type='text' 
        className='block w-full p-2 rounded-md'
        onChange={(e) => setDescription(e.target.value)}/>
    </label>
    {/* <p className='text-center my-1'>Is your task completed:</p>
    <select onChange={(e) => e.target.value != '' ?setCompleted(e.target.value) : ""}
    className='px-2 rounded-md mx-2 '> 
        <option value=""></option>
        <option value="false">False</option>
        <option value="True">True</option>
    </select> */}
    <button type='submit'  className='rounded-full bg-slate-500 mt-2 px-2 mx-2'>Add task</button>
    <button type='button' className='rounded-full bg-slate-500 my-2 px-2 mx-2'>Export all tasks</button>
    </form>
    </motion.div>
    {/* <Tasks  data={data}/> */}
    {/* <Tasks data={formInputs} /> */}
    
    
    </>
  )
}

export default Form