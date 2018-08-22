defineProperty = Object.defineProperty;

/**
 * Checks if a value is NaN
 * @param {*} val Value to check
 */
function isNaN(val) {
  return val !== val;
}

/**
 * Set ADT
 * @class Set
 */
const Set = (function () {
  /**
   * Initializes an instance of a Set
   * @constructs Set
   */
  function Set() {
    /**
     * Array to store the values of the Set
     * @name Set#_set
     * @type {Array}
     */
    this._set;

    defineProperty(this, '_set', {
      value: []
    });

    /**
     * Size of the Set
     * @name Set#size
     * @type {number}
     */
    this.size;

    defineProperty(this, 'size', {
      get() {
        return this._set.length;
      }
    });

    /**
     * Helper property to keep track of the current iterator
     * in the iterator function
     * @name Set#_currentIterator
     * @type {number}
     */
    this._currentIterator;

    defineProperty(this, '_currentIterator', {
      writable: true,
      value: 0
    });

    return this;
  }

  /**
   * Returns the self instance of the set as iterator
   * @function Set#[Symbol.iterator]
   * @returns {Set}
   */
  Set.prototype[Symbol.iterator] = function () {
    return this;
  };

  /**
   * Iterable function to get next value.
   * @function Set#next
   */
  Set.prototype.next = function () {
    if (this._currentIterator < this.size) {
      return {
        value: this._set[this._currentIterator++],
        done: false,
      };
    } else {
      this._currentIterator = 0;
      return {
        value: undefined,
        done: true
      };
    }
  };

  /**
   * Adds a item to the Set
   * @function Set#add
   * @param {*} value Item to be added. NaN is not supported.
   */
  Set.prototype.add = function (value) {
    if (isNaN(value)) {
      throw new TypeError(`Sorry. I do not support NaN values.`);
    }

    if (!this.has(value)) {
      this._set.push(value)
    }

    return this;
  };

  /**
   * Returns a Iterator to get the items of the set.
   * @function Set#list
   * @returns {Set} Iterable instance
   */
  Set.prototype.list = function () {
    return this[Symbol.iterator]();
  };

  /**
   * Checks if an item exists in the Set.
   * @param {*} value Value to look for.
   */
  Set.prototype.has = function (value) {
    return this._set.indexOf(value) >= 0;
  };

  /**
   * Removes an item from the Set.
   * @param {*} value Value to be removed.
   */
  Set.prototype.delete = function (value) {
    const result = this.has(value);

    if (result) {
      this._set.splice(this._set.indexOf(value), 1);
    }

    return result;
  };

  return Set;
})();

module.exports = Set;