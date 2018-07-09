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
 * Creates a power set of a set recursively.
 * Technique: Recursion
 * @param {array} set
 */
function recursivePowerSet(set) {
  if (set.length === 0) {
    return [[]];
  }

  let newSubset;

  while (set.length) {
    const item = set.pop();
    const subset = recursivePowerSet(set);

    newSubset = copyArray(subset);

    subset.forEach(s => {
      s.push(item);
    });

    newSubset = newSubset.concat(subset);
  }

  return newSubset;
}

module.exports = recursivePowerSet;