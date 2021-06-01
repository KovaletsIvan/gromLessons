export const getTitle = () => {
  const element = document.querySelector(".title").textContent;
  return element;
};



export const getDescription = () => {
  const element = document.querySelector(".about").innerText;
  return element;
};



export const getPlans = () => {
  const element = document.querySelector(".plans").innerHTML;
  return element;
};



export const getGoal = () => {
  const element = document.querySelector(".goal").outerHTML;
  return element;
};

