const defineProperty = Object.defineProperty;

/**
 * Validates if a node is an instance of a DNode or null.
 * @private
 * @param {(DNode|null)} node The pointer to check.
 */
function isNodeOrNull(node) {
  if (node !== null && !(node instanceof DNode)) {
    throw new TypeError(`"node" should be an instance of DNode or null.`);
  }
}

/**
 * DoublyLinkedNode ADT.
 * Initializes a new instance of a DNode
 * @constructs DNode
 * @param {*} value Value to be stored in the DNode.
 * @param {number} [priority = 0] Priority for a DNode when used with PriorityQueues.
 */
function DNode(value, priority = 0) {
  if (!Number.isInteger(priority)) {
    throw new TypeError('"priority" should be an integer.');
  }

  /**
   * Stored value in the DNode.
   * @name DNode#_value
   * @type {*}
   * @readonly
   */
  this._value;

  defineProperty(this, '_value', {
    get() { return value; }
  });

  /**
   * DNode's priority to be used with PriorityQueues
   * @name DNode#_priority
   * @type {number}
   * @readonly
   * @default 0
   */
  this._priority;

  defineProperty(this, '_priority', {
    get() { return priority; }
  });

  /**
   * Pointer to the previous DNode.
   * @name DNode#_previous
   * @type {(DNode|null)}
   * @default null
   */
  this._previous;

  defineProperty(this, '_previous', {
    writable: true,
    value: null
  });

  /**
   * Pointer to the next DNode.
   * @name DNode#_next
   * @type {(DNode|null)}
   * @default null
   */
  this._next;

  defineProperty(this, '_next', {
    writable: true,
    value: null
  });

  return this;
}

/**
 * Tells if the current DNode has a next node.
 * @function DNode#hasNext
 * @returns {boolean} Whether it has a next node or not.
 */
DNode.prototype.hasNext = function () {
  return this._next !== null;
};

/**
 * Tells if the current DNode has a previous node.
 * @function DNode#hasPrevious
 * @returns {boolean} Whether it has a previous node or not.
 */
DNode.prototype.hasPrevious = function () {
  return this._previous !== null;
};

/**
 * Updates the pointer to the next node.
 * @function DNode#setNext
 * @param {(Node|null)} newNext New next pointer.
 * @returns {DNode} instance
 */
DNode.prototype.setNext = function (newNext) {
  isNodeOrNull(newNext);

  this._next = newNext;

  return this;
};

/**
 * Updates the pointer to the previous node.
 * @function DNode#setPrevious
 * @param {(Node|null)} newPrevious New previous pointer.
 * @returns {DNode} instance
 */
DNode.prototype.setPrevious = function (newPrevious) {
  isNodeOrNull(newPrevious);

  this._previous = newPrevious;

  return this;
};

/**
 * Returns the pointer to the next node.
 * @function DNode#getNext
 * @returns {(DNode|null)} pointer to next node.
 */
DNode.prototype.getNext = function () {
  return this._next;
};

/**
 * Returns the pointer to the previous node.
 * @function DNode#getPrevious
 * @returns {(DNode|null)} pointer to the previous node.
 */
DNode.prototype.getPrevious = function () {
  return this._previous;
};

/**
 * Returns the DNode's value as string.
 * @function DNode#toString
 * @returns {string} DNode as string
 */
DNode.prototype.toString = function () {
  return String(this._value);
};

module.exports = DNode;