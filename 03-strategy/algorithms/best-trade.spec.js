const assert = require('assert');

const bestTrade = require('./best-trade');

describe('Algorithm - Best Trade [Brute Force]', function () {
  const testCases = [
    {
      input: [11, 5, 2, 6, 7, 8, 4, 10, 3, 4, 6, 9, 8, 1, 3],
      expected: {
        maximum: 8,
        buyingDate: 2,
        sellingDate: 7
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const {maximum} = expected;

    it(`should return the maximum: ${maximum}`, function () {
      const result = bestTrade(input);

      assert.deepEqual(result, expected);
    });
  });
});