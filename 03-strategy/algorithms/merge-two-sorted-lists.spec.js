const assert = require('assert');

const merge = require('./merge-two-sorted-lists');

describe('Algorithm - Merge Two Sorted Lists', function () {
  const testCases = [
    {
      input: {
        list1: ['Cod', 'Herring', 'Marlin'],
        list2: ['Asp', 'Carp', 'Ide', 'Trout']
      },
      expected: ['Asp', 'Carp', 'Cod', 'Herring', 'Ide', 'Marlin', 'Trout']
    },
    {
      input: {
        list1: [1, 3, 5, 7, 9],
        list2: [0, 2, 4, 6, 8, 10]
      },
      expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const {list1, list2} = input;

    it(`should merge: ${list1.join(', ')} and ${list2.join(', ')}`, function () {
      const result = merge(list1, list2);
      assert.deepEqual(result, expected, `should return: ${expected.join(', ')}. Given ${result.join(', ')}`);
    });
  });
});