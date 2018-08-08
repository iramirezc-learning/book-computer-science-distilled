const defineProperty = Object.defineProperty;

/**
 * Node of a Queue
 * @class
 */
const Node = (function () {
  /**
   * Initializes a new instance of a Node
   * @constructs Node
   * @param {*} value The holding value
   * @param {(Node|null)} next The next node in the Queue
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
     * @type {(Node|null)}
     */
    this._next;

    defineProperty(this, '_next', {
      writable: true, /* queues should be able to update next node */
      value: next
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
 * Queue
 * @class
 */
const Queue = (function () {
  /**
   * Initializes a new instance of a Queue
   * @constructs Queue
   */
  function Queue() {
    /**
     * First Node in the Queue
     * @name Queue#_first
     * @type {(Node|null)}
     */
    this._first;

    defineProperty(this, '_first', {
      writable: true,
      value: null /* default */
    });

    return this;
  }

  /**
   * Checks if the queue is empty.
   * @function Queue#isEmpty
   */
  Queue.prototype.isEmpty = function () {
    return this._first === null;
  };

  /**
   * Adds a new item at the end of the queue.
   * @function Queue#enqueue
   * @param {*} value Value to be enqueued
   */
  Queue.prototype.enqueue = function (value) {
    const node = new Node(value, null);

    if (this.isEmpty()) {
      this._first = node;
    } else {
      let lastNode = this._first;

      while (lastNode._next !== null) {
        lastNode = lastNode._next;
      }

      lastNode._next = node;
    }

    return this;
  };

  /**
   * Removes and returns the first item in the queue. 
   * @function Queue#dequeue
   */
  Queue.prototype.dequeue = function () {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }

    const currentFirst = this._first;

    if (currentFirst._next) {
      this._first = currentFirst._next;
    } else {
      this._first = null;
    }

    return currentFirst._value;
  };

  /**
   * Returns the queue as string
   * @function Queue#toString
   */
  Queue.prototype.toString = function () {
    if (this.isEmpty()) {
      return '[Empty Queue]'
    }

    let queueAsString = '';
    let currentNode = this._first;

    while (currentNode) {
      queueAsString += String(currentNode);
      currentNode = currentNode._next;

      if (currentNode) {
        queueAsString += ',';
      }
    }

    return queueAsString;
  };

  return Queue;
})();

module.exports = Queue;
