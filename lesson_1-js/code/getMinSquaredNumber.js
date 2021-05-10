export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absArr = arr.map((elem) => Math.abs(elem) * Math.abs(elem));
  const sortedArr = absArr.sort((a, b) => a - b);
  return sortedArr[0];
};
