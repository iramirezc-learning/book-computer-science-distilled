const assert = require('assert');

const Map = require('./Map');

describe('Data Structure - Map', function () {
  /**
   * @type {Map}
   * @private
   */
  let map;

  beforeEach(function () {
    map = new Map();
  });

  it('should be initialized correctly', function () {
    assert.ok(map, 'map is not initialized');
  });

  it('should not have enumerable properties', function () {
    const properties = Object.keys(map);
    const expectedProperties = [];

    assert.deepEqual(properties, expectedProperties, 'properties do not match');
  });

  it('should start empty', function () {
    assert.equal(map.size, 0, 'map should be empty');
  });

  it('should set a key correctly', function () {
    map.set(1, 1);
    assert.equal(map.size, 1, `map should have size ${1}`);
  });

  it('should set and has a key correctly', function () {
    const key = 'a';
    const value = 1;
    map.set(key, value);
    assert.equal(map.has(key), true, `map should has value ${value}`);
  });

  it('should set and get a key correctly', function () {
    const key = 'a';
    const value = 1;
    map.set(key, value);
    assert.equal(map.get(key), value, `map should return value ${value}`);
  });

  it('should replace a set key correctly', function () {
    const key = 'a';
    const value = 1;
    const value2 = 2;
    map.set(key, value);
    map.set(key, value2);
    assert.equal(map.get(key), value2, `map should return value ${value2}`);
    assert.equal(map.size, 1, `map should have size ${1}`);
  });

  it('should set and delete a key correctly', function () {
    const key = 'a';
    const value = 1;
    map.set(key, value);
    assert.equal(map.delete(key), true, `map should delete key ${key}`);
    assert.equal(map.size, 0, `map should have size ${0}`);
  });

  it('should return false when calling has with a key that is not in the map', function () {
    const key = 'a';
    const invalidKey = 'b';
    const value = 1;
    map.set(key, value);
    assert.equal(map.has(invalidKey), false, `map has should return false`);
  });

  it('should return false when deleting a key that is not in the map', function () {
    const key = 'a';
    const invalidKey = 'b';
    const value = 1;
    map.set(key, value);
    assert.equal(map.delete(invalidKey), false, `map delete should return false`);
  });
});
