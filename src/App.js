import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';


function App() {
  const storedData = localStorage.getItem('formData')
    const parsedData =JSON.parse(storedData);
    let usedData = []
    usedData.push(parsedData)
    

  return (
    <div  className="items-center flex flex-col w-full h-full overflow-hidden bg-slate-700">
      <h1 className=' font-semibold'>App</h1>
      <Form />
      <Tasks  data={usedData}/>
      
    </div>
  );
}

export default App;
