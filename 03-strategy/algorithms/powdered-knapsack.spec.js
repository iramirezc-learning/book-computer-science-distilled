const assert = require('assert');

const powderedKnapsack = require('./powdered-knapsack');

describe('Algorithm - Powdered Knapsack [Branch and Bound]', function () {
  const testCases = [
    {
      input: {
        maxWeight: 10,
        items: [
          { name: 'A', price: 20, weight: 5 },
          { name: 'B', price: 19, weight: 4 },
          { name: 'C', price: 16, weight: 2 },
          { name: 'D', price: 14, weight: 5 },
          { name: 'E', price: 13, weight: 3 },
          { name: 'F', price: 9, weight: 2 }
        ]
      },
      expected: {
        baggedValue: 52.66,
        itemsByValueWeightRatio: [
          { name: 'C', price: 16, weight: 2, valueWeightRatio: 8.00 },
          { name: 'B', price: 19, weight: 4, valueWeightRatio: 4.75 },
          { name: 'F', price: 9, weight: 2, valueWeightRatio: 4.50 },
          { name: 'E', price: 13, weight: 3, valueWeightRatio: 4.33 },
          { name: 'A', price: 20, weight: 5, valueWeightRatio: 4.00 },
          { name: 'D', price: 14, weight: 5, valueWeightRatio: 2.80 }
        ],
        baggedItems: [
          { name: 'C', price: 16, weight: 2, valueWeightRatio: 8.00, baggedWeight: 2 },
          { name: 'B', price: 19, weight: 4, valueWeightRatio: 4.75, baggedWeight: 4 },
          { name: 'F', price: 9, weight: 2, valueWeightRatio: 4.50, baggedWeight: 2 },
          { name: 'E', price: 13, weight: 3, valueWeightRatio: 4.33, baggedWeight: 2 }
        ],
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const { items, maxWeight } = input;
    const { itemsByValueWeightRatio, baggedItems, baggedValue } = expected;

    it(`should sort items by value/weight ratio`, function () {
      const result = powderedKnapsack.sortByValueWeightRatio(items);

      assert.deepEqual(result, itemsByValueWeightRatio, `Given: ${result.map(i => i.name)}`);
    });

    it(`should return the upper bound`, function () {
      const result = powderedKnapsack(items, maxWeight);
      const { bagItems, bagValue } = result;

      assert.equal(bagValue, baggedValue, `Given: ${bagValue}`);
      assert.deepEqual(bagItems, baggedItems, `Given: ${bagItems.map(i => i.name)}`);
    });

    it(`should keep original items list`, function () {
      const expectedFirstItem = { name: 'A', price: 20, weight: 5 };
      assert.deepEqual(items[0], expectedFirstItem, `Item was changed: ${JSON.stringify(items[0])}`);
    });
  });
})
