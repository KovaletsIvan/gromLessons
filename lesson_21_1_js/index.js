const btnElem = document.querySelectorAll(".btn");

const handelClick = () => {
  btnElem[0].addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
  btnElem[1].addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
};

const nFunc = handelClick();

btnElem[1].addEventListener("click", nFunc);
btnElem[0].addEventListener("click", nFunc);
