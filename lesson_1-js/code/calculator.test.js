import { calc } from "./calculator.js";

it("should return null if the argument is not a string", () => {
  const result = calc(5);
  expect(result).toEqual(null);
});

it("should return the risalt of operation: +", () => {
  const result = calc("15 + 3");
  expect(result).toEqual("15 + 3 = 18");
});

it("should return the risalt of operation: -", () => {
  const result = calc("15 - 3");
  expect(result).toEqual("15 - 3 = 12");
});

it("should return the risalt of operation: *", () => {
  const result = calc("15 * 3");
  expect(result).toEqual("15 * 3 = 45");
});

it("should return the risalt of operation: /", () => {
  const result = calc("15 / 3");
  expect(result).toEqual("15 / 3 = 5");
});