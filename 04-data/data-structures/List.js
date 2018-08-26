const Node = require('./Node');
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
 * Throws an exception if a parameter is not a positive number
 * @private
 * @param {*} n Object to be tested
 * @param {string} parameterName Parameter name to show in the error message.
 * @throws {TypeError} parameter should be a positive number.
 */
function validatePositiveNumber(n, parameterName) {
  if (!isPositiveNumber(n)) {
    throw new TypeError(`"${parameterName}" should be an Integer greater than or equal to 0. Given: ${n}`);
  }
}

/**
 * Linked List ADT.
 * Initializes a new instance of a List.
 * @constructor List
 */
function List() {
  /**
   * Pointer to the first Node in the List.
   * @name List#first
   * @type {(Node|null)}
   * @default null
   */
  this.first;

  defineProperty(this, 'first', {
    writable: true,
    value: null
  });

  /**
   * Length of the List.
   * @name List#length
   * @type {Number}
   * @readonly
   */
  this.length;

  defineProperty(this, 'length', {
    get() {
      let currentNode = this.first;
      let length = 0;

      while (currentNode) {
        currentNode = currentNode.getNext();
        length++;
      }

      return length;
    }
  });

  return this;
}

/**
 * Checks if the list is empty.
 * @function List#isEmpty
 * @returns {boolean} Wheter the list is empty or not.
 */
List.prototype.isEmpty = function () {
  return this.first === null;
};

/**
 * Returns the Node at the `n`th position in the list.
 * @function List#getNode
 * @param {Number=} [position = last] `n`th position
 * @returns {Node} The Node at the 'nth' position in the list.
 * @throws {Error} List is empty.
 * @throws {TypeError} position should be a number.
 */
List.prototype.getNode = function (position) {
  if (this.isEmpty()) {
    throw new Error('List is empty.');
  } else {
    if (isUndefined(position)) {
      position = this.length - 1;
    } else {
      validatePositiveNumber(position, 'position');
    }

    let currentNode = this.first;
    let currentPosition = 0;

    while (currentNode.hasNext()) {
      if (currentPosition === position) {
        break;
      }
      currentPosition++;
      currentNode = currentNode.getNext();
    }

    return currentNode;
  }
};

/**
 * Inserts an item at the 'nth' position in the list.
 * @function List#insert
 * @param {*} value Value to be inserted.
 * @param {Number=} [position = last] 'nth' position in the list for the new value.
 * @returns {List} instance
 * @throws {TypeError} position should be a number.
 */
List.prototype.insert = function (value, position) {
  if (isUndefined(position)) {
    position = this.length; /* position to insert */
  } else {
    validatePositiveNumber(position, 'position');
  }

  const newNode = new Node(value);

  if (this.isEmpty()) {
    this.first = newNode;
  } else {
    if (position === 0) {
      newNode.setNext(this.first)
      this.first = newNode;
    } else {
      let prevNode = this.getNode(position - 1);

      newNode.setNext(prevNode.getNext())
      prevNode.setNext(newNode);
    }
  }

  return this;
};

/**
 * Returns the value of an item and removes it from the list at the 'nth' position.
 * @function List#remove
 * @param {Number=} [position = last] `n`th item's position to remove
 * @returns {*} Value of the Node.
 * @throws {TypeError} position should be a number.
 */
List.prototype.remove = function (position) {
  let nodeToRemove = this.getNode(position);
  const length = this.length;

  if (position === 0 || length === 1) {
    this.first = this.first.getNext();
  } else {
    if (isUndefined(position)) {
      position = length - 1;
    }

    let prevNode = this.getNode(position - 1);

    prevNode.setNext(nodeToRemove.getNext());
  }

  return nodeToRemove.value;
};

/**
 * Returns the value of a Node at the 'nth' position in the list.
 * @function List#get
 * @param {Number=} [position = last] 'nth' position
 * @returns {*} Value of the Node
 */
List.prototype.get = function (position) {
  return this.getNode(position).value;
};

/**
 * My lazy and hackish implementation of sort
 * Passes all elements to an array, sorts them and then inserts them again.
 * @function List#sort
 * @returns {List} instance
 */
List.prototype.sort = function () {
  const data = [];

  while (!this.isEmpty()) {
    data.push(this.remove());
  }

  data.sort();

  data.forEach(i => this.insert(i));

  return this;
};

/**
 * Returns a subset of a List given a starting and ending position
 * @function List#slice
 * @param {number} start Starting position
 * @param {number} end End position (inclusive)
 * @returns {List} subset of the List
 */
List.prototype.slice = function (start, end) {
  if (isUndefined(start)) {
    start = 0;
  } else {
    validatePositiveNumber(start, 'start');
  }

  if (isUndefined(end)) {
    end = this.length === 0 ? 0 : this.length - 1;
  } else {
    validatePositiveNumber(end, 'end');
  }

  if (start > end) {
    throw new Error(`start: ${start} should not be greater than end: ${end}`);
  }

  const subset = new List();

  if (!this.isEmpty()) {
    while (start <= end) {
      subset.insert(this.get(start++));
    }
  }

  return subset;
};

/**
 * Reverses the items in the list
 * @function List#reverse
 * @returns {List} instance
 */
List.prototype.reverse = function () {
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
 * Returns the list as string
 * @function List#toString
 * @returns {string} list as string.
 */
List.prototype.toString = function () {
  if (this.isEmpty()) {
    return '[Empty List]';
  } else {
    let listAsString = '';
    let currentNode = this.first;

    while (currentNode) {
      listAsString += String(currentNode);
      if (currentNode.hasNext()) {
        listAsString += ','
      }
      currentNode = currentNode.getNext();
    }

    return listAsString;
  }
}

module.exports = List;
