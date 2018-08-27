const assert = require('assert');

const DNode = require('./DoublyLinkedNode');

describe('Data Structure - Doubly Linked Node', function () {
  const intialValue = 'Initial Value';
  /**
   * @type {DNode}
   * @private
   */
  let node;

  const PRIORITY_ERROR = /^TypeError: "priority" should be an integer\.$/;
  const NODE_ERROR = /^TypeError: "node" should be an instance of DNode or null\.$/;

  beforeEach(function () {
    node = new DNode(intialValue);
  });

  it('should be initialized correctly', function () {
    assert.ok(node, 'node is not initialized');
    assert.equal(node._value, intialValue, 'invalid _value');
    assert.equal(node._priority, 0, 'invalid _priority');
    assert.equal(node._next, null, 'invalid _next pointer');
    assert.equal(node._previous, null, 'invalid _previous pointer');
  });

  it('should not allow to change the readonly value', function () {
    const newValue = 'some other value';

    node._value = newValue;
    assert.equal(node._value, intialValue, '_value has changed');
  });

  it('should throw an exception when initializing with an invalid priority', function () {
    const invalidPriority = '1';
    assert.throws(() => { new DNode(intialValue, invalidPriority) }, PRIORITY_ERROR, 'DNode constructor is not throwing an TypeError');
  });

  it('should update the next node correctly to null', function () {
    const newNext = null;
    node.setNext(newNext);
    assert.equal(node.getNext(), newNext, 'invalid newNext');
  });

  it('should update the previous node correctly to null', function () {
    const newPrevious = null;
    node.setPrevious(newPrevious);
    assert.equal(node.getPrevious(), newPrevious, 'invalid newPrevious');
  });

  it('should update the next node correctly to another node', function () {
    const newNext = new DNode(true);

    node.setNext(newNext);
    assert.equal(node.getNext(), newNext, 'invalid newNext');
  });

  it('should update the previous node correctly to another node', function () {
    const newPrevious = new DNode(true);

    node.setPrevious(newPrevious);
    assert.equal(node.getPrevious(), newPrevious, 'invalid newPrevious');
  });

  it('should throw an exception when new next is not an instance of DNode or null', function () {
    assert.throws(() => { node.setNext(undefined) }, NODE_ERROR, 'setNext is not throwing a TypeError');
  });

  it('should throw an exception when new previous is not an instance of DNode or null', function () {
    assert.throws(() => { node.setPrevious(undefined) }, NODE_ERROR, 'setPrevious is not throwing a TypeError');
  });

  it('should return false when there is no next node', function () {
    assert.equal(node.hasNext(), false, 'invalid hasNext');
  });

  it('should return false when there is no previous node', function () {
    assert.equal(node.hasPrevious(), false, 'invalid hasPrevious');
  });

  it('should return true when there is a next node', function () {
    node.setNext(new DNode('new value'));
    assert.equal(node.hasNext(), true, 'invalid hasNext');
  });

  it('should return true when there is a previous node', function () {
    node.setPrevious(new DNode('new value'));
    assert.equal(node.hasPrevious(), true, 'invalid hasPrevious');
  });

  it('should return the node as string', function () {
    assert.equal(node.toString(), String(intialValue), 'invalid node as string');
  });
});
