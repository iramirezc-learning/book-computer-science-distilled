const assert = require('assert');

const Stack = require('./Stack');

describe('Data Structure - Stack', function () {
  /**
   * @type {Stack}
   * @private
   */
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('should be intialized correctly', function () {
    assert.ok(stack, 'stack is not intialized');
  });

  it('should start empty', function () {
    assert.equal(stack.isEmpty(), true, 'stack is NOT empty');
  });

  it('should throw an exception if trying to pop on a empty stack', function () {
    assert.throws(() => { stack.pop() }, /^Error: Stack is empty\.$/, 'Stack not throwing an Error');
  });

  it('should push and peek the top item correctly', function () {
    const value = 1;

    stack.push(value);

    assert.equal(stack.peek(), value, 'incorrect item 1');
    assert.equal(stack.isEmpty(), false, 'stack should not be empty');
  });

  it('should push and pop the top item correctly', function () {
    const value = 1;

    stack.push(value);

    assert.equal(stack.pop(), value, 'incorrect item 1');
    assert.equal(stack.isEmpty(), true, 'stack should be empty');
  });

  it('should push and pop multiple items correctly', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    data.forEach(d => stack.push(d));

    const retrievedData = [];

    while (!stack.isEmpty()) {
      retrievedData.unshift(stack.pop());
    }

    assert.deepEqual(retrievedData, data, 'incorrect retrieved data');
    assert.equal(stack.isEmpty(), true, 'stack should be empty');
  });

  it('should return the stack as string', function () {
    const data = [1, 2, 3, 4, 5, false, {}, [], 'hello'];

    assert.equal(stack.toString(), '[Empty Stack]', 'incorrect empty stack as string');

    data.forEach(d => stack.push(d));

    assert.equal(stack.toString(), data.reverse().join('\n'), 'incorrect stack as string');
  });
});
