export const reverseArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) return null;
  const squareArr = array.slice().reverse();
  return squareArr;
};

console.log(reverseArray([22, 3, 1]));
