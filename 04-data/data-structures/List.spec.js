const assert = require('assert');

const List = require('./List');

describe('Data Structure - List', function () {
  /** @type {List} */
  let list;

  const EMPTY_LIST = '[Empty List]';
  const EMPTY_LIST_ERROR = /^Error: List is empty\.$/;
  const POSITIVE_INTEGER_ERROR = /^Error: ".+" should be an Integer greater than or equal to 0\. Given: .+$/;
  const SLICE_ERROR = /^Error: start: .+ should not be greater than end: .+$/

  beforeEach(function () {
    list = new List();
  });

  it('should be initialized correctly', function () {
    assert.ok(list, 'list is not initialized');
  });

  it('should not have enumerable properties', function() {
    const properties = Object.keys(list);
    const expectedProperties = [];

    assert.deepEqual(properties, expectedProperties, 'properties do not match');
  });

  it('should start empty', function () {
    assert.equal(list.isEmpty(), true, 'list did not empty');
    assert.equal(list.length, 0, 'length should be 0');
  });

  describe('insert, get & toString methods', function () {
    it('should insert the first item correctly', function () {
      const val = 1;
      list.insert(val);
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.get(), val, 'invalid first item');
      assert.equal(list.get(0), val, 'invalid first item');
      assert.equal(list.length, 1, 'length should be 1');
    });

    it('should throw an error when trying to get on the empty list', function () {
      assert.throws(() => list.get(), EMPTY_LIST_ERROR, 'list is not throwing empty error');
    });

    it('should throw an error when trying to get on an invalid position', function () {
      list.insert(true);
      assert.throws(() => list.get(-1), POSITIVE_INTEGER_ERROR, 'list is not throwing empty error');
      assert.throws(() => list.get(null), POSITIVE_INTEGER_ERROR, 'list is not throwing empty error');
    });

    it('should throw an error when trying to insert on an invalid position', function () {
      assert.throws(() => list.insert(2, -1), POSITIVE_INTEGER_ERROR, 'list is not throwing empty error for: -1');
      assert.throws(() => list.insert(3, false), POSITIVE_INTEGER_ERROR, 'list is not throwing empty error for: false');
    });

    it('should insert multiple items correctly', function () {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach((d, k) => list.insert(d, k));

      const retrievedData = [];
      let currentPosition = 0;

      while (currentPosition < data.length) {
        retrievedData.push(list.get(currentPosition++));
      }

      assert.equal(list.length, data.length, `length should be ${data.length}`);
      assert.deepEqual(retrievedData, data, 'incorrect retrieved data');
    });

    it('should return the list as string', function () {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      assert.equal(list.toString(), EMPTY_LIST, 'incorrect empty list as string');

      data.forEach((d, k) => list.insert(d, k));

      assert.equal(list.length, data.length, `length should be ${data.length}`);
      assert.equal(list.toString(), data.join(','), 'incorrect list as string');
    });

    it('should insert items before the first item correctly', function () {
      const val1 = 1;

      list.insert(val1);
      assert.equal(list.get(0), val1, `invalid val1: ${list.get(0)}`);

      const val2 = 2;

      list.insert(val2, 0);
      assert.equal(list.get(0), val2, `invalid val2: ${list.get(0)}`);

      const val3 = 3;

      list.insert(val3, 0);
      assert.equal(list.get(0), val3, `invalid val3: ${list.get(0)}`);

      assert.equal(list.length, 3, `length should be ${3}`);
      assert.equal(list.toString(), [val3, val2, val1], `incorrect order: ${list.toString()}`);
    });

    it('should insert items at the end correctly', function () {
      const val1 = 1;

      list.insert(val1);
      assert.equal(list.get(), val1, `invalid val1: ${list.get(0)}`);

      const val2 = 2;

      list.insert(val2);
      assert.equal(list.get(1), val2, `invalid val2: ${list.get(1)}`);

      const val3 = 3;

      list.insert(val3);
      assert.equal(list.get(2), val3, `invalid val3: ${list.get(2)}`);

      assert.equal(list.length, 3, `length should be ${3}`);
      assert.equal(list.toString(), [val1, val2, val3], `incorrect order: ${list.toString()}`);
    });
  });

  describe('insert, get & remove methods', function () {
    it('should throw an exception if trying to remove on a empty list', function () {
      assert.throws(() => list.remove(5), EMPTY_LIST_ERROR, 'remove is not throwing an error');
    });

    it('should remove the last item if the position is greater than the total length', function () {
      list.insert(true);
      assert.equal(list.length, 1, `length should be ${1}`);
      assert.equal(list.remove(5), true, 'incorrect removed value');
      assert.equal(list.length, 0, `length should be ${0}`);
    });

    it('should remove the first item correctly', function () {
      const value = 1;
      list.insert(value);
      assert.equal(list.length, 1, `length should be ${1}`);
      assert.equal(list.remove(0), value, 'incorrect removed value');
      assert.equal(list.length, 0, `length should be ${0}`);
      assert.equal(list.isEmpty(), true, 'list should be empty');
    });

    it('should remove the middle item correctly', function () {
      const val1 = 1;
      const val2 = 2;
      const val3 = 3;

      list.insert(val1).insert(val2).insert(val3);
      assert.equal(list.length, 3, `length should be ${3}`);
      assert.equal(list.remove(1), val2, 'incorrect removed value');
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.length, 2, `length should be ${2}`);
      assert.equal(list.toString(), [val1, val3], 'incorrect list as string');
    });

    it('should remove the last item correctly', function () {
      const val1 = 1;
      const val2 = 2;
      const val3 = 3;

      list.insert(val1).insert(val2).insert(val3);
      assert.equal(list.length, 3, `length should be ${3}`);

      assert.equal(list.remove(2), val3, 'incorrect removed value');
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.toString(), [val1, val2], 'incorrect list as string');

      assert.equal(list.remove(1), val2, 'incorrect removed value2');
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.toString(), [val1], 'incorrect list as string');

      assert.equal(list.remove(0), val1, 'incorrect removed value1');
      assert.equal(list.isEmpty(), true, 'list should be empty');
      assert.equal(list.toString(), EMPTY_LIST, 'incorrect list as string');

      assert.equal(list.length, 0, `length should be ${0}`);
    });

    it('should remove the last item correctly if not position provided', function () {
      const val1 = 1;
      const val2 = 2;
      const val3 = 3;

      list.insert(val1).insert(val2).insert(val3);
      assert.equal(list.length, 3, `length should be ${3}`);

      assert.equal(list.remove(), val3, 'incorrect removed value3');
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.toString(), [val1, val2], 'incorrect list as string');

      assert.equal(list.remove(), val2, 'incorrect removed value2');
      assert.equal(list.isEmpty(), false, 'list should not be empty');
      assert.equal(list.toString(), [val1], 'incorrect list as string');

      assert.equal(list.remove(), val1, 'incorrect removed value1');
      assert.equal(list.isEmpty(), true, 'list should be empty');
      assert.equal(list.toString(), EMPTY_LIST, 'incorrect list as string');

      assert.equal(list.length, 0, `length should be ${0}`);
    });

    it('should insert and remove multiple items', function () {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      assert.equal(list.length, data.length, `length should be ${data.length}`);
      assert.equal(list.toString(), data.join(','), 'incorrect list as string');

      const expectedData = [];

      while (!list.isEmpty()) {
        expectedData.unshift(list.remove());
      }

      assert.equal(list.isEmpty(), true, 'list should be empty');
      assert.equal(list.length, 0, `length should be ${0}`);
      assert.equal(list.toString(), EMPTY_LIST, 'incorrect empty list as string');
      assert.deepEqual(expectedData, data, 'incorrect retrieved data');
    });
  });

  describe('sort, reverse & slice methods', function() {
    it('should sort the items in the list', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      data.sort();
      list.sort();

      assert.equal(list.toString(), data.join(','), 'list should be sorted');
    });

    it('should reverse the items in the list', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      data.reverse();
      list.reverse();

      assert.equal(list.toString(), data.join(','), 'list should be reversed');
    });

    it('should throw an exception if start or end are invalid', function() {
      assert.throws(() => list.slice(-1), POSITIVE_INTEGER_ERROR, 'start parameter is not throwing an exception');
      assert.throws(() => list.slice(null), POSITIVE_INTEGER_ERROR, 'start parameter is not throwing an exception');
      assert.throws(() => list.slice(1, -1), POSITIVE_INTEGER_ERROR, 'end parameter is not throwing an exception');
      assert.throws(() => list.slice(1, null), POSITIVE_INTEGER_ERROR, 'end parameter is not throwing an exception');
      assert.throws(() => list.slice(1, 0), SLICE_ERROR, 'start > end is not throwing an exception');
    });

    it('should slice an empty list as a empty instance of List', function() {
      let result = list.slice(0, 0);
      assert.equal(result instanceof List, true, 'subset should be an instance of a list');
      assert.equal(result.length, 0, 'subset should be have length 0');
      assert.equal(result.isEmpty(), true, 'subset should be empty');
      assert.equal(result.toString(), EMPTY_LIST, 'incorrect empty list as string');

      result = list.slice();
      assert.equal(result instanceof List, true, 'subset should be an instance of a list');
      assert.equal(result.length, 0, 'subset should be have length 0');
      assert.equal(result.isEmpty(), true, 'subset should be empty');
      assert.equal(result.toString(), EMPTY_LIST, 'incorrect empty list as string');
    });

    it('should slice the first element', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      let result = list.slice(0, 0);

      assert.equal(result.isEmpty(), false, 'subset should not be empty');
      assert.equal(result.length, 1, 'subset should be have length 1');
      assert.equal(result.toString(), data[0], 'incorrect subset as string');
    });

    it('should slice the last element', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      let result = list.slice(list.length - 1); // index 8

      assert.equal(result.isEmpty(), false, 'subset should not be empty');
      assert.equal(result.length, 1, 'subset should be have length 1');
      assert.equal(result.toString(), data[data.length - 1], 'incorrect subset as string');
    });

    it('should slice middle elements except first and last', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      let result = list.slice(1, list.length - 2); // inclusive
      let expectedResult = data.slice(1, data.length - 1); // exclusive

      assert.equal(result.isEmpty(), false, 'subset should not be empty');
      assert.equal(result.length, expectedResult.length, `subset should be have length ${expectedResult.length}`);
      assert.equal(result.toString(), expectedResult.join(','), 'incorrect subset as string');
    });

    it('should slice all elements of a list', function() {
      const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

      data.forEach(i => list.insert(i));

      let result = list.slice();

      // assert.equal(result.length, data.length, `subset should be have length ${data.length}`);
      assert.equal(result.toString(), data.join(','), 'incorrect subset as string');
    });
  });
});
