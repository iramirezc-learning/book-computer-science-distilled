/**
 * Returns a recursive copy of an array.
 * @param {array} array to copy
 */
function copyArray(array) {
  const copy = [];

  array.forEach((e, k) => {
    if (Array.isArray(e)) {
      copy[k] = copyArray(e);
    } else {
      copy[k] = e;
    }
  });

  return copy;
}

/**
 * Creates a power set of a set.
 * Power Set: is a set of all the subsets of a set.
 * Running Time: O(2^n)
 * Technique: Iteration
 * @param {array} set 
 */
function powerSet(set) {
  let PS = [];

  PS.push([]);

  set.forEach(item => {
    let newSubset = copyArray(PS);

    newSubset.forEach(subset => {
      subset.push(item);
    });

    PS = PS.concat(newSubset);
  });

  return PS;
}

module.exports = powerSet;