const createArrayOfFunctions = (len) => {
  if (!len) return [];
  if (typeof len !== "number") return null;
  const array = [];
  for (let i = 0; i < len; i++) {
    array[i] = function () {
      return array[i];
    };
  }
  return array;
};
console.log(createArrayOfFunctions("щщщщ"));
/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

/*let arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}
console.log(arr[5]);*/
