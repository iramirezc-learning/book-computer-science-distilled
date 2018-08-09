const assert = require('assert');

const Queue = require('./Queue');

describe('Data Structure - Queue', function () {
  /** @type {Queue} */
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  it('should be intialized correctly', function () {
    assert.ok(queue, 'queue is not intialized');
  });

  it('should start empty', function () {
    assert.equal(queue.isEmpty(), true, 'queue did not start empty');
  });

  it('should throw an exception if trying to dequeue on an empty queue', function () {
    assert.throws(() => { queue.dequeue() }, /^Error: Queue is empty\.$/, 'queue is not throwing an Error');
  });

  it('should enqueue and dequeue the first item correctly', function () {
    const value = 1;

    queue.enqueue(value);

    assert.equal(queue.dequeue(), value, 'incorrect item 1');
    assert.equal(queue.isEmpty(), true, 'queue should be empty');
  });

  it('should enqueue and dequeue multiple items correctly', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    data.forEach(d => queue.enqueue(d));

    const retrievedData = [];

    while (!queue.isEmpty()) {
      retrievedData.push(queue.dequeue());
    }

    assert.deepEqual(retrievedData, data, 'incorrect retrieved data');
    assert.equal(queue.isEmpty(), true, 'queue should be empty');
  });

  it('should return the queue as string', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    assert.equal(queue.toString(), '[Empty Queue]', 'incorrect empty queue as string');

    data.forEach(d => queue.enqueue(d));

    assert.equal(queue.toString(), data.join(','), 'incorrect queue as string');
  });
});
