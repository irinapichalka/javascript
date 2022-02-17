/* Вернуть число - суму всех транзакций*/
const getTotalRevenue = transactions => {
  const result = transactions.map(obj => {
    return obj['amount'];

    })
const sumAmount = result.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0);
return sumAmount;
  
  };

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
