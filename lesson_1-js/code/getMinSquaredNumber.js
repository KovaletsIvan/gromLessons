export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absArr = arr.map((elem) => Math.abs(elem) * Math.abs(elem));
  const sortedArr = absArr.sort((a, b) => a - b);
  return sortedArr[0];
};

const arrOfNumbers = [-777, 3, -2, 6, 45, -20];
const char = "ivan";
const emptyArr = [];
