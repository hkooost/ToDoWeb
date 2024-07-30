const taskValue = document.querySelector(".task-add__input");
const taskList = document.querySelector(".todo");
const notify = document.querySelector(".popup");
const notifyText = document.querySelector(".popup__text");
const allTask = document.querySelector('.todo-all');
const clearAll = document.querySelector('.clear-all');
let total = 0;

allTask.innerText = total;
// Create task
taskValue.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (taskValue.value === "") {
      newAlert();
      notifyText.innerText = "Write something :/"
    }
    else {
      const newTask = document.createElement("li");
      newTask.classList.add("todo__item");
      taskList.appendChild(newTask);

      const todoDel = document.createElement("button");
      todoDel.classList.add("todo__delete");
      todoDel.innerText = "—";
      newTask.appendChild(todoDel)

      const todoCheck = document.createElement("button");
      todoCheck.classList.add("todo__check");
      todoCheck.innerText = "[ ]";
      newTask.appendChild(todoCheck);

      const todoContent = document.createElement("div");
      todoContent.classList.add("todo__content");
      todoContent.innerText = taskValue.value;
      newTask.appendChild(todoContent);
      taskValue.value = "";

      const todoDate = document.createElement("div");
      const time = new Date();
      todoDate.classList.add("todo__time");
      todoDate.innerText = time.toLocaleString();
      todoContent.appendChild(todoDate);

      total = taskList.children.length;
    }
    allTask.innerText = total;
    saveData();
  }
});
taskValue.value = "";

// Check, delete
taskList.addEventListener('click', (e) => {
  const item = e.target;
  // Check
  if (item.classList[0] === 'todo__check') {
      item.innerText = "[v]";
      item.parentElement.classList.add("completed");
      saveData();
    }
  // Delete
  if (item.classList[0] === 'todo__delete') {
      item.parentElement.remove();
      total = taskList.children.length;
      allTask.innerText = total;
      saveData();
    }
})

// Clear all tasks
clearAll.addEventListener('click',() => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  newAlert();
  notifyText.innerText = "Tasks cleared"
  total = taskList.children.length;
  allTask.innerText = total;
  saveData();
})

// Alert function
newAlert = () => {
  if (notify.classList[2] === "page__popup_disabled") {
    notify.classList.replace("page__popup_disabled", "page__popup_enabled");
    notify.classList.add("page__popup_alert");
  }
  setTimeout(() => {
    notify.classList.replace("page__popup_enabled", "page__popup_disabled");
    notify.classList.remove("page__popup_alert");
  }, 2000);
}

// localStorage
let saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
  localStorage.setItem("total", allTask.innerText);
}
let getData = () => {
  taskList.innerHTML = localStorage.getItem("data");
  allTask.innerText = localStorage.getItem("total")
}
getData();