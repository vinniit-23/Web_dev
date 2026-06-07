import react, { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import Task from "./Components/Task";

function App() {
  const [task, setTask] = useState(
    () => JSON.parse(localStorage.getItem("task")) || [],
  );
  // function updateLocaclStorage() {
  //   const taskArry = JSON.parse(localStorage.getItem("task")) || [];
  //   setTask(taskArry);
  //   //
  // }
  // useEffect(() => updateLocaclStorage(), []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-200">
      <div className="w-full h-full  max-w-lg gap-5 bg-zinc-50 rounded-xl shadow-lg p-6">
        <Todo task={task} setTask={setTask} />
        <Task task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
