const cloneArr = (arr) => {
  if (!Array.isArray(arr)) return null;
  const cloneArr = arr.map((el) => el);
  return cloneArr;
};

console.log(increaseEvenEl([22, 3, 1], 2));
