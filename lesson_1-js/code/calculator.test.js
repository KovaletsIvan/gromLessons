import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("should to square numbers", () => {
  const result = getSquaredArray([2, 3, 4, 5]);
  expect(result).toEqual([4, 9, 16, 25]);
});

it("should keep odd numbers only", () => {
  const result = getOddNumbers([1, 2, 3, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it("should get sum of numbers", () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
