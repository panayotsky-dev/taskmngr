import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Tasks from './Tasks'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/reducers';
import { saveAs } from 'file-saver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Form() {      
    
   
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    // const [completed,setCompleted] = useState('')
    const [correctData,setCorrectData] = useState(false)
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);
    

    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(title.length < 3){
        toast.error('Tittle must be at least 3 characters long!')
      }else if (!title){
        toast.error('Please enter an tittle')

      }else if(!description){
        toast.error('Please enter an description')
      }else if (description.length >=31){
        toast.error('Description is too long( max 30 characters)')
      }
      if(title.length >= 3 && title && description && description.length <= 30){
        const newItem = {
          id: Date.now(),
          title,
          description,
        };
    
        dispatch(addItem(newItem));
        toast.success('Task was added!')
      }
      
      
      setTitle('');
      setDescription('');
    };     

    const handleExport = () => {
      if(items.length > 0){
        const exportedData = JSON.stringify(items);
        const blob = new Blob([exportedData], { type: 'application/json' });
        saveAs(blob, 'exported_items.json');
        toast.success('JSON file was downloaded!')
      }else{
        toast.error('There is not tasks, to download! Add some!')
      }
     
    };
    
      

    
   
    
    
    
  return (
    <>
     <ToastContainer />
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
        value={title} 
        className='rounded-md px-2 mx-2 w-auto mt-2'
        onChange={(e) => setTitle(e.target.value)} />
    </label>

    <label className='text-center'>Description:
        <textarea 
        type='text'
        value={description} 
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
    <button 
    type='button' 
    onClick={handleExport} 
    className='rounded-full bg-slate-500 my-2 px-2 mx-2'>
      Export all tasks</button>
    </form>
    </motion.div>
    {/* <Tasks  data={data}/> */}
    
    
    
    </>
  )
}

export default Form
