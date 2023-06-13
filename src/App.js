
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';





function App() { 
    

  return (
   
    <div  className="items-center flex flex-col w-full h-screen overflow-hidden bg-slate-700">
      <h1 className=' font-semibold'></h1>
      <Form />
      <Tasks  />
      
    </div>
    
  );
}

export default App;
