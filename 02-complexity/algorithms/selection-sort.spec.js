const assert = require('assert');

const selectionSort = require('./selection-sort');

describe('Algorithm - Selection Sort', function () {
  const testCases = [
    {
      input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      input: [5, 5, 5, 5, 5],
      expected: [5, 5, 5, 5, 5]
    }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should sort input: ${input.join(', ')}`, function () {
      selectionSort(input);
      assert.deepEqual(input, expected, `should order: ${expected.join(', ')}. Given ${input.join(', ')}`);
    });
  });
});