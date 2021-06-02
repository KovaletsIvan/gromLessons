export const getSection = (num) => {
  const dataNum = document.querySelector(`span[data-number="${num}"]`);
  const divParent = dataNum.closest("div");
  return divParent.dataset.section;
};
