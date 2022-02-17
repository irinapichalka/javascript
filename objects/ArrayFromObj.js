 /*eslint-disable guard-for-in 
 eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/*const concatProps = obj => {
    let array = [];
        for(let prop in obj){
            array.push(obj[prop]);
        }
  return array; 
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
*/
/* eslint-disable dot-notation */

/**
 * Для решения этой задачи нужно использовать как квадратные скобки так и точки для чтения свойства объекта. В реальных проектах
 * более предпочтительный вариант - обращение через точку. Но нам нужно научиться работать со всеми опциями.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 */

const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

/* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
console.log(transaction.currency);
/* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
console.log(transaction['value']);
const key = 'operation';
//transaction.key = key;
/* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */

console.log(transaction[key]);
/* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
console.log(transaction['agent']['company']);
/* 5. Выведи в консоль значение свойства 'country' используя точку */
console.log(transaction.agent.country);
/* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
console.log(transaction['operation time']);