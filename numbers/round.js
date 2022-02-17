const multiRound = num => {
  return [Math.floor(Number(num*100))/100, Math.trunc(Number(num*100))/100, Math.ceil(Number(num*100))/100, Math.round(Number(num*100))/100, Number(num.toFixed(2))]
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]