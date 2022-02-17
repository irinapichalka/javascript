const filterNames = (arr, text) => {
  const containText = arr.filter((element) => {
   return (element.includes(text) && element.length > 5);
  });
  return containText;
};

console.log(filterNames(["aaa", "aaaaaaaaa"], "aa"));
