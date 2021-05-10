import sum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("should to square numbers", () => {
  const result = getSquaredArray([2, 3, 4, 5]);
  expect(result).toEqual([4, 9, 16, 25]);
});

it("should get Even numbers", () => {
  const result = getOddNumbers([1, 2, 3, 5, 6, 8]);
  expect(result).toEqual([1, 3, 5]);
});

it("should add two numbets ", () => {
  const result = sum(2, 3);
  expect(result).toEqual(5);
});
