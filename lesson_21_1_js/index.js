const btnElem = document.querySelector("body");

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnElem.addEventListener("click", handleClick);
