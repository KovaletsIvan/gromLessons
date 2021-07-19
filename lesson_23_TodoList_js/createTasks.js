// import { getItem, setItem } from "./src/scripts/storage.js";
// import { renderTasks } from "./src/scripts/index.js";

// export const createTask = () => {
//   const taskTitleInputElem = document.querySelector(".task-input");
//   const text = taskTitleInputElem.value;
//   if (!text) {
//     return;
//   }
//   taskTitleInputElem.value = "";

//   const tasksList = getItem("tasksList") || [];

//   const newTasksList = tasksList.concat({
//     text,
//     done: false,
//     createDate: new Date().toISOString(),
//     id: Math.random().toString(),
//   });
//   setItem("tasksList", newTasksList);
//   listElem.innerHTML = "";
//   renderTasks(getItem("tasksList"));
// };
