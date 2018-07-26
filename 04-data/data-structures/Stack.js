const defineProperty = Object.defineProperty;

/**
 * Node of a Stack
 * @class
 */
const Node = (function () {
  /**
   * Initializes a new instance of a Node
   * @constructs Node
   * @param {*} value The holding value
   * @param {Node|null} next The next node in the Stack
   */
  function Node(value, next = null) {
    /**
     * Node's value
     * @name Node#_value
     * @type {*}
     */
    this._value;

    defineProperty(this, '_value', {
      get() { return value; } /* static value */
    });

    /**
     * Pointer to the next Node
     * @name Node#_next
     * @type {Node}
     */
    this._next;

    defineProperty(this, '_next', {
      get() { return next; } /* static value */
    });

    return this;
  }

  /**
   * Returns the value as string
   * @function Node#toString
   */
  Node.prototype.toString = function () {
    return String(this._value);
  };

  return Node;
})();

// ==================================================

/**
 * Stack
 * @class
 */
const Stack = (function () {
  /**
   * Initializes a new instance of a Stack
   * @constructs Stack
   */
  function Stack() {
    /**
     * Top Node in the Stack
     * @name Stack#_top
     * @type {Node|null}
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
    const node = new Node(value, this._top);
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

    this._top = currentTop._next;

    return currentTop._value;
  };

  /**
   * Returns the stack as string
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
      currentNode = currentNode._next;

      if (currentNode) {
        stackAsString += '\n';
      }
    }

    return stackAsString;
  }

  return Stack;
})();

module.exports = Stack;
