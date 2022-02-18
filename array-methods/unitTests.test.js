import { reverseArray } from "./reverseArray.js";
import { withdraw } from "./withdraw.js";

it("should reverse elements in array", () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it("should check if array is empty", () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it("should check if it is array of numbers", () => {
  const result = reverseArray("text");
  expect(result).toEqual(null);
});

it("should check if amount is more than the balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("should withdraw the amount from balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("should check if balances array didn't change", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(balances).toEqual([1400, 87, -6]);
});
