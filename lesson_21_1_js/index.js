const inputElement = document.querySelector(".text-input");

const getInputText = (event) => {
  console.log(event.target.value);
};

inputElement.addEventListener("change", getInputText);
