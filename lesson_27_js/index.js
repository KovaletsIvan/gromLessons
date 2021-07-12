const counterElem = document.querySelector(".counter");
const spanElement = document.querySelector(".caunter_value");

const counterChange = (event) => {
  spanElement.textContent = localStorage.getItem("value");
  const isButton = event.target.classList.contains("counter-btn");
  if (!isButton) {
    return;
  }
  const actionValue = event.target.dataset.action;
  const result =
    actionValue === "decrece"
      ? Number(spanElement.textContent) - 1
      : Number(spanElement.textContent) + 1;

  spanElement.textContent = result;
  localStorage.setItem("value", result);
};

const chackValue = () => {
  spanElement.textContent = localStorage.getItem("value") || 0;
};

counterElem.addEventListener("click", counterChange);
window.addEventListener("storage", chackValue);
document.addEventListener("DOMContentLoaded", chackValue);
