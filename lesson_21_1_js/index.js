const inputElem = document.querySelector(".text-input");
const getValueOfInput = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener("change", getValueOfInput);
