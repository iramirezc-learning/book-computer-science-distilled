/**
 * Returns the nth number of the Fibonnacci serie
 * Technique: Recursion
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

module.exports = fibonacci
