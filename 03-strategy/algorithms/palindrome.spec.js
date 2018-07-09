const assert = require('assert');

const palindrome = require('./palindrome');

describe('Algorithm - Palindrome', function () {
  const testCases = [
    {
      input: '',
      expected: true
    },
    {
      input: 'a',
      expected: true
    },
    {
      input: 'aa',
      expected: true
    },
    {
      input: 'ab',
      expected: false
    },
    {
      input: 'aba',
      expected: true
    },
    {
      input: 'abc',
      expected: false
    },
    {
      input: 'abba',
      expected: true
    },
    {
      input: 'abca',
      expected: false
    },
    {
      input: 'ababa',
      expected: true
    },
    {
      input: 'abaca',
      expected: false
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return: ${expected} for '${input}'`, function () {
      const result = palindrome(input);
      assert.deepEqual(result, expected, `Given ${result}`);
    });
  });
});