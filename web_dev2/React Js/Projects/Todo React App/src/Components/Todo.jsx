import React, { useState } from "react";

function Todo(props) {
  //   const [task, setTask] = useState(
  //     () => JSON.parse(localStorage.getItem("task")) || [],
  //   );
  const [Priority, setPriority] = useState("Default");
  const [TaskName, setTaskName] = useState("");

  function saveToLocalStrorage() {
    if (TaskName.trim() === "") return;
    let newTask = {
      Id: Date.now().toString(),
      TaskName: TaskName,
      Priority: Priority,
      Completed: false,
    };
    // console.log(newTask);

    const updatedTask = [...props.task, newTask];

    props.setTask(updatedTask);
    setPriority("Default");
    setTaskName("");

    localStorage.setItem("task", JSON.stringify(updatedTask));
  }

  return (
    <>
      <h1 className="md:text-6xl text-3xl font-bebas   font-bold text-center py-6">
        Todo React App
      </h1>
      <div>
        <input
          type="text"
          name="task"
          placeholder="Add new Task..."
          value={TaskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 hover:scale-105 outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <div className="flex items-center gap-3">
          <label className="text-3xl font-bebas mt-4 text-center     ">
            Priority:
          </label>

          <select
            name="Priority"
            value={Priority}
            id="Priority"
            onChange={(e) => setPriority(e.target.value)}
            className="w-1/2 border font-bebas rounded-lg hover:scale-105 px-4 py-2 mt-3  "
          >
            <option value="Default">Default</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button
            className="w-1/2 mt-4 bg-slate-950 font-bebas hover:scale-105 text-white py-2 rounded-lg hover:bg-slate-700 transition"
            onClick={saveToLocalStrorage}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
