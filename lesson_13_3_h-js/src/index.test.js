import { reverseArray, withdraw, getAdults } from "./index.js";

it("check is it array", () => {
  const result = reverseArray("foo");
  expect(result).toEqual(null);
});

it("check is aray reversed", () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it("check is defolt aray changed", () => {
  const arg = [1, 2, 3, 4];
  const result = reverseArray(arg);
  expect(result).not.toEqual(arg);
});

it("should return positive result", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("should return negative result", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("should not withdraw if result is negative", () => {
  const clients = ["Ann", "John", "User"];
  const balances = [1400, 87, -6];
  const client = "User";
  const amount = 10;
  let result = withdraw(clients, balances, client, amount);
  if (result === -1) {
    result = balances[clients.lastIndexOf(client)];
  }
  expect(result).toEqual(balances[clients.lastIndexOf(client)]);
});

it("should return object of adults persons", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should return empty object if argument is emptu object", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it("should not change initial object", () => {
  const initObj = { "John Doe": 19, Tom: 17, Bob: 18 };
  const result = getAdults(initObj);
  expect(result).not.toEqual(initObj);
});
