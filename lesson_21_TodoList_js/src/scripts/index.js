import { setItem, getItem } from "./storage.js";

const btnElem = document.querySelector(".create-task-btn");
const listItem = document.querySelector(".list");

const renderListItems = (listItems) => {
  if (!listItems) {
    return;
  }
  listItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  const listElem = document.querySelector(".list");
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkBoxElem = document.createElement("input");
      checkBoxElem.setAttribute("type", "checkbox");
      checkBoxElem.dataset.id = id;
      checkBoxElem.checked = done;
      checkBoxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkBoxElem, text);

      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderListItems(getItem("tasksList"));

const createTask = () => {
  const inputElem = document.querySelector(".task-input");
  const text = inputElem.value;
  if (!text.trim()) {
    inputElem.value = "";
    return;
  }
  inputElem.value = "";
  const newTask = getItem("tasksList") || [];
  newTask.push({
    text,
    done: false,
    date: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem("tasksList", newTask);
  listItem.innerHTML = "";
  renderListItems(getItem("tasksList"));
};

const checkboxChange = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem("tasksList");
  const changetTask = tasksList.map((task) => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem(
    "tasksList",
    changetTask.sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate))
  );
  listItem.innerHTML = "";
  renderListItems(getItem("tasksList"));
};

const checkboxElem = () => {
  const checkboxItem = listItem.querySelectorAll(".list__item-checkbox");
  [...checkboxItem].map((elem) =>
    elem.addEventListener("click", checkboxChange)
  );
};
checkboxElem();

const checkStorage = () => {
  listItem.innerHTML = "";
  renderListItems(getItem("tasksList"));
};

window.addEventListener("storage", checkStorage);
listItem.addEventListener("click", checkboxElem);
btnElem.addEventListener("click", createTask);
btnElem.addEventListener("click", checkboxElem);
