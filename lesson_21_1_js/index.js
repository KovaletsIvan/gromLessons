const clickedText = () => {
  console.log("clicked");
};

const btnElem = document.querySelector(".single-use-btn");

btnElem.addEventListener("click", clickedText);

btnElem.removeEventListener("click", clickedText);
