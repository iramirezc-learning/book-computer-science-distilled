
const assert = require('assert');

const dFibonacci = require('./dynamic-fibonacci');

describe('Algorithm - Fibonacci [Dynamic Programming]', function () {
  const testCases = [
    {
      input: 0,
      expected: 0
    },
    {
      input: 1,
      expected: 1
    },
    {
      input: 2,
      expected: 1
    },
    {
      input: 3,
      expected: 2
    },
    {
      input: 4,
      expected: 3
    },
    {
      input: 6,
      expected: 8
    },
    {
      input: 10,
      expected: 55
    },
    {
      input: 15,
      expected: 610
    }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`dFib(${input}) = ${expected}`, function () {
      const result = dFibonacci(input);
      assert.equal(result, expected, `Given: ${result}`);
    });
  });
});
