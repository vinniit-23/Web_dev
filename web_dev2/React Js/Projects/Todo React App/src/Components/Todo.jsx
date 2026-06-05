import React, { useState } from "react";

// main.jsx or App.jsx

function Todo() {
  const [task, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");

  // console.log(taskName);
  // console.log(priority);

  function SaveToLocalStorage() {
    if (taskName.trim() === "") return;
    let newTask = {
      Id: Date.now().toString(),
      TaskName: taskName.trim(),
      Priority: priority,
    };
    const updatedTasks = [...task, newTask];

    console.log(task);
    setTask(updatedTasks);

    localStorage.setItem("task", JSON.stringify(updatedTasks));
  }

  return (
    <div >
      <h1 className="text-4xl text-center font-bebas py-4  text-amber-100">
        Todo React App
      </h1>
      <div className="flex justify-center m-3 gap-5">
        <input
          type="text"
          placeholder="Enter Task"
          name="task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="font-bebas tracking-wider border-b-cyan-600 bg-zinc-400 text-zinc-800 border-none rounded-full lg:px-72 md:px-40  px-5  py-5"
        />
        <div className="flex items-center gap-2  ">
          <label className=" font-bebas text-yellow-100 ">Priority:</label>

          <select
            name="Priority"
            className="  bg-cyan-600   text-yellow-100 rounded-full font-bold text-sm lg:px-10 py-6 "
             value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button
          onClick={SaveToLocalStorage}
          className=" bg-cyan-600 rounded-full py-5 lg:px-10 text-amber-100 font-bold text-sm "
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Todo;
