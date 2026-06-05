import React, { useState } from "react";

function Task() {
  const [task, setTask] = useState(
    () => JSON.parse(localStorage.getItem("task")) || [],
  );
  console.log("Task length:", task.length);
  console.log("Task data:", task);
  return (
    <div>
      {task.map((elem, index) => (
        <ul
          className=" h-10 m-8 rounded-full bg-amber-100 text-zinc-800"
          key={index}
        >
          <li className=" flex justify-between font-bebas tracking-wider h-full items-center  mx-4 lg:text-lg text">
            <p>{elem.TaskName}</p>
            <p className={`text-green-700`}>{elem.Priority}</p>
            <button
              onClick={() => {
                const updatedTask = task.filter((item) => item.Id !== elem.Id);
                setTask(updatedTask);
                localStorage.setItem("task", JSON.stringify(updatedTask));
              }}
              className="rounded-full px-4 py-2 bg-red-700 text-sm text-amber-100"
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Task;
