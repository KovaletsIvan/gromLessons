const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");
const spanElement = document.querySelector(".rect_span");

const logTarged = (text, color) => {
  const eventsListElement = document.querySelector(".events-list");
  eventsListElement.innerHTML += `<span style = 'color:${color}; margin-left: 8px'> ${text} </span>`;
};

const logGreyDiv = logTarged.bind(null, "DIV", "grey");
const logGreyP = logTarged.bind(null, "P", "grey");
const logGreySpan = logTarged.bind(null, "SPAN", "grey");

const logGreenDiv = logTarged.bind(null, "DIV", "green");
const logGreenP = logTarged.bind(null, "P", "green");
const logGreenSpan = logTarged.bind(null, "SPAN", "green");

divElement.addEventListener("click", logGreyDiv, true);
pElement.addEventListener("click", logGreyP, true);
spanElement.addEventListener("click", logGreySpan, true);

divElement.addEventListener("click", logGreenDiv);
pElement.addEventListener("click", logGreenP);
spanElement.addEventListener("click", logGreenSpan);

const clearEvent = () => {
  const targetField = document.querySelector(".events-list");
  targetField.innerHTML = "";
};
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearEvent);

const removeHandleds = () => {
  divElement.removeEventListener("click", logGreyDiv, true);
  pElement.removeEventListener("click", logGreyP, true);
  spanElement.removeEventListener("click", logGreySpan, true);

  divElement.removeEventListener("click", logGreenDiv);
  pElement.removeEventListener("click", logGreenP);
  spanElement.removeEventListener("click", logGreenSpan);
};

const removeBtn = document.querySelector(".remove-handlers-btn");
removeBtn.addEventListener("click", removeHandleds);

const attachHandlers = () => {
  divElement.addEventListener("click", logGreyDiv, true);
  pElement.addEventListener("click", logGreyP, true);
  spanElement.addEventListener("click", logGreySpan, true);

  divElement.addEventListener("click", logGreenDiv);
  pElement.addEventListener("click", logGreenP);
  spanElement.addEventListener("click", logGreenSpan);
};

const attachBtn = document.querySelector(".attach-handlers-btn");
attachBtn.addEventListener("click", attachHandlers);
