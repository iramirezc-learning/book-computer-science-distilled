/**
 * Returns the max of three numbers.
 * @param {int} number A
 * @param {int} number B
 * @param {int} number C
 */
function maximum(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}

console.log(maximum(1, 2, 3)); // 3
