import { setItem, getItem } from './storage.js';
import { getTasksList, setTask,updateTask } from './tasksGetWhey.js';

const btnElem = document.querySelector('.create-task-btn');
const listItem = document.querySelector('.list');

const renderListItems = (listItems) => {
  if (!listItems) {
    return;
  }
  listItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  const listElem = document.querySelector('.list');
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkBoxElem = document.createElement('input');
      checkBoxElem.setAttribute('type', 'checkbox');
      checkBoxElem.dataset.id = id;
      checkBoxElem.checked = done;
      checkBoxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkBoxElem, text);

      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

renderListItems(getItem('tasksList'));

const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;
  if (!text.trim()) {
    inputElem.value = '';
    return;
  }

  inputElem.value = '';
  const newTask = {
    text,
    done: false,
    date: new Date().toISOString(),
    id: Math.random().toString(),
  };
  setTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      listItem.innerHTML = '';
      renderListItems(getItem('tasksList'));
    });
};

const checkboxChange = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, date } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;
  const updatedTask = {
    text,
    date,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      listItem.innerHTML = '';
      renderListItems(getItem('tasksList'));
    });

};

const checkboxElem = () => {
  const checkboxItem = listItem.querySelectorAll('.list__item-checkbox');
  [...checkboxItem].map((elem) =>
    elem.addEventListener('click', checkboxChange)
  );
};
checkboxElem();

const checkStorage = () => {
  listItem.innerHTML = '';
  renderListItems(getItem('tasksList'));
};

document.addEventListener('DOMContentLoadet', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderListItems(getItem('tasksList'));
  });
});
window.addEventListener('storage', checkStorage);
listItem.addEventListener('click', checkboxElem);
btnElem.addEventListener('click', createTask);
btnElem.addEventListener('click', checkboxElem);
