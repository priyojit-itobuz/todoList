const inputBox = document.getElementById("taskInput");
const addButton = document.getElementById("addItem");
const todoList = document.getElementById("todoList");
const completedButton = document.getElementById("completedButton");
const allButton = document.getElementById("allButton");
const activeButton = document.getElementById("activeButton");
const clearButton = document.getElementById("clearButton");

const tasks = JSON.parse(localStorage.getItem("todoItems")) || [];
const completedTask = [];

function displayTasks(filteredTasks = tasks) {
  todoList.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    if (task.completed && task.count % 2 != 0) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }

    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "/assets/deleteIcon.png");
    deleteButton.addEventListener("click", () => deleteTask(index));

    const tickButton = document.createElement("img");
    tickButton.setAttribute("src", "/assets/tickIcon.png");
    tickButton.addEventListener("click", () => completeTask(index));

    const editButton = document.createElement("img");
    editButton.setAttribute("src", "/assets/editIcon.png");
    editButton.addEventListener("click", () =>
      editTask(task, listItem, taskText,index)
    );

    listItem.appendChild(taskText);
    listItem.appendChild(tickButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    todoList.appendChild(listItem);
  });
}

function addTask() {
  const task = inputBox.value.trim();
  if (task !== "") {
    const found = tasks.some((el) => el.text === task);
    if (!found) {
      if (task.length > 25) {
        tasks.unshift({
          text: task.substring(0, 22) + "...",
          completed: false,
          count: 0,
        });
      } else {
        tasks.unshift({ text: task, completed: false, count: 0 });
      }
      localStorage.setItem("todoItems", JSON.stringify(tasks));
      inputBox.value = "";
      displayTasks();
    } 
    else 
    {
      alert("Same Task! Please enter different task");
    }
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("todoItems", JSON.stringify(tasks));
  displayTasks();
}

function completeTask(index) {
  tasks[index].count += 1;
  if (tasks[index].count % 2 != 0) {
    tasks[index].completed = true;
  } else {
    tasks[index].completed = false;
  }
  completedTask.push(tasks[index].text);
  localStorage.setItem("todoItems", JSON.stringify(tasks));
  displayTasks();
}

function displayCompletedTasks() {
  const filteredTasks = tasks.filter((task) => task.completed === true);
  displayTasks(filteredTasks);
}

function displayAllTasks() {
  displayTasks();
}

function displayActiveTasks() {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  displayTasks(filteredTasks);
}

function editTask(task, listItem, taskText) 
{
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.classList.add("edit-input");
  editInput.value = task.text;

  listItem.replaceChild(editInput, taskText);

  const saveEdit = () => {
    const newValue = editInput.value.trim();
    if (newValue) {
      const found = tasks.some((element) => element.text === newValue);
      if(!found)
      {
        task.text = newValue.length > 25 ? newValue.substring(0, 22) + "..." : newValue;
      }
      else
      {
        alert("Same Task");
      }
      localStorage.setItem("todoItems", JSON.stringify(tasks));
      displayTasks();
    } else {
      alert("Task cannot be empty!");
    }
  };
  editInput.addEventListener("blur", saveEdit);
}

function displayClearTasks() {
  let i = 0;
  while (i < tasks.length) {
    if (tasks[i].completed === true) {
      tasks.splice(i, 1);
    } else {
      i++;
    }
  }
  localStorage.setItem("todoItems", JSON.stringify(tasks));
  displayTasks();
}

displayTasks();

addButton.addEventListener("click", addTask);
completedButton.addEventListener("click", displayCompletedTasks);
allButton.addEventListener("click", displayAllTasks);
activeButton.addEventListener("click", displayActiveTasks);
clearButton.addEventListener("click", displayClearTasks);

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
