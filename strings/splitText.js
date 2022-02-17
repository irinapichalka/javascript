const splitText = (text, len) => {
  if (typeof text !== "string") return null;
  if (len === undefined) len = 10;
  let newString = "";
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) break;
    const upperCaseText = chunk[0].toUpperCase() + chunk.slice(1) + "\n";
    // console.log(chunk[0].toUpperCase)
    newString += upperCaseText;
    startPosition += len;
  }
  return newString;
};
console.log(splitText("sdhndjkhfdhfjdcndcnbc", 4));
console.log(splitText("sdhndjkhfdhfjdcndcnbc"));
