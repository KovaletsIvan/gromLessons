const elements = document.querySelectorAll(".btn");

const handleClick = () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (event) => {
      console.log(event.target.textContent);
    });
  }
};

handleClick();
