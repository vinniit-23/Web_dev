import React, { useEffect, useState } from "react";

function Task({ task, setTask }) {
  //   const [task, setTask] = useState([]);
  //   const [task, setTask] = useState(
  //     () => JSON.parse(localStorage.getItem("task")) || [],
  //   );
  //   let task = props.task;
  //   let setTask = props.setTask;

  const handleCheckboxChange = (elem) => {
    const updatedTask =
      task.map((item) => {
        // console.log(item.Completed);
        if (item.Id === elem.Id) {
          return {
            ...item,
            Completed: !item.Completed,
          };
        }
        return item;
      });
    

    setTask(updatedTask);
    localStorage.setItem("task", JSON.stringify(updatedTask));
  };

  return (
    <div className="mt-6">
      <h2 className="md:text-3xl text-2xl font-bebas   font-bold text-center py-6">
        My tasks
      </h2>
      {task.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No tasks available</p>
      )}
      <ul>
        {task.map((elem, index) => (
          <li
            key={index}
            className={`bg-gray-50   ${elem.Completed ? "  bg-gray-100 opacity-75" : " "} border rounded-lg p-4 flex justify-between items-center mb-3`}
          >
            <div
              className={`flex items-center ${elem.Completed ? "line-through  " : " "} gap-6`}
            >
              <input
                className="mr-4 w-5 h-5 accent-slate-950  cursor-pointer"
                type="checkbox"
                checked={task.Completed} // Controlled by state
                onChange={() => handleCheckboxChange(elem)} // Syncs DOM with state
              />
              <div>
                <h3 className="font-bold   ">{elem.TaskName}</h3>

                <p className="text-sm text-gray-500">
                  {elem.Priority} Priority
                </p>
              </div>{" "}
            </div>
            {/* <span
              className={
                elem.Priority === "High"
                  ? "text-red-500"
                  : elem.Priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
              }
            >
              {elem.Priority}
            </span>{" "} */}
            <button
              className="bg-red-500 text-white px-3 py-1 font-bebas rounded hover:bg-red-600"
              onClick={() => {
                const updatedTask = task.filter((item) => item.Id !== elem.Id);
                setTask(updatedTask);
                localStorage.setItem("task", JSON.stringify(updatedTask));
              }}
            >
              {" "}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
