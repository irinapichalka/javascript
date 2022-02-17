const customers = {
    'customer-id-1':{
        name: 'William',
        age: 54,
    },
    'customer-id-2':{
        name: 'Tom',
        age: 17,
    },
}
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}
const getCustomersList = obj => {
  const copyObj = Object.assign({}, obj);
  const custumersId = Object.keys(copyObj);
  const custumersList = Object.values(copyObj);

  return custumersList
  .map((el,index) => addProperty(el, 'id', custumersId[index]))
  .sort(( obj1, obj2 ) =>  obj1.age - obj2.age);
};

getCustomersList(customers);
console.log(getCustomersList(customers));