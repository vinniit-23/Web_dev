const inputTask = document.querySelector("#input-box");
const addTaskButton = document.querySelector("#add-task-btn");
const todoList = document.querySelector("#todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((element) => {
  renderTask(element);
});

/*enter functionality if we enter then it will take li direct 
without even clicking the add task button.*/
inputTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

addTaskButton.addEventListener("click", () => {
  const task = inputTask.value.trim();
  if (task === "") return;
  let newTask = {
    id: Date.now().toString(),
    text: task,
    completed: false,
  };
  tasks.push(newTask);
  // console.log(tasks);
  saveToLocalStorage();
  renderTask(newTask);
  inputTask.value = "";
  // console.log(tasks[0].text);
});

function renderTask(task) {
  const taskText = task.text;
  console.log(task);
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  /**changed innerchild logic for security purpose and added
   * textcontnt its more secure. */
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  li.appendChild(span);
  li.appendChild(deleteBtn);
  // li.innerHTML = `
  // <span>${taskText}</span>
  // <button>delete</button>`;
  todoList.appendChild(li);
  if (task.completed) {
    li.classList.add("completed");
  }
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      return;
    }
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveToLocalStorage();
  });
  li.querySelector("button").addEventListener("click", (e) => {
    // const taskIndex = tasks.findIndex((t) => t.text === task.text);
    // tasks.splice(taskIndex, 1);
    e.stopPropagation();
    tasks = tasks.filter((t) => t.id !== task.id);
    saveToLocalStorage();
    li.remove();
  });
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
