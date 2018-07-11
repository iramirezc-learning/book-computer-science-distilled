const assert = require('assert');

const bestTrade = require('./best-trade-divide-n-conquer');

describe('Algorithm - Best Trade [Divide and Conquer]', function () {
  const testCases = [
    {
      input: [27, 53, 7, 25, 33, 2, 32, 47, 43],
      expected: 45
    },
    {
      input: [11, 5, 2, 6, 7, 8, 4, 10, 3, 4, 6, 9, 8, 1, 3],
      expected: 8
    }
  ];

  testCases.forEach(({ input, expected }) => {

    it(`should return the maximum: ${expected}`, function () {
      const result = bestTrade(input);

      assert.deepEqual(result, expected);
    });
  });
});
