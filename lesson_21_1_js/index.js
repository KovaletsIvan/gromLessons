const checkboxElem = document.querySelector(".task-status");

const getStatus = (event) => {
  console.log(event.target.checked);
};
checkboxElem.addEventListener("change", getStatus);
