export const finishForm = () => {
  const formElement = document.querySelector(".login-form");
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "login");
  formElement.append(newInput);
  const lastInput = document.querySelector("input");
  lastInput.setAttribute("type", "password");
  formElement.prepend(newInput);
};
