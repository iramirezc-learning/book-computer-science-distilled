/**
 * pseudo-code: Maximum of three numbers.
 */

/*
function maximum(A, B, C)
  if (A > B)
    if (A > C)
      max <- A
    else
      max <- C
  else
    if (B > C)
      max <- B
    else
      max <- C
  print max
*/

/**
 * Implementation: JS
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
