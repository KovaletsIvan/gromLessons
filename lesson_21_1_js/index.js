const btnElem = document.querySelector("body");

export const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnElem.addEventListener("click", handleClick);
