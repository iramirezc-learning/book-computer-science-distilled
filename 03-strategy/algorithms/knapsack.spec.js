const assert = require('assert');

const knapsack = require('./knapsack');

describe('Algorithm - Knapsack [Brute Force]', function () {
  const testCases = [
    {
      input: {
        maxWeight: 4,
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
        totalWeight: 3.9,
        totalRevenue: 23500,
        itemsInBag: [
          {
            name: 'Computer',
            weight: 2,
            price: 6000,
          },
          {
            name: 'Raspeberry',
            weight: 0.2,
            price: 1500,
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
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const {items, maxWeight} = input;
    const {itemsInBag, totalWeight, totalRevenue} = expected;

    it(`should return the combination: ${items.map(i => i.name)}`, function () {
      const result = knapsack(items, maxWeight);
      const resultRevenue = knapsack.calculateSalesValue(result);
      const resultWeight = knapsack.calculateTotalWeight(result);

      assert.equal(resultRevenue, totalRevenue, `Incorrect revenue: ${resultRevenue}`);
      assert.equal(resultWeight, totalWeight, `Incorrect weight: ${totalWeight}`);
      assert.deepEqual(result, itemsInBag, `Given: ${itemsInBag.map(i => i.name)}`);
    });
  });
});