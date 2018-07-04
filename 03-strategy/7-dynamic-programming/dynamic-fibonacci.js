
const M = {
  0: 0,
  1: 1,
};
// Fibonnaci using meoization aka Dynamic Programming
function dFibonacci(n) {
  if (!M.hasOwnProperty(n)) {
    M[n] = dFibonacci(n - 1) + dFibonacci(n - 2);
  }
  return M[n];
}

console.log(dFibonacci(0)); // 0
console.log(dFibonacci(1)); // 1
console.log(dFibonacci(2)); // 1
console.log(dFibonacci(3)); // 2
console.log(dFibonacci(4)); // 3
console.log(dFibonacci(6)); // 8
console.log(dFibonacci(10)); // 55
console.log(dFibonacci(15)); // 610