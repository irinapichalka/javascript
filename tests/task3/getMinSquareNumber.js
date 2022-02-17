export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || typeof arr === "string" || arr.length === 0)
    return null;
  const absArray = arr.map((el) => Math.abs(el));
  let min = +Infinity;
  absArray.forEach((element) => {
    if (element < min) min = element;
    return min;
  });
  return min * min;
};
