const DNode = require('./DoublyLinkedNode');
const Stack = require('./Stack');

const defineProperty = Object.defineProperty;

/**
 * Checks if a parameter is `undefined`
 * @private
 * @param {*} obj Object to be tested
 * @returns {boolean}
 */
function isUndefined(obj) {
  return typeof obj === 'undefined';
}

/**
 * Checks if a parameter is a positive number
 * @private
 * @param {*} n Object to be tested
 * @returns {boolean}
 */
function isPositiveNumber(n) {
  return Number.isInteger(n) && n >= 0;
}

/**
 * Validates a parameter to be a positive integer.
 * @private
 * @param {string} parameterName Parameter name to show in the error message.
 * @returns {function} The function validator.
 */
function validatePositiveNumber(parameterName) {
  /**
   * Throws an exception if a parameter is not a positive number
   * @param {*} n Element to be tested
   * @throws {RangeError} parameter should be a positive number.
   */
  return function throwIfNotPositiveNumber(n) {
    if (!isPositiveNumber(n)) {
      throw new RangeError(`"${parameterName}" should be an Integer greater than or equal to 0. Given: ${n}`);
    }
  }
}

/**
 * DoublyLinkedList ADT.
 * Inititalizes a new instance of a DoublyLinkedList
 * @constructs DoublyLinkedList
 */
function DoublyLinkedList() {
  /**
   * Pointer to the first DNode in the DoublyLinkedList
   * @name DoublyLinkedList#_first
   * @type {(DNode|null)}
   * @default null
   */
  this._first;

  defineProperty(this, '_first', {
    writable: true,
    value: null
  });

  /**
   * Pointer to the last DNode in the DoublyLinkedList
   * @name DoublyLinkedList#_last
   * @type {(DNode|null)}
   * @default null
   */
  this._last;

  defineProperty(this, '_last', {
    writable: true,
    value: null
  });

  /**
   * Length of the DoublyLinkedList
   * @name DoublyLinkedList#length
   * @type {number}
   * @readonly
   */

  this.length;

  defineProperty(this, 'length', {
    get() {
      /**
       * @type {DNode}
       * @private
       */
      let currentNode = this._first;
      let length = 0;

      while (currentNode) {
        length++;
        currentNode = currentNode.getNext();
      }

      return length;
    }
  });

  /**
   * Helper property to keep track of the current iterator.
   * @name DoublyLinkedList#_currentIterator
   * @type {number}
   * @default 0
   * @private
   */
  this._currentIterator;

  defineProperty(this, '_currentIterator', {
    writable: true,
    value: 0
  });

  return this;
}

/**
 * Returns the self instance as iterator.
 * @function DoublyLinkedList#Symbol.iterator
 * @example
 * // const s = new Set();
 * // const it = s[Symbol.iterator]();
 * @returns {DoublyLinkedList} instance iterator.
 */
DoublyLinkedList.prototype[Symbol.iterator] = function () {
  return this;
};

/**
 * Returns the next value of the @@iterator
 * @function DoublyLinkedList#next
 * @returns {object} {value, done}
 */
