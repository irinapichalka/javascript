const splitString = (text, len = 10) => {
  if (typeof text !== "string") return null;
  const array = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) break;
    if (chunk.length !== len) {
      const lastChunk = chunk.padEnd(len, ".");
      array.push(lastChunk[0].toUpperCase() + lastChunk.slice(1));
      break;
    }
    array.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return array;
};
console.log(splitString("abcd efgh", 4));
