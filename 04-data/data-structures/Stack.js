const Node = require('./Node');

const defineProperty = Object.defineProperty;

/**
 * Initializes a new instance of a Stack
 * @constructor Stack
 */
function Stack() {
  /**
   * Top Node in the Stack
   * @name Stack#_top
   * @type {Node|null}
   * @default null
   */
  this._top;

  defineProperty(this, '_top', {
    writable: true,
    value: null /* default */
  });

  return this;
}

/**
 * Checks if the stack is empty.
 * @function Stack#isEmpty
 */
Stack.prototype.isEmpty = function () {
  return this._top === null;
};

/**
 * Returns the holding value of the top node.
 * @function Stack#peek
 */
Stack.prototype.peek = function () {
  return this._top._value;
};

/**
 * Adds a new value to the stack.
 * @function Stack#push
 * @param {*} value Value to be stored
 */
Stack.prototype.push = function (value) {
  const node = new Node(value);

  node.setNext(this._top);

  this._top = node;

  return this;
};

/**
 * Retrieves and removes the top value from the stack.
 * @function Stack#pop
 */
Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Stack is empty.');
  }

  const currentTop = this._top;

  this._top = currentTop.next;

  return currentTop._value;
};

/**
 * Returns the stack as string.
 * Note: could this be considrered as hacking the Stack?
 * @function Stack#toString
 */
Stack.prototype.toString = function () {
  if (this.isEmpty()) {
    return '[Empty Stack]';
  }

  let stackAsString = '';
  let currentNode = this._top;

  while (currentNode) {
    stackAsString += String(currentNode);
    currentNode = currentNode.next;

    if (currentNode) {
      stackAsString += '\n';
    }
  }

  return stackAsString;
}

module.exports = Stack;
