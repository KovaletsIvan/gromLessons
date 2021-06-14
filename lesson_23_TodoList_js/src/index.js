const listElem = document.querySelector(".list");
const inputElem = document.querySelector(".task-input");
const createTaskBtn = document.querySelector(".create-task-btn");

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  let counter = 0;
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.id = counter++;
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createNewObject = () => {
  const newObj = { text: inputElem.value, done: false };
  if (inputElem.value == false) {
    return;
  }
  tasks.push(newObj);
  listElem.innerHTML = "";
  renderTasks(tasks);
};

const checkboxOnChange = (event) => {
  const checkboxId = event.target.dataset.id;
  if (tasks[checkboxId].done) {
    tasks[checkboxId].done = false;
    listElem.innerHTML = "";
    renderTasks(tasks);
    return;
  }
  tasks[checkboxId].done = true;
  listElem.innerHTML = "";
  renderTasks(tasks);
  console.log(checkboxId);
};

const getCheckboxElem = () => {
  const checkboxElem = listElem.querySelectorAll(".list__item-checkbox");
  [...checkboxElem].map((elem) =>
    elem.addEventListener("click", checkboxOnChange)
  );
};

const clearInput = () => {
  inputElem.value = "";
};

window.addEventListener("load", getCheckboxElem);
listElem.addEventListener("click", getCheckboxElem);
createTaskBtn.addEventListener("click", createNewObject);
createTaskBtn.addEventListener("click", clearInput);
createTaskBtn.addEventListener("click", getCheckboxElem);
