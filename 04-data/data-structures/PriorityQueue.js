const Node = require('./Node');

const defineProperty = Object.defineProperty;

/**
 * Initializes a new instance of a PriorityQueue
 * @constructs PriorityQueue
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


module.exports = PriorityQueue;
