/**
 * Returns the nth number of the Fibonnacci serie
 * @param {integer} n nth number to calculate
 */
function fibonacci(n) {
  if (n <= 2) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610
