const form = document.getElementById("form");
const formInput = document.getElementById("task");
let taskList = [];
const listEl = document.getElementById("list");

const submitHandler = (e) => {
  e.preventDefault();
  if (!formInput.value) {
    alert("enter the task and try again");
    return;
  }
  taskList.push({
    name: formInput.value,
    id: Date.now(),
  });
  console.log(taskList);
  toDoRender();
};

const toDoRender = () => {
  if (taskList.length === 0) {
    listEl.textContent = "You have no tasks";
  } else {
    listEl.innerHTML = taskList
      .map((task) => {
        return ` <li class="list-group-item d-flex justify-content-between align-items-center">
        ${task.name}
        <span data-id="${task.id}" class="badge bg-danger rounded-pill">X</span>
      </li>`;
      })
      .join("");
  }
};

const deleteHandler = (event) => {
  const id = event.target.dataset.id;
  console.log(id);
  if (id) {
    taskList = taskList.filter((task) => {
      if (task.id != id) {
        return true;
      }
      return false;
    });
    toDoRender();
  }
};

listEl.addEventListener("click", deleteHandler);
form.addEventListener("submit", submitHandler);

document.addEventListener("DOMContentLoaded", toDoRender);
