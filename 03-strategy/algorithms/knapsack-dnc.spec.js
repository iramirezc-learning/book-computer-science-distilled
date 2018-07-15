const assert = require('assert');

const knapsack = require('./knapsack-dnc');

describe('Algorithm - Knapsack [Divide and Conquer]', function () {
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
    },
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
        totalRevenue: 49
      }
    }
  ];

  testCases.forEach(({ input, expected }) => {
    const { items, maxWeight } = input;
    const { totalRevenue } = expected;

    it(`should return maxRevenue: ${totalRevenue}`, function () {
      const resultRevenue = knapsack(items, maxWeight);

      assert.equal(resultRevenue, totalRevenue, `Incorrect revenue: ${resultRevenue}`);
    });
  });
});
