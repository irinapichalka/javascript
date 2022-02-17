const withdraw = (clients, balances, client, amount) => {
  let index = clients.indexOf(client);
  if (balances[index] >= amount) return -1;
  return balances[index] - amount;
};
