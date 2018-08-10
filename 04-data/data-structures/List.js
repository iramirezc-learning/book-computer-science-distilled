const Node = require('./Node');
const Stack = require('./Stack');

const defineProperty = Object.defineProperty;

/**
 * Checks if a parameter is `undefined`
 * @param {*} obj Object to be tested
 */
function isUndefined(obj) {
  return typeof obj === 'undefined';
}

/**
 * Checks if a parameter is a positive number
 * @param {*} n Object to be tested
 */
function isPositiveNumber(n) {
  return Number.isInteger(n) && n >= 0;
}

/**
 * Throws an exception if a parameter is not a positive number
 * @param {*} n Object to be tested
 * @param {string} parameterName Parameter name to show in the error message.
 */
function validatePositiveNumber(n, parameterName) {
  if (!isPositiveNumber(n)) {
    throw new Error(`"${parameterName}" should be an Integer greater than or equal to 0. Given: ${n}`);
  }
}

/**
 * List
 * @class List
 */
const List = (function () {
  /**
   * Initializes a new instance of a List
   * @constructs List
   */
  function List() {
    /**
     * First Node in the List
     * @name List#first
     * @type {(Node|null)}
     */
    this.first;

    defineProperty(this, 'first', {
      writable: true,
      value: null /* default */
    });

    /**
     * Length of the list
     * @name List#length
     * @type {Number}
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
   */
  List.prototype.isEmpty = function () {
    return this.first === null;
  };

  /**
   * Returns the node at the `n`th position in the list
   * @function List#getNode
   * @param {Number=} [position = last] `n`th position
   */
  List.prototype.getNode = function (position) {
    if (isUndefined(position)) {
      position = this.length;
    } else {
      validatePositiveNumber(position, 'position');
    }

    if (this.isEmpty()) {
      throw new Error('List is empty.');
    } else {
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
   * Inserts an item at the `n`th position in the list.
   * @function List#insert
   * @param {*} value Value to be stored
   * @param {Number=} [position = last] `n`th position of the item
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
   * Returns and removes an element at the `n`th position
   * @param {Number=} [position = last] `n`th item's position to remove
   */
  List.prototype.remove = function (position) {
    if (isUndefined(position)) {
      position = this.length - 1;
    } else {
      validatePositiveNumber(position, 'position');
    }

    if (this.isEmpty()) {
      throw new Error('List is empty.');
    } else {
      if (position === 0 || this.length === 1) {
        let currentFirst = this.first;
        this.first = currentFirst.getNext();
        return currentFirst.value;
      } else {
        if (position > this.length) {
          position = this.length; /* get last item */
        }

        let prevNode = this.getNode(position - 1);
        let nodeToRemove = this.getNode(position);

        prevNode.setNext(nodeToRemove.getNext());

        return nodeToRemove.value;
      }
    }
  };

  /**
   * Returns the element at the `n`th position in the list
   * @function List#get
   * @param {Number=} [position = last] `n`th position
   */
  List.prototype.get = function (position) {
    return this.getNode(position).value;
  };

  /**
   * My lazy and hackish implementation of sort
   * Passes all elements to an array, sorts them and then inserts them again.
   * @function List#sort
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
   * @param {number} start Starting position
   * @param {number} end End position (inclusive)
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

  return List;
})();

module.exports = List;