DoublyLinkedList.prototype.next = function () {
  if (this._currentIterator < this.length) {
    return {
      value: this.get(this._currentIterator++),
      done: false
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
 * Checks if the DoublyLinkedList is empty.
 * @function DoublyLinkedList#isEmpty
 * @returns {boolean} Whether the list is empty or not.
 */
DoublyLinkedList.prototype.isEmpty = function () {
  return this._first === null && this._last === null;
};

/**
 * Returns the node at the 'index' position in the list.
 * @function DoublyLinkedList#getNode
 * @param {number=} [index = lastIndex] Index of the node
 * @returns {DoublyLinkedList} The node the the 'index' position in the list or null if the list is empty.
 * @throws {RangeError} when index is not a positive integer or list is empty.
 */
DoublyLinkedList.prototype.getNode = function (index) {
  if (this.isEmpty()) {
    throw new RangeError('DoublyLinkedList is empty.');
  } else {
    const lastIndex = this.length - 1;

    if (isUndefined(index)) {
      index = lastIndex;
    } else {
      validatePositiveNumber('index')(index);
      index = (index <= lastIndex ? index : lastIndex);
    }

    let currentNode;
    let currentIndex;

    if (index <= Math.floor(lastIndex / 2)) { /* search from first to last */
      currentNode = this._first;
      currentIndex = 0;
      while (currentNode.hasNext()) {
        if (currentIndex === index) {
          break;
        }
        currentIndex++;
        currentNode = currentNode.getNext();
      }
    } else { /* search from last to first */
      currentNode = this._last;
      currentIndex = lastIndex;
      while (currentNode.hasPrevious()) {
        if (currentIndex === index) {
          break;
        }
        currentIndex--;
        currentNode = currentNode.getPrevious();
      }
    }

    return currentNode;
  }
};

/**
 * Returns the value of a DNode at the 'index' position in the list.
 * @function DoublyLinkedList#get
 * @param {number=} [index = lastIndex] Index of the DNode to be retrieved.
 * @returns {*} Value of the DNode.
 */
DoublyLinkedList.prototype.get = function (index) {
  return this.getNode(index)._value;
};

/**
 * Inserts a new DNode before the 'index' provided.
 * @function DoublyLinkedList#insert
 * @param {*} value Value to be inserted.
 * @param {number=} index 'index' to place the new item. If not provided, item is inserted at the end of the list.
 * @returns {DoublyLinkedList} instance
 * @throws {RangeError} 'index' should be a positive number.
 */
DoublyLinkedList.prototype.insert = function (value, index) {
  const newNode = new DNode(value);

  if (this.isEmpty()) {
    this._first = newNode;
    this._last = newNode;
  } else {
    const currentNode = this.getNode(index);
    if (index === 0) { /* insert before first */
      newNode.setNext(this._first);
      this._first.setPrevious(newNode);
      this._first = newNode;
    } else if (currentNode === this._last) { /* insert at the end */
      newNode.setPrevious(this._last);
      this._last.setNext(newNode);
      this._last = newNode;
    } else { /* insert before index */
      const prevNode = currentNode.getPrevious();
      prevNode.setNext(newNode);
      newNode.setPrevious(prevNode);
      newNode.setNext(currentNode);
      currentNode.setPrevious(newNode);
    }
  }

  return this;
};

/**
 * Removes an item from the list at the 'index' position and returns its value.
 * @function DoublyLinkedList#remove
 * @param {number=} index Position of the item to be removed.
 * @returns {*} Value of the DNode.
 * @throws {RangeError} 'index' should be a positive number.
 */
DoublyLinkedList.prototype.remove = function (index) {
  const length = this.length;
  let nodeToRemove = this.getNode(index);

  if (length === 1) {
    this._first = null;
    this._last = null;
  } else if (nodeToRemove === this._first) {
    const newFirst = this._first.getNext();
    newFirst.setPrevious(null);
    this._first = newFirst;
  } else if (nodeToRemove === this._last) {
    const newLast = this._last.getPrevious();
    newLast.setNext(null);
    this._last = newLast;
  } else {
    const prevNode = nodeToRemove.getPrevious();
    const nextNode = nodeToRemove.getNext();
    prevNode.setNext(nextNode);
    nextNode.setPrevious(prevNode);
  }

  return nodeToRemove._value;
};

/**
 * My lazy and hackish implementation for sort.
 * Moves all elements to an array, sorts them and inserts them back in to the list.
 * @function DoublyLinkedList#sort
 * @returns {DoublyLinkedList} instance
 */
DoublyLinkedList.prototype.sort = function () {
  const data = [];

  while (!this.isEmpty()) {
    data.push(this.remove());
  }

  data.sort();

  data.forEach(i => this.insert(i));

  return this;
};

/**
 * Reverses the items in the doubly linked list
 * @function DoublyLinkedList#reverse
 * @returns {DoublyLinkedList} instance
 */
DoublyLinkedList.prototype.reverse = function () {
  const stack = new Stack();

  while (!this.isEmpty()) {
    stack.push(this.remove(0));
  }

  while (!stack.isEmpty()) {
    this.insert(stack.pop());
  }

  return this;
};

/**
 * Returns a doubly linked list as Array.
 * @function DoublyLinkedList#toArray
 * @returns {Array} The doubly linked list as Array.
 */
DoublyLinkedList.prototype.toArray = function () {
  const it = this[Symbol.iterator]();

  return [...it];
};

/**
 * Return the doubly linked list as string.
 * @function DoublyLinkedList#toString
 * @param {function=} [parser = String] A parser function.
 * @returns {string} Doubly linked list as string
 */
DoublyLinkedList.prototype.toString = function (parser) {
  let listAsString = '';
  let currentNode = this._first;

  if (parser && typeof parser !== 'function') {
    throw new TypeError(`Expected 'parser' to be a function. Given: ${typeof parser}`);
  } else {
    parser = parser || String;
  }

  while (currentNode) {
    listAsString += parser(currentNode);
    if (currentNode.hasNext()) {
      listAsString += ',';
    }
    currentNode = currentNode.getNext();
  }

  return listAsString;
};

module.exports = DoublyLinkedList;