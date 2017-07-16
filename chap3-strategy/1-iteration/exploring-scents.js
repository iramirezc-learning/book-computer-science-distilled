const flowers = ['A', 'B', 'C'];

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
 * Creates a power set of fragances.
 * O(2^n)
 * @param {array} flowers 
 */
function powerSet(flowers) {
  let fragances = [];

  fragances.push([]);

  flowers.forEach(flower => {
    let newFragances = copyArray(fragances);

    newFragances.forEach(fragance => {
      fragance.push(flower);
    });

    fragances = fragances.concat(newFragances);
  });

  return fragances;
}

const totalFragances = powerSet(flowers);

console.log(totalFragances);
// []
// ['A']
// ['B']
// ['A', 'B']
// ['C']
// ['A', 'C']
// ['B', 'C']
// ['A', 'B', 'C']

console.log(totalFragances.length); // 8
