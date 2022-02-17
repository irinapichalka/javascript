function sum(arr) {
  if (!Array.isArray(array)) return null;
  let result = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  return result;
}

const array = [1, 2, 1];
console.log(sum(array));
