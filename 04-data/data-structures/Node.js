const defineProperty = Object.defineProperty;

/**
 * Validates if a node is an instance of a Node or null.
 * @private
 * @param {(Node|null)} node The next pointer value.
 */
function isNodeOrNull(node) {
  if (node !== null && !(node instanceof Node)) {
    throw new Error(`"next" should be an instance of Node or null.`);
  }
}

/**
 * Node Abstract Data Type
 * Initializes a new instance of a Node
 * @constructs Node
 * @param {*} value The holding value
 */
function Node(value, priority = 0) {
  if (!Number.isInteger(priority)) {
    throw new Error('"priority" should be an integer.');
  }

  /**
   * Pointer to the next Node
   * @type {(Node|null)}
   * @private
   * @default null
   */
  let _next = null;

  /**
   * Holding value
   * @name Node#_value
   * @type {*}
   * @readonly
   */
  this._value;

  defineProperty(this, '_value', {
    get() { return value; }
  });

  /**
   * Holding value
   * @name Node#value
   * @type {*}
   * @readonly
   */
  this.value;

  defineProperty(this, 'value', {
    get() { return value; }
  });

  /**
   * Pointer to the next Node
   * @name Node#_next
   * @type {(Node|null)}
   * @readonly
   * @default null
   */
  this._next;

  defineProperty(this, '_next', {
    get() { return _next; }
  });

  /**
   * Pointer to the next Node
   * @name Node#next
   * @type {(Node|null)}
   * @default null
   */
  this.next;

  defineProperty(this, 'next', {
    set(newNext) { isNodeOrNull(newNext); _next = newNext; },
    get() { return _next; }
  });

  /**
   * Priority of the Node for PriorityQueues
   * @name Node#_priority
   * @type {int}
   * @readonly
   * @default 0
   */
  this._priority;

  defineProperty(this, '_priority', {
    get() { return priority; }
  });

  /**
   * Priority of the Node for PriorityQueues
   * @name Node#priority
   * @type {int}
   * @readonly
   * @default 0
   */
  this.priority;

  defineProperty(this, 'priority', {
    get() { return priority; }
  });

  return this;
}

/**
 * Tells if the current node has a next node
 * @function Node#hasNext
 */
Node.prototype.hasNext = function () {
  return this.next !== null;
};

/**
 * Updates the pointer to the next node
 * @function Node#setNext
 * @param {(Node|null)} newNext 
 */
Node.prototype.setNext = function (newNext) {
  this.next = newNext;

  return this;
};

/**
 * Returns the next node.
 * @function Node#getNext
 */
Node.prototype.getNext = function () {
  return this.next;
};

/**
 * Returns the value as string
 * @function Node#toString
 */
Node.prototype.toString = function () {
  return String(this._value);
};

module.exports = Node;
