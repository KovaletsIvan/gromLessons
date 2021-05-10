import { getEvenNumbers } from "./calculator.js";

it("17 is 17", () => {
  expect(17).toEqual(17);
});

it("18 is not 17", () => {
  expect(18).not.toEqual(17);
});

it("should get Even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 5, 6, 8]);
  expect(result).toEqual([2, 6, 8]);
});
