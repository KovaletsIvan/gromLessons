const baseUrl =
  'https://crudcrud.com/api/6081df431c1248e6953731124ec2714b/tasks';

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () =>
  fetch(baseUrl)
    .then((respose) => respose.json())
    .then((tasks) => mapTasks(tasks));

export const setTask = (taskData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
