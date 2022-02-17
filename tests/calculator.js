export const getSquaredArray = (array) => {
  return array.map((num) => num * num);
};
export const getOddNumbers = (array) => {
  return array.filter((num) => num % 2 === 1);
};
export default (a, b) => a + b;
