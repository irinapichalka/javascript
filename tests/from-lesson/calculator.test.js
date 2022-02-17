import { calc } from "./calculator.js";

it("Additional operation", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3");
});

it("subtraction operation", () => {
  const result = calc("10 - 2");
  expect(result).toEqual("10 - 2 = 8");
});

it("Multiplication operation", () => {
  const result = calc("2 * 3");
  expect(result).toEqual("2 * 3 = 6");
});

it("Division operation", () => {
  const result = calc("10 / 2");
  expect(result).toEqual("10 / 2 = 5");
});

it("check if argument is string", () => {
  const result = calc(19);
  expect(result).toEqual(null);
});