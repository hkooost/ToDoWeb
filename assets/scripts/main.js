const taskValue = document.querySelector(".task-idea");
const taskAdd = document.querySelector(".task-add");
const taskList = document.querySelector(".todo");

// Create task
taskAdd.addEventListener("click", () => {
  const taskList = document.querySelector(".todo");

  if (taskValue.value == "") alert('Write something :/');
  else {
    const newTask = document.createElement("li");
    newTask.classList.add("todo__item");
    taskList.appendChild(newTask);

    const todoCheck = document.createElement("button");
    todoCheck.classList.add("todo__check");
    todoCheck.innerText = "[ ]";
    newTask.appendChild(todoCheck);

    const todoContent = document.createElement("input");
    todoContent.classList.add("todo__content");
    todoContent.value = taskValue.value;
    newTask.appendChild(todoContent);
    todoContent.readOnly = true;

    const todoDel = document.createElement("button");
    todoDel.classList.add("todo__delete");
    todoDel.innerText = "[del]";
    newTask.appendChild(todoDel)

  }
})
taskValue.value = "";

// Check, delete
taskList.addEventListener('click', (e) => {
  const item = e.target;
  // Check
  if (item.classList[0] === 'todo__check')
    {
      item.innerText = "[v]";
      item.parentElement.classList.add("completed");
    } else null
  // Delete
  if (item.classList[0] === 'todo__delete')
    {
      item.parentElement.remove();
    } else null
})