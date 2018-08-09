const assert = require('assert');

const PriorityQueue = require('./PriorityQueue');

function byPriority(a, b) {
  return b.priority - a.priority;
}

describe('Data Structure - PriorityQueue', function () {
  /** @type {PriorityQueue} */
  let priorityQueue;

  beforeEach(function () {
    priorityQueue = new PriorityQueue();
  });

  it('should be initialized correctly', function () {
    assert.ok(priorityQueue, 'priorityQueue is not initialized');
  });

  it('should start empty', function () {
    assert.equal(priorityQueue.isEmpty(), true, 'priorityQueue did not start empty');
  });

  it('should throw an exception if trying to dequeue on an empty priorityQueue', function () {
    assert.throws(() => { priorityQueue.dequeue() }, /^Error: PriorityQueue is empty\.$/, 'priorityQueue is not throwing an Error');
  });

  it('should throw an exception if the first element is hardcoded to be other than null or a Node instance', function () {
    priorityQueue.first = { priority: 0 };

    assert.throws(() => { priorityQueue.enqueue('some value', 1); }, /^Error: "next" should be an instance of Node or null\.$/, 'priorityQueue is not throwing an Error');
  });

  it('should throw an exception if the priority is not an integer value', function () {
    assert.throws(() => { priorityQueue.enqueue('some value', '1'); }, /^Error: "priority" should be an integer\.$/, 'priorityQueue is not throwing an Error');
  });

  it('should enqueue and dequeue the first item correctly', function () {
    const value = 1;

    priorityQueue.enqueue(value);

    assert.equal(priorityQueue.dequeue(), value, 'incorrect item 1');
    assert.equal(priorityQueue.isEmpty(), true, 'priorityQueue should be empty');
  });

  it('should enqueue an item with higher priority before the first element', function () {
    const values = [{ val: 1, priority: 0 }, { val: 2, priority: 1 }];

    values.forEach(({ val, priority }) => priorityQueue.enqueue(val, priority));

    const retrievedData = [];

    while (!priorityQueue.isEmpty()) {
      retrievedData.push(priorityQueue.dequeue());
    }

    const expectedData = values.sort(byPriority).map(({ val }) => val);

    assert.deepEqual(retrievedData, expectedData, 'incorrect retrieved data');
    assert.equal(priorityQueue.isEmpty(), true, 'priorityQueue should be empty');
  });

  it('should enqueue and dequeue multiple items correctly', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    data.forEach(d => priorityQueue.enqueue(d));

    const retrievedData = [];

    while (!priorityQueue.isEmpty()) {
      retrievedData.push(priorityQueue.dequeue());
    }

    assert.deepEqual(retrievedData, data, 'incorrect retrieved data');
    assert.equal(priorityQueue.isEmpty(), true, 'priorityQueue should be empty');
  });

  it('should enqueue and dequeue multiple items with priority correctly', function () {
    const values = [
      { val: 1, priority: 0 },
      { val: 2, priority: 1 },
      { val: 3, priority: 1 },
      { val: 4, priority: 2 },
      { val: 5, priority: 2 },
      { val: false, priority: 4 },
      { val: {}, priority: 5 },
      { val: [], priority: 5 },
      { val: 'hello', priority: 3 }
    ];

    values.forEach(({ val, priority }) => priorityQueue.enqueue(val, priority));

    const retrievedData = [];

    while (!priorityQueue.isEmpty()) {
      retrievedData.push(priorityQueue.dequeue());
    }

    const expectedData = values.sort(byPriority).map(({ val }) => val);

    assert.deepEqual(retrievedData, expectedData, 'incorrect retrieved data');
    assert.equal(priorityQueue.isEmpty(), true, 'priorityQueue should be empty');
  });

  it('should return the priorityQueue as string', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    assert.equal(priorityQueue.toString(), '[Empty PriorityQueue]', 'incorrect empty priorityQueue as string');

    data.forEach(d => priorityQueue.enqueue(d));

    assert.equal(priorityQueue.toString(), data.join(','), 'incorrect priorityQueue as string');
  });
});
