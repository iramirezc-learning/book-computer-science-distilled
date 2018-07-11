
const M = { 0: 0, 1: 1 };

 /**
 * Returns the nth number of the Fibonacci series
 * Technique: Memoization aka Dynamic Programming
 * @param {number} n nth number to calculate
 */
function dFibonacci(n) {
  if (!M.hasOwnProperty(n)) {
    M[n] = dFibonacci(n - 1) + dFibonacci(n - 2);
  }

  return M[n];
}

module.exports = dFibonacci;
