'use strict';

require('core-js/modules/es.array.sort.js');

require('core-js/modules/web.dom-collections.iterator.js');

require('core-js/modules/es.string.trim.js');

require('core-js/modules/es.regexp.to-string.js');

var _storage = require('./storage.js');

var _tasksGetWhey = require('./tasksGetWhey.js');

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
    .map((_ref) => {
      let { text, done, id } = _ref;
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

renderListItems((0, _storage.getItem)('tasksList'));

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
  (0, _tasksGetWhey.setTask)(newTask)
    .then(() => (0, _tasksGetWhey.getTasksList)())
    .then((newTasksList) => {
      (0, _storage.setItem)('tasksList', newTasksList);
      listItem.innerHTML = '';
      renderListItems((0, _storage.getItem)('tasksList'));
    });
};

const checkboxChange = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const tasksList = (0, _storage.getItem)('tasksList');
  const { text, date } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;
  const updatedTask = {
    text,
    date,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  (0, _tasksGetWhey.updateTask)(taskId, updatedTask)
    .then(() => (0, _tasksGetWhey.getTasksList)())
    .then((newTasksList) => {
      (0, _storage.setItem)('tasksList', newTasksList);
      listItem.innerHTML = '';
      renderListItems((0, _storage.getItem)('tasksList'));
    });
};

const checkStorage = () => {
  listItem.innerHTML = '';
  renderListItems((0, _storage.getItem)('tasksList'));
};

document.addEventListener('DOMContentLoadet', () => {
  (0, _tasksGetWhey.getTasksList)().then((tasksList) => {
    (0, _storage.setItem)('tasksList', tasksList);
    renderListItems((0, _storage.getItem)('tasksList'));
  });
});
window.addEventListener('storage', checkStorage);
listItem.addEventListener('click', checkboxChange);
btnElem.addEventListener('click', createTask);
