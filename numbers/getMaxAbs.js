const getMaxAbsoluteNumber = (arr) => {
  if (!isArray(arr)) return null;
  const absArray = arr.map((el) => Math.abs(el));
  let max = -Infinity;
  arr.forEach((element) => {
    if (element > max) max = element;
    return max;
  });
  return max;
  гоюд;
};
