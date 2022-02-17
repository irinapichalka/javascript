const getRandomNumbers = (length, from, to) => {
  if(Math.abs(to-from)<1) return null;
  const start = Math.ceil(from);
  const end =  Math.ceil(to);

  return new Array(length)
              .fill()
              .map(el =>  {
                return Math.floor(Math.random()*(end - start) + start);
              });
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
