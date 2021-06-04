const bodyElem = document.querySelector(".btn");

const handleClick = (event) => {
  console.log(event.target.textContent);
};

bodyElem.addEventListener("click", handleClick);
