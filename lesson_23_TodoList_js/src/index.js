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

let counter = 0;
const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.id = counter;
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.append(...tasksElems);
  counter++;
};

renderTasks(tasks);

const createNewObject = () => {
  checkboxElem = document.querySelector(".list__item");
  const generatedTasks = [];
  const newObj = { text: inputElem.value, done: false };
  if (inputElem.value == false) {
    return;
  }
  generatedTasks.push(newObj);
  renderTasks(generatedTasks);
};

const checkedTascks = (event) => {
  const checkbox = event.target.closest("li");
  checkbox.classList.toggle("list__item_done");
  if (event.target.checked) {
    listElem.append(checkbox);
  }
};

const getCheckboxElem = () => {
  const checkboxElem = listElem.querySelectorAll(".list__item-checkbox");
  for (let i = 0; i < checkboxElem.length; i++) {
    checkboxElem[i].addEventListener("click", checkedTascks);
  }
};

const clearInput = () => {
  inputElem.value = "";
};

createTaskBtn.addEventListener("click", createNewObject);
createTaskBtn.addEventListener("click", clearInput);
listElem.addEventListener("click", getCheckboxElem);
