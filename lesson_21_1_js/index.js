const checboxElem = document.querySelector(".task-status");
const getValueOfChecbox = () => {
  console.log(checboxElem.checked);
};

checboxElem.addEventListener("change", getValueOfChecbox);
