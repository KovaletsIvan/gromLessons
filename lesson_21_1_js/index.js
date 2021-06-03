const clickedText = () => {
  console.log("clicked");
};

const btnElem = document.querySelector(".single-use-btn");

btnElem.addEventListener("click", clickedText);

btnElem.addEventListener("click", function () {
  let counter = 0;
  counter += 1;
  if (counter == 1) {
    btnElem.removeEventListener("click", clickedText);
  }
});
