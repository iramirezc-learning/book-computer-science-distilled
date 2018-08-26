const assert = require('assert');

const Node = require('./Node');

describe('Data Structure - Node', function () {
  const intialValue = 'Initial Value';
  /**
   * @type {Node}
   * @private
   */
  let node;

  beforeEach(function () {
    node = new Node(intialValue);
  });

  it('should be initialized correctly', function () {
    assert.ok(node, 'node is not initialized');
    assert.equal(node._value, intialValue, '_value is incorrect');
    assert.equal(node.value, intialValue, 'value is incorrect');
    assert.equal(node._next, null, 'invalid _next pointer');
    assert.equal(node.next, null, 'invalid next pointer');
    assert.equal(node._priority, 0, 'invalid _priority');
    assert.equal(node.priority, 0, 'invalid priority');
  });

  it('should not allow to change the readonly value', function () {
    const newValue = 'some other value';

    node._value = newValue;
    assert.equal(node._value, intialValue, '_value has changed');
    node.value = newValue;
    assert.equal(node.value, intialValue, 'value has changed');
  });

  it('should throw an exception when initializing with an invalid priority', function () {
    const invalidPriority = '1';
    assert.throws(() => { new Node(intialValue, invalidPriority) }, /^Error: "priority" should be an integer\.$/, 'Node constructor is not throwing an Error');
  });

  it('should update the next node correctly to null', function () {
    const newNext = null;

    node._next = newNext;
    assert.equal(node._next, node.getNext(), '_next should not have changed');
    node.next = newNext;
    assert.equal(node.next, newNext, 'invalid next');
    node.setNext(newNext);
    assert.equal(node.getNext(), newNext, 'invalid getNext');
  });

  it('should update the next node correctly to another node', function () {
    const newNext = new Node(true);

    node._next = newNext;
    assert.equal(node._next, node.getNext(), '_next should not have changed');
    node.next = newNext;
    assert.equal(node.next, newNext, 'invalid next');
    node.setNext(newNext);
    assert.equal(node.getNext(), newNext, 'invalid getNext');
  });

  it('should throw an exception when new next is not an instance of Node or null', function () {
    assert.throws(() => { node.next = undefined }, /^Error: "next" should be an instance of Node or null\.$/, 'next is not throwing an Error');
    assert.throws(() => { node.setNext(undefined) }, /^Error: "next" should be an instance of Node or null\.$/, 'setNext is not throwing an Error');
  });

  it('should return false when there is no next node', function () {
    assert.equal(node.hasNext(), false, 'invalid hasNext');
  });

  it('should return true when there is a next node', function () {
    node.setNext(new Node('new value'));
    assert.equal(node.hasNext(), true, 'invalid hasNext');
  });

  it('should return the node as string', function () {
    assert.equal(node.toString(), String(intialValue), 'invalid node as string');
  });
});
