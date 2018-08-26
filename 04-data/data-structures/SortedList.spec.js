const assert = require('assert');

const SortedList = require('./SortedList');

describe('Data Structure - SortedList', function () {
  /**
   * @type {SortedList}
   * @private
   */
  let sortedList;

  const EMPTY_LIST = '[Empty SortedList]';
  const EMPTY_LIST_ERROR = /^Error: SortedList is empty\.$/;
  const POSITIVE_INTEGER_ERROR = /^Error: ".+" should be an Integer greater than or equal to 0\. Given: .+$/;

  beforeEach(function () {
    sortedList = new SortedList();
  });

  it('should be initialized correctly', function () {
    assert.ok(sortedList, 'sortedList is not initialized');
  });

  it('should not have enumerable properties', function () {
    const properties = Object.keys(sortedList);
    const expectedProperties = [];

    assert.deepEqual(properties, expectedProperties, 'properties do not match');
  });

  it('should start empty', function () {
    assert.equal(sortedList.isEmpty(), true, 'sortedList is not empty');
    assert.equal(sortedList.length, 0, 'length should be 0');
    assert.equal(sortedList.toString(), EMPTY_LIST, 'incorrect empty sortedList as string');
  });

  it('should throw an error when trying to get an item in the empty sortedList', function () {
    assert.throws(() => sortedList.get(), EMPTY_LIST_ERROR, 'get sortedList is not throwing empty error');
  });

  it('should throw an error when trying to remove an item in the empty sortedList', function () {
    assert.throws(() => sortedList.remove(), EMPTY_LIST_ERROR, 'remove sortedList is not throwing empty error');
  });

  it('should insert and remove the first item correctly', function () {
    const val = 1;
    sortedList.insert(val);
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.get(), val, 'invalid first item get()');
    assert.equal(sortedList.get(0), val, 'invalid first item get(0)');
    assert.equal(sortedList.length, 1, 'length should be 1');
    assert.equal(sortedList.toString(), [val], 'incorrect sortedList as string');

    assert.equal(sortedList.remove(), val, 'invalid first item remove()');
    assert.equal(sortedList.isEmpty(), true, 'sortedList should be empty');
    assert.equal(sortedList.length, 0, 'length should be 0');
    assert.equal(sortedList.toString(), EMPTY_LIST, 'incorrect empty sortedList as string');
  });

  it('should throw an error when trying to get on an invalid position', function () {
    sortedList.insert(true);
    assert.throws(() => sortedList.get(-1), POSITIVE_INTEGER_ERROR, 'sortedList is not throwing empty error');
    assert.throws(() => sortedList.get(null), POSITIVE_INTEGER_ERROR, 'sortedList is not throwing empty error');
  });

  it('should throw an error when trying to remove on an invalid position', function () {
    sortedList.insert(true);
    assert.throws(() => sortedList.remove(-1), POSITIVE_INTEGER_ERROR, 'sortedList is not throwing empty error');
    assert.throws(() => sortedList.remove(null), POSITIVE_INTEGER_ERROR, 'sortedList is not throwing empty error');
  });

  it('should insert multiple items correctly in lexicopgraphical order', function () {
    const data = ['c', 1, 'b', 10, 'd', ' a', 'aa', 'ab', 0, 5, 4, 3, false, {}, [], 'hello'];

    data.forEach(d => sortedList.insert(d));

    const retrievedData = [];
    let currentPosition = 0;

    while (currentPosition < data.length) {
      retrievedData.push(sortedList.get(currentPosition++));
    }

    data.sort();

    assert.equal(sortedList.length, data.length, `length should be ${data.length}`);
    assert.deepEqual(retrievedData, data, 'incorrect retrieved data');
    assert.equal(sortedList.toString(), data.join(','), 'incorrect sortedList as string');
  });

  it('should insert items before the first item correctly', function () {
    const val1 = 1;

    sortedList.insert(val1);
    assert.equal(sortedList.get(0), val1, `invalid val1: ${sortedList.get(0)}`);

    const val2 = 0;

    sortedList.insert(val2);
    assert.equal(sortedList.get(0), val2, `invalid val2: ${sortedList.get(0)}`);

    const val3 = -1;

    sortedList.insert(val3);
    assert.equal(sortedList.get(0), val3, `invalid val3: ${sortedList.get(0)}`);

    assert.equal(sortedList.length, 3, `length should be ${3}`);
    assert.equal(sortedList.toString(), [val3, val2, val1], `incorrect order: ${sortedList.toString()}`);
  });

  it('should insert items at the end correctly', function () {
    const val1 = 1;

    sortedList.insert(val1);
    assert.equal(sortedList.get(), val1, `invalid val1: ${sortedList.get()}`);

    const val2 = 2;

    sortedList.insert(val2);
    assert.equal(sortedList.get(1), val2, `invalid val2: ${sortedList.get(1)}`);

    const val3 = 3;

    sortedList.insert(val3);
    assert.equal(sortedList.get(2), val3, `invalid val3: ${sortedList.get(2)}`);

    assert.equal(sortedList.length, 3, `length should be ${3}`);
    assert.equal(sortedList.toString(), [val1, val2, val3], `incorrect order: ${sortedList.toString()}`);
  });

  it('should remove the last item if the position is greater than the total length', function () {
    sortedList.insert(true);
    assert.equal(sortedList.length, 1, `length should be ${1}`);
    assert.equal(sortedList.remove(5), true, 'incorrect removed value');
    assert.equal(sortedList.length, 0, `length should be ${0}`);
  });

  it('should remove the first item correctly', function () {
    const value = 1;
    sortedList.insert(value);
    assert.equal(sortedList.length, 1, `length should be ${1}`);
    assert.equal(sortedList.remove(0), value, 'incorrect removed value');
    assert.equal(sortedList.length, 0, `length should be ${0}`);
    assert.equal(sortedList.isEmpty(), true, 'sortedList should be empty');
  });

  it('should remove the middle item correctly', function () {
    const val1 = 1;
    const val2 = 2;
    const val3 = 3;

    sortedList.insert(val1).insert(val2).insert(val3);
    assert.equal(sortedList.length, 3, `length should be ${3}`);
    assert.equal(sortedList.remove(1), val2, 'incorrect removed value');
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.length, 2, `length should be ${2}`);
    assert.equal(sortedList.toString(), [val1, val3], 'incorrect sortedList as string');
  });

  it('should remove the last item correctly', function () {
    const val1 = 1;
    const val2 = 2;
    const val3 = 3;

    sortedList.insert(val1).insert(val2).insert(val3);
    assert.equal(sortedList.length, 3, `length should be ${3}`);

    assert.equal(sortedList.remove(2), val3, 'incorrect removed value');
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.toString(), [val1, val2], 'incorrect sortedList as string');

    assert.equal(sortedList.remove(1), val2, 'incorrect removed value2');
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.toString(), [val1], 'incorrect sortedList as string');

    assert.equal(sortedList.remove(0), val1, 'incorrect removed value1');
    assert.equal(sortedList.isEmpty(), true, 'sortedList should be empty');
    assert.equal(sortedList.toString(), EMPTY_LIST, 'incorrect sortedList as string');

    assert.equal(sortedList.length, 0, `length should be ${0}`);
  });

  it('should remove the last item correctly if not position provided', function () {
    const val1 = 1;
    const val2 = 2;
    const val3 = 3;

    sortedList.insert(val1).insert(val2).insert(val3);
    assert.equal(sortedList.length, 3, `length should be ${3}`);

    assert.equal(sortedList.remove(), val3, 'incorrect removed value3');
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.toString(), [val1, val2], 'incorrect sortedList as string');

    assert.equal(sortedList.remove(), val2, 'incorrect removed value2');
    assert.equal(sortedList.isEmpty(), false, 'sortedList should not be empty');
    assert.equal(sortedList.toString(), [val1], 'incorrect sortedList as string');

    assert.equal(sortedList.remove(), val1, 'incorrect removed value1');
    assert.equal(sortedList.isEmpty(), true, 'sortedList should be empty');
    assert.equal(sortedList.toString(), EMPTY_LIST, 'incorrect sortedList as string');

    assert.equal(sortedList.length, 0, `length should be ${0}`);
  });

  it('should insert and remove multiple items', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    data.forEach(i => sortedList.insert(i));

    assert.equal(sortedList.length, data.length, `length should be ${data.length}`);

    const expectedData = [];

    while (!sortedList.isEmpty()) {
      expectedData.unshift(sortedList.remove());
    }

    assert.equal(sortedList.isEmpty(), true, 'sortedList should be empty');
    assert.equal(sortedList.length, 0, `length should be ${0}`);
    assert.equal(sortedList.toString(), EMPTY_LIST, 'incorrect empty sortedList as string');
    assert.deepEqual(expectedData, data.sort(), 'incorrect retrieved data');
  });
});
