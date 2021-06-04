const buttonElem = document.querySelector(".pagination");

const handelClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

buttonElem.addEventListener("click", handelClick);
