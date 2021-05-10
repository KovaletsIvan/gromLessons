import getMinSquaredNumber from "./getMinSquaredNumber";

it("should return null if array is empty", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should return null if item is string", () => {
  const result = getMinSquaredNumber("");
  expect(result).toEqual(null);
});

it("should return min squared number", () => {
  const result = getMinSquaredNumber([2, 4, 6]);
  expect(result).toEqual(4);
});
