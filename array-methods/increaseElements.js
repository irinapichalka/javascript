const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;
  const increaseArr = arr.map((el) => {
    if (el % 2 === 0) el += delta;
    return el;
  });
  return increaseArr;
};

console.log(increaseEvenEl([22, 3, 1], 2));
