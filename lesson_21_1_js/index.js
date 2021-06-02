export const createButton = (butoonText) => {
  const elementButton = document.createElement("button");
  elementButton.textContent = butoonText;
  const paretElement = document.querySelector("body");

  paretElement.append(elementButton);
};
