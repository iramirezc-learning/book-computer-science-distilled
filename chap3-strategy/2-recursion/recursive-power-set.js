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

var testCases = [
  { input: [], result: 1 },
  { input: ['a'], result: 2 },
  { input: ['a', 'b'], result: 4 },
  { input: ['a', 'b', 'c'], result: 8 },
  { input: ['a', 'b', 'c', 'd'], result: 16 },
  { input: ['a', 'b', 'c', 'd', 'e'], result: 32 }
];

testCases.forEach(test => {
  const result = recursivePowerSet(test.input);
  console.log('result->', result);
  console.log('PASS ->', result.length === test.result);
})