export const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  let elementsArray = document.querySelectorAll(".tool");
  elementsArray = Array.from(elementsArray);
  console.dir(elementsArray);
  return elementsArray;
};

getItemsList();

getItemsArray();
