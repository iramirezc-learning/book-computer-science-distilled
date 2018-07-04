/**
 * Returns the nth number of the Fibonnacci serie
 * @param {integer} n nth number to calculate
 */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610
