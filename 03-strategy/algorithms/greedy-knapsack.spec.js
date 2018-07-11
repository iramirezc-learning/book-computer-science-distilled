const assert = require('assert');

const greedyKnapsack = require('./greedy-knapsack');

describe('Algorithm - Greedy Knapsack [Heuristics]', function () {
  const testCases = [
    {
      input: {
        maxWeight: 3,
        items: [
          {
            name: 'Computer',
            weight: 2,
            price: 6000,
          },
          {
            name: 'Speaker',
            weight: 0.5,
            price: 2000,
          },
          {
            name: 'Raspeberry',
            weight: 0.2,
            price: 1500,
          },
          {
            name: 'Mouse',
            weight: 0.5,
            price: 300,
          },
          {
            name: 'Keyboard',
            weight: 0.8,
            price: 500,
          },
          {
            name: 'Tablet',
            weight: 1,
            price: 3000,
          },
          {
            name: 'Smartphone',
            weight: 0.3,
            price: 5000,
          },
          {
            name: 'iPhone',
            weight: 0.4,
            price: 8000,
          }
        ]
      },
      expected: {
        totalWeight: 2.9,
        totalRevenue: 20500,
        itemsInBag: [
          {
            name: 'iPhone',
            weight: 0.4,
            price: 8000,
          },
          {
            name: 'Computer',
            weight: 2,
            price: 6000,
          },
          {
            name: 'Smartphone',
            weight: 0.3,
            price: 5000,
          },
          {
            name: 'Raspeberry',
            weight: 0.2,
            price: 1500,
          },
        ]
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const {items, maxWeight} = input;
    const {itemsInBag, totalWeight, totalRevenue} = expected;

    it(`should return the items: ${itemsInBag.map(i => i.name)}`, function () {
      const result = greedyKnapsack(items, maxWeight);
      const resultRevenue = greedyKnapsack.calculateSalesValue(result);
      const resultWeight = greedyKnapsack.calculateTotalWeight(result);

      assert.equal(resultRevenue, totalRevenue, `Incorrect revenue: ${resultRevenue}`);
      assert.equal(resultWeight, totalWeight, `Incorrect weight: ${totalWeight}`);
      assert.deepEqual(result, itemsInBag, `Given: ${itemsInBag.map(i => i.name)}`);
    });
  });
});