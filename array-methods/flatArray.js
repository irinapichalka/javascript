const flatArray = (arr) => {
  const flatArr = arr.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
  /*return flatArr;*/
  return flatArr.slice().sort((a, b) => a - b);
};

const array = [3, 4, 8, [6, 6], 8, 5];
console.log(flatArray(array));
