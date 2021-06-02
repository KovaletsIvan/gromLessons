export const finishList = () => {
  const elemLi1 = document.createElement("li");
  const elemLi4 = document.createElement("li");
  const elemLi6 = document.createElement("li");
  const elemLi8 = document.createElement("li");
  const elemUl = document.querySelector(".list");
  const elemLi5 = document.querySelector(".special");
  elemLi1.textContent = "1";
  elemUl.prepend(elemLi1);
  elemLi4.textContent = "4";
  elemLi5.before(elemLi4);
  elemLi6.textContent = "6";
  elemLi5.after(elemLi6);
  elemLi8.textContent = "8";
  elemUl.append(elemLi8);
};


