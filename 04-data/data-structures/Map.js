const defineProperty = Object.defineProperty;

/**
 * Map ADT
 * @class Map
 */
const Map = (function () {
  /**
   * Initializes an instance of a Map
   * @constructs Map
   */
  function Map() {
    /**
     * Object to store the values of the Map
     * @name Map#map
     * @type {Object}
     */
    this.map;

    defineProperty(this, 'map', {
      value: Object.create(null) /* default */
    });

    /**
     * Size of the map
     * @name Map#size
     * @type {number}
     */
    this.size;

    defineProperty(this, 'size', {
      get() { return Object.keys(this.map).length; }
    });


    return this;
  }

  /**
   * Sets a pair of key, value in the Map
   * @function Map#set
   * @param {*} key 
   * @param {*} value 
   */
  Map.prototype.set = function (key, value) {
    this.map[String(key)] = value;

    return this;
  };

  /**
   * Tells if the Map has a key
   * @function Map#has
   * @param {*} key Key to look for
   */
  Map.prototype.has = function (key) {
    return !!this.map[String(key)];
  };

  /**
   * Deletes a key from the Map
   * @function Map#delete
   * @param {*} key Key to be deleted
   */
  Map.prototype.delete = function (key) {
    const result = this.has(key);

    delete this.map[String(key)];

    return result;
  };

  /**
   * Returns the value of a key in the Map
   * Throws an exception if the key doesn't exist
   * @function Map#get
   * @param {*} key Key to be retrieved.
   */
  Map.prototype.get = function (key) {
    return this.map[String(key)];
  };

  return Map;
})();

module.exports = Map;
