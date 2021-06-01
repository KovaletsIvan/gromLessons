export const setButton = (text) => {
  const element = document.querySelector("body");
  element.innerHTML = `<button> ${text} </button>`;
};
