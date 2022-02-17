const squareArray = (array) => {
  if (!Array.isArray(array)) return null;
  const squareArr = array.map((el) => el * el);
  return squareArr;
};

console.log(squareArray([22, 3, 1]));
