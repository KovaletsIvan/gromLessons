const bodyElem = document.querySelector("body");

const handleClick = (event) => {
  const elemTarget = event.target;
  console.log(elemTarget.textContent);
};

bodyElem.addEventListener("click", handleClick);
