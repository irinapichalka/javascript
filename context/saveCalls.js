function saveCalls(func) {
  const calls = [];
  function withMemory(...args) {
    calls.push(args);
    return func.apply(this, args);
  }
  withMemory.calls = calls;
  /* console.log(withMemory.calls);*/

  return withMemory;
}
function test(a, b) {
  return Math.sqrt(a * a + b * b);
}
const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);
console.log(testWithMemory(9, 1));
console.log(testWithMemory(4, 2));
