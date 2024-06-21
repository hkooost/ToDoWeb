const taskValue = document.querySelector(".task-idea");
const taskAdd = document.querySelector(".task-add");
const taskList = document.querySelector(".todo");

// Create task
taskAdd.addEventListener('click', () => {
  if (taskValue.value == "") alert('Write something :/');
  else {
    const newTask = document.createElement("li");
    newTask.classList.add("todo__item");
    taskList.appendChild(newTask);

    const todoCheck = document.createElement("button");
    todoCheck.classList.add("todo__check");
    todoCheck.innerText = "[ ]";
    newTask.appendChild(todoCheck);

    const todoContent = document.createElement("div");
    todoContent.classList.add("todo__content");
    todoContent.innerText = taskValue.value;
    newTask.appendChild(todoContent);
    taskValue.value = "";

    const todoDel = document.createElement("button");
    todoDel.classList.add("todo__delete");
    todoDel.innerText = "[del]";
    newTask.appendChild(todoDel)

  }
  saveData();
})
taskValue.value = "";

// Enter trigger
taskValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    taskAdd.click();
  }
});

// Check, delete
taskList.addEventListener('click', (e) => {
  const item = e.target;
  // Check
  if (item.classList[0] === 'todo__check')
    {
      item.innerText = "[v]";
      item.parentElement.classList.add("completed");
      saveData();
    }
  // Delete
  if (item.classList[0] === 'todo__delete')
    {
      item.parentElement.remove();
      saveData();
    }
})

// localStorage
let saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
}
let getData = () => {
  taskList.innerHTML = localStorage.getItem("data");
}
getData();