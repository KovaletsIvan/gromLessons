const buttonElem = document.querySelectorAll(".pagination__page");

const handleClick = () => {
  for (let i = 0; i < buttonElem.length; i++) {
    buttonElem[i].addEventListener("click", (event) => {
      console.log(event.target.dataset.pageNumber);
    });
  }
};

handleClick();
