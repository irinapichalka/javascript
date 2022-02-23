function sumOfSquares() {
  return [...arguments]
    .map((el) => el * el)
    .reduce((acc, elem) => {
      return acc + elem;
    }, 0);
}
console.log(sumOfSquares(2, 3, 4, 5));
