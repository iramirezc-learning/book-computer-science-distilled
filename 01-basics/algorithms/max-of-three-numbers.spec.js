const assert = require('assert');

const maxOfThree = require('./max-of-three-numbers');

describe('Algorithm - Max of three numbers', function () {
  const testCases = [
    {
      input: [1, 2, 3],
      expected: 3
    },
    {
      input: [9, 8, 7],
      expected: 9
    },
    {
      input: [4, 6, 5],
      expected: 6
    },
    {
      input: [5, 5, 5],
      expected: 5
    }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return max: ${expected} for input: ${input.join(' ')}`, function () {
      assert.equal(maxOfThree.apply(null, input), expected, `should return max: ${expected}`);
    })
  })
})