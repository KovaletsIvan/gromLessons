export const getSection = (num) => {
  const dataNum = document.querySelector(`span[data-number="${num}"]`);
  const divParent = dataNum.closest(".box");
  return divParent.dataset.section;
};


