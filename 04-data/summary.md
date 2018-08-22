# Computer Science Distilled

## Summary - Chapter 4: Data

> Good programmers worry about data structures and their relationships.
>
> -- _Linus Torvalds_

**:dart: Objectives:**

> * _How to abstract **data types** to keep code clean_
> * _Learn common abstractions_
> * _Learn different ways to structure data in memory_

---

### Intro

#### Abstractions

> Abstraction = hidden details

#### Data Type

> Examples of data types
>
> * String
> * Boolean
> * Number

### Section 1: Abstract Data Types

#### ADT

##### Abstract Data Types

> an ADT is the specification / interface for working with variables of a given type

##### Advantages of ADT

> * Simplicity: Code simple and easy to understand
> * Flexibility: Same interface
> * Reusability: Same ADT can be used in different algorithms
> * Organization: Separation of concerns
> * Convenience: Learn how to use it, not worried about how it works.
> * Bug-Fixing: Fix once, fix all parts.

---

### Section 2: Common Abstractions

> It is equally important to choose which ADT to use when solving a computational problem.

#### Primitive Data Types

##### Primitive Data Types Examples

> * Integers
> * Floating points
> * Booleans
> * Strings

#### The Stack

> Code: [Stack.js](./data-structures/Stack.js)

##### What is a Stack?

> a pile of items where you can only work with the one at the top
>
> processing data this way is also known as **LIFO** (Last-In, First-Out)

#### The Queue

> Code: [Queue.js](./data-structures/Queue.js)

##### What is a Queue?

> is just like any real queue. Image a queue of people for a concert where the new person goes to the end of the line
>
> processing data this way is also known as **FIFO** (First-In, First-Out)

#### The Priority Queue

> Code: [PriorityQueue.js](./data-structures/PriorityQueue.js)

##### What's a PriorityQueue?

> is just like the Queue but elements are enqueued by their priority.
>
> imagine a line of patients waiting to be the attended in a hospital, patients with the most critical status will be attended first because they have higher priority

#### The List

> Code: [List.js](./data-structures/List.js)

##### What's a List?

> is a more flexible ADT in which you can `insert`, `remove` and `get` elements at any position. Functionality like `sort`, `reverse` and `slice` is also available.

#### The Sorted List

> Code: [SortedList.js](./data-structures/SortedList.js)

##### What's a Sorted List?

> is a lighter version of a List in which you can `insert`, `remove` and `get` elements at any position. Items are inserted in Lexicographical order, that way the list is always sorted.

#### The Map

> Code: [Map.js](./data-structures/Map.js)

##### What's a Map?

> is a dictionary of key => values

#### The Set

---

### Section 3: Structures

#### The Array

#### The Linked List

#### The Double Linked List

#### Arrays vs. Linked Lists

#### The Tree

#### Binary Search Tree

#### The Binary Heap

#### The Graph

#### The Hash Table

## References

### In the book:
