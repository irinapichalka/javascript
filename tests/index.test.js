it("17 in Africa is 17 too", () => {
  expect(17).toEqual(17);
});
it("17 is not 18", () => {
  expect(17).not.toEqual(18);
});
const getEvenNumbers = (arr) => arr.filter((num) => num % 2 == 0);
it("should get only even numbers from array", () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
