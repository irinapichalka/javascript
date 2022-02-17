import { getMinSquaredNumber } from "./getMinSquareNumber.js";

it("should get minimal squared numbers of abs array", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

it("should check if array is empty", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should check if it is array of numbers", () => {
  const result = getMinSquaredNumber("text");
  expect(result).toEqual(null);
});
