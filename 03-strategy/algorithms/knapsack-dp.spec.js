const assert = require('assert');

const dKnapsack = require('./knapsack-dp');

describe('Algorithm - Knapsack [Dynamic Programming]', function () {
  const testCases = [
    {
      input: {
        maxWeight: 10,
        items: []
      },
      expected: {
        totalRevenue: 0
      }
    },
    {
      input: {
        maxWeight: 10,
        items: [
          { name: 'A', weight: 5, price: 500 },
          { name: 'B', weight: 5, price: 400 },
          { name: 'C', weight: 10, price: 1000 }
        ]
      },
      expected: {
        totalRevenue: 1000
      }
    },
    {
      input: {
        maxWeight: 10,
        items: [
          { name: 'A', weight: 5, price: 1000 },
          { name: 'B', weight: 5, price: 1000 },
          { name: 'C', weight: 10, price: 1000 }
        ]
      },
      expected: {
        totalRevenue: 2000
      }
    },
    {
      input: {
        maxWeight: 20,
        items: [
          { name: 'A', weight: 5, price: 1000 },
          { name: 'B', weight: 5, price: 1000 },
          { name: 'C', weight: 10, price: 1000 }
        ]
      },
      expected: {
        totalRevenue: 3000
      }
    },
    {
      input: {
        maxWeight: 10,
        items: [
          { name: 'A', weight: 11, price: 300 },
          { name: 'B', weight: 11, price: 400 },
          { name: 'C', weight: 11, price: 500 }
        ]
      },
      expected: {
        totalRevenue: 0
      }
    },
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
        totalRevenue: 23500
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const { items, maxWeight } = input;
    const { totalRevenue } = expected;

    it(`should return maxRevenue: ${totalRevenue}`, function () {
      const resultRevenue = dKnapsack(items, maxWeight);

      assert.equal(resultRevenue, totalRevenue, `Incorrect revenue: ${resultRevenue}`);
    });
  });
});
