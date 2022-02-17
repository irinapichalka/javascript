function cleanTransactionsList(arrayTransactions) {
  const regex = RegExp('[a-z]');
  const textWithoutLetters = arrayTransactions.filter(el => !(regex.test(String(el))));
  const textWithoutSpaces = textWithoutLetters.map((el) => {
     const elementWithoutSpaces = String(el).trim();
     return '$'+ Number(el).toFixed(2);
     
  });
  return textWithoutSpaces;
}
console.log(cleanTransactionsList(["  1.9", "16.4", 17, "1 dollar"]));
