const defineProperty = Object.defineProperty;

/**
 * Node of a PriorityQueue
 * @class
 */
const Node = (function () {
  /**
   * Initializes a new instance of a Node
   * @constructs Node
   * @param {*} value The holding value
   * @param {Number=} [priority = 0] The priority of the node in the PriorityQueue
   * @param {(Node|null)} [next = null] The next node in the PriorityQueue
   */
  function Node(value, priority = 0, next = null) {
    if (!Number.isInteger(priority)) {
      throw new Error('"priority" should be an integer.');
    }

    /**
     * Node's value
     * @name Node#value
     * @type {*}
     */
    this.value;

    defineProperty(this, 'value', {
      get() { return value; } /* static value */
    });

    /**
     * Priority in the PriorityQueue
     * @name Node#priority
     * @type {int}
     */
    this.priority;

    defineProperty(this, 'priority', {
      get() { return priority; } /* static value */
    });

    /**
     * Pointer to the next Node
     * @name Node#next
     * @type {(Node|null)}
     */
    this.next;

    defineProperty(this, 'next', {
      writable: true, /* PriorityQueue should be able to update next node */
      value: next
    });
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
  Node.prototype.setNext = function(newNext) {
    if (typeof newNext !== null && !(newNext instanceof Node)) {
      throw new Error('"next" should be an instance of Node or null.');
    }

    this.next = newNext;

    return this;
  };

  /**
   * Returns the next node.
   * @function Node#getNext
   */
  Node.prototype.getNext = function() {
    return this.next;
  };

  /**
   * Returns the value as string
   * @function Node#toString
   */
  Node.prototype.toString = function () {
    return String(this.value);
  };

  return Node;
})();

// ==================================================

/**
 * PriorityQueue
 * @class
 */
const PriorityQueue = (function () {
  /**
   * Initializes a new instance of a PriorityQueue
   * @constructs PriorityQueue
   * @exports PriorityQueue
   */
  function PriorityQueue() {
    /**
     * First Node in the PriorityQueue
     * @name PriorityQueue#first
     * @type {(Node|null)}
     */
    this.first;

    defineProperty(this, 'first', {
      writable: true,
      value: null /* default */
    });

    return this;
  }

  /**
   * Checks if the priority queue is empty.
   * @function PriorityQueue#isEmpty
   */
  PriorityQueue.prototype.isEmpty = function () {
    return this.first === null;
  };

  /**
   * Adds a new item in order of its priority. The larger the number the higher the priority.
   * @function PriorityQueue#enqueue
   * @param {*} value Value to be enqueued
   * @param {Number=} [priority = 0] Priority of the value
   */
  PriorityQueue.prototype.enqueue = function (value, priority = 0) {
    const newNode = new Node(value, priority);

    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      if (newNode.priority > this.first.priority) {
        newNode.setNext(this.first);
        this.first = newNode;
      } else {
        let currentNode = this.first;

        while (currentNode.hasNext()) {
          if (newNode.priority > currentNode.getNext().priority) {
            newNode.setNext(currentNode.getNext());
            break;
          }
          currentNode = currentNode.getNext();
        }

        currentNode.setNext(newNode);
      }

      return this;
    }
  };

  /**
   * Removes and returns the first item in the queue. 
   * @function PriorityQueue#dequeue
   */
  PriorityQueue.prototype.dequeue = function () {
    if (this.isEmpty()) {
      throw new Error('PriorityQueue is empty.');
    } else {
      const currentFirst = this.first;
      this.first = currentFirst.getNext();
      return currentFirst.value;
    }
  };

  /**
   * Returns the queue as string
   * @function PriorityQueue#toString
   */
  PriorityQueue.prototype.toString = function () {
    if (this.isEmpty()) {
      return '[Empty PriorityQueue]';
    } else {
      let queueAsString = '';
      let currentNode = this.first;

      while (currentNode) {
        queueAsString += String(currentNode);
        if (currentNode.hasNext()) {
          queueAsString += ',';
        }
        currentNode = currentNode.getNext();
      }

      return queueAsString;
    }
  };

  return PriorityQueue;
})();

module.exports = PriorityQueue;
