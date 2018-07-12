const assert = require('assert');

const dBestTrade = require('./best-trade-bottom-up');

describe('Algorithm - Best Trade [Bottom Up]', function () {
  const testCases = [
    {
      input: [27, 53, 7, 25, 33, 2, 32, 47, 43],
      expected: {
        maximum: 45,
        buyingDate: 5,
        sellingDate: 7
      }
    },
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
    const { maximum } = expected;

    it(`should return the maximum: ${maximum}`, function () {
      const result = dBestTrade(input);

      assert.deepEqual(result, expected);
    });
  });
});
