const Node = require('./Node');

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
 * Returns if a node is lexicographically smaller than other node.
 * @param {Node} node1 First node to compare
 * @param {Node} node2 Second node to compare
 */
function isLexicographicalSmaller(node1, node2) {
  return String(node1) <= String(node2);
}

/**
 * A Sorted List
 * @class SortedList
 */
const SortedList = (function () {

  /**
   * Initializes an instance of a SortedList
   * @constructs
   */
  function SortedList() {
    /**
     * First Node in the Sorted List
     * @name SortedList#first
     * @type {(Node|null)}
     */
    this.first;

    defineProperty(this, 'first', {
      writable: true,
      value: null /* default */
    });

    /**
     * Length of the Sorted List
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
   * Checks if the sorted list is empty.
   * @function SortedListed#isEmpty
   */
  SortedList.prototype.isEmpty = function () {
    return this.first === null;
  };

  /**
   * Returns the sorted list as string
   * @function SortedList#toString
   */
  SortedList.prototype.toString = function () {
    if (this.isEmpty()) {
      return '[Empty SortedList]';
    } else {
      let listAsString = '';
      let currentNode = this.first;

      while (currentNode) {
        listAsString += String(currentNode);
        listAsString += currentNode.hasNext() ? ',' : '';
        currentNode = currentNode.getNext();
      }

      return listAsString;
    }
  }

  /**
   * Returns the node at the `n`th position in the sorted list
   * @function SortedList#getNode
   * @param {number=} [n = last] position
   */
  SortedList.prototype.getNode = function (n) {
    if (this.isEmpty()) {
      throw new Error('SortedList is empty.');
    } else {
      if (isUndefined(n)) {
        n = this.length - 1;
      } else {
        validatePositiveNumber(n, 'n');
      }

      let currentNode = this.first;
      let currentPosition = 0;

      while (currentNode.hasNext()) {
        if (currentPosition === n) break;
        currentPosition++;
        currentNode = currentNode.getNext();
      }

      return currentNode;
    }
  };

  /**
   * Returns the value of an item at the `n`th position in the sorted list.
   * @function SortedList#get
   * @param {number} [n = last] Position of the value
   * 
   */
  SortedList.prototype.get = function (n) {
    return this.getNode(n).value;
  };

  /**
   * Inserts an element in the corresponding lexical sorted position.
   * @function SortedList#insert
   * @param {*} value Value to be inserted in order
   */
  SortedList.prototype.insert = function (value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      if (isLexicographicalSmaller(newNode, this.first)) {
        newNode.setNext(this.first);
        this.first = newNode;
      } else {
        let currentNode = this.first;

        while (currentNode.hasNext()) {
          if (isLexicographicalSmaller(newNode, currentNode.getNext())) {
            newNode.setNext(currentNode.getNext());
            break;
          }
          currentNode = currentNode.getNext();
        }

        currentNode.setNext(newNode);
      }
    }

    return this;
  }

  /**
   * Removes an item from the list and returns its value
   * @param {number} n Position to remove
   */
  SortedList.prototype.remove = function (n) {
    const nodeToRemove = this.getNode(n);
    const length = this.length;

    if (length === 1 || n === 0) {
      this.first = this.first.getNext();
    } else {
      if (isUndefined(n)) {
        n = length - 1;
      }

      let prevNode = this.getNode(n - 1);

      prevNode.setNext(nodeToRemove.getNext());
    }

    return nodeToRemove.value;
  }

  return SortedList;
})();

module.exports = SortedList;
