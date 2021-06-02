export const squaredNumbers = () => {
  const liElem = document.querySelectorAll(".number");
  for (const elem of Array.from(liElem)) {
    elem.setAttribute(
      "data-squared-number",
      elem.dataset.number * elem.dataset.number
    );
  }
};
