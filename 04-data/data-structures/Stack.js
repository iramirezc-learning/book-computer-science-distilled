/**
 * Node of a Stack
 * @class
 */
const Node = (function () {
  /**
   * Initializes a new instance of a Node
   * @constructs Node
   * @param {*} value The holding value
   * @param {object|null} next The next node in the Stack
   */
  function Node(value, next) {
    Object.defineProperties(this, {
      value: {
        get() { return value; }
      },
      next: {
        get() { return next; }
      }
    });

    return this;
  }

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
     * Top
     * @name Stack#top
     * @type object
     */
    Object.defineProperty(this, 'top', {
      enumerable: true,
      writable: true,
      value: null
    });

    return this;
  }

  /**
   * Checks if the stack is empty.
   * @function Stack#isEmpty
   */
  Stack.prototype.isEmpty = function () {
    return this.top === null;
  };

  /**
   * Returns the holding value of the top node.
   * @function Stack#peek
   */
  Stack.prototype.peek = function () {
    return this.top.value;
  };

  /**
   * Adds a new value to the stack.
   * @function Stack#push
   * @param {*} value Value to be stored
   */
  Stack.prototype.push = function (value) {
    const node = new Node(value, this.top);
    this.top = node;

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

    const currentTop = this.top;

    this.top = currentTop.next;

    return currentTop.value;
  };

  return Stack;
})();

module.exports = Stack;
