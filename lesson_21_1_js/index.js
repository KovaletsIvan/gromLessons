export const getTitle = () => {
  const element = document.querySelector(".title").textContent;
  return element;
};

getTitle();

export const getDescription = () => {
  const element = document.querySelector(".about").innerText;
  return element;
};

getDescription();

export const getPlans = () => {
  const element = document.querySelector(".plans").innerHTML;
  return element;
};

getPlans();

export const getGoal = () => {
  const element = document.querySelector(".goal").outerHTML;
  return element;
};

console.log(getGoal());
