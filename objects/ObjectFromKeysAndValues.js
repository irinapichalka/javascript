function buildObject(keysList, valuesList) {
const obj = {};
return keysList.reduce(function (obj, key, index) {
    obj[key] = valuesList[index];
    return obj;
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values)
console.log(result);