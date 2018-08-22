const assert = require('assert');

const Set = require('./Set');

describe('Data Structure - Set', function () {
  /** @type {Set} */
  let set;

  const NAN_ERROR = /^TypeError: Sorry\. I do not support NaN values\.$/;

  beforeEach(function () {
    set = new Set();
  });

  it('should be initialized correctly', function () {
    assert.ok(set, 'set is not intialized');
  });

  it('should not have enumerable properties', function () {
    const properties = Object.keys(set);
    const expectedProperties = [];

    assert.deepEqual(properties, expectedProperties, 'properties do not match');
  });

  it('should start empty', function () {
    assert.equal(set.size, 0, 'set should start with size 0');
  });

  it('should add a value correctly', function () {
    const value = 1;
    set.add(value);
    assert.equal(set.size, 1, `set should have size: ${1}`);
  });

  it('should have a value correctly', function () {
    const value = 1;
    set.add(value);
    assert.equal(set.has(value), true, `set should has the value: ${value}`);
  });

  it('should not add duplicated value', function () {
    const value = 'some value';
    set.add(value);
    set.add(value);
    assert.equal(set.size, 1, `set should have size: ${1}`);
    assert.equal(set.has(value), true, `set should has the value: ${value}`);
  });

  it('should not add a NaN to the set', function () {
    const value = NaN;
    assert.throws(() => set.add(value), NAN_ERROR, 'set.add is not throwing NaN type error');
  });

  it('should add multiple types of items to the set', function () {
    const values = [1, 'string', 2.5, false, null, undefined, function () { }, [], {}];
    values.forEach(val => set.add(val));
    assert.equal(set.size, values.length, `set should have size: ${values.length}`);
  });

  it('should add multiple unique items to the set', function () {
    const obj = {};
    let u;
    const values = [1, '2', true, obj, u, () => { }, u, obj, true, '2', 1];
    values.forEach(val => set.add(val));
    const uniqueValues = values.filter((val, index, self) => self.indexOf(val) === index);
    assert.equal(set.size, uniqueValues.length, `set should have size: ${uniqueValues.length}`);
  });

  it('should has an iterator', function () {
    assert.equal(typeof set[Symbol.iterator], 'function', 'set does not have an iterator function');
  });


  it('should return an iterator', function () {
    const it = set.list();
    const values = [1, 'string', 2.5, false, null, undefined, function () { }, [], {}];
    values.forEach(val => set.add(val));

    const retrievedValues = [];
    let currentVal;

    while (1) {
      currentVal = it.next();
      if (currentVal.done) break;
      retrievedValues.push(currentVal.value);
    }

    assert.equal(retrievedValues.length, values.length, `retrieved values should have length: ${values.length}`);
    assert.deepEqual(retrievedValues, values, 'retrieved values do not match values');
  });

  it('should restart the iterator', function () {
    const it = set.list();
    const values = [1, 2, 3, 4, 5];
    values.forEach(val => set.add(val));

    let retrievedValues = [];
    let retrievedValues2 = [];
    let currentVal;

    while (1) {
      currentVal = it.next();
      if (currentVal.done) break;
      retrievedValues.push(currentVal.value);
    }

    assert.equal(retrievedValues.length, values.length, `retrieved values should have length: ${values.length}`);

    // do it one more time

    while (1) {
      currentVal = it.next();
      if (currentVal.done) break;
      retrievedValues2.push(currentVal.value);
    }

    assert.equal(retrievedValues2.length, values.length, `retrieved values should have length: ${values.length}`);
    assert.deepEqual(retrievedValues2, values, 'retrieved values 2 do not match values');
  });

  it('should add and delete the first item', function () {
    const value = 1;
    set.add(value);
    assert.equal(set.delete(value), true, `it should delete value: ${value}`);
    assert.equal(set.size, 0, `set should have size: ${0}`);
  });

  it('should delete multiple items', function () {
    const values = [1, 'string', 2.5, false, null, undefined, function () { }, [], {}];
    let expectedSize = values.length;

    values.forEach(value => set.add(value));

    values.forEach(value => {
      assert.equal(set.delete(value), true, `it should delete value: ${value}`);
      assert.equal(set.size, --expectedSize, `size should be ${expectedSize + 1}`);
    });

    assert.equal(set.size, 0, `set should empty`);
  });

  it('should return false if item trying to delete an item that is not in the set', function () {
    assert.equal(set.delete(), false, `result should be false`);
  });
});