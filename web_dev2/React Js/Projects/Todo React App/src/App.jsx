import react,{ useState } from 'react'
import Todo from './Components/Todo'
import Task from './Components/Task';
  
function App() {
  
   
  return (
    <div className="bg-zinc-800 w-full h-screen ">
      <Todo />
      <Task />
    </div>
  );
}

export default App
