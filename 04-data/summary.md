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

> is a dictionary of key => values pairs.

#### The Set

> Code: [Set.js](./data-structures/Set.js)

##### What's a Set?

> is an **unordered** collection of **unique** items.

---

### Section 3: Structures

> Data Structures provides ways to implement ADT. ADT are built on top of data structures.
>
> ADT don't describe how something works, Data Structures describe how data is stored.

#### The Array

> Arrays are stored in memory in sequence. They have fixed size of each element.
>
> **Advantages:**
>
> Arrays are useful to implement **Stacks**, **Lists** and **Queues**. Arrays provide instant access to its elements by index.
>
> **Drawbacks:**
>
> Arrays can be dificult to modify, for instance, by trying to remove an element, memory should be reacollated.
> For big inputs it may not be enough space, since memory should be reserved in sequence.
>
> [Arrays in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### The Linked List

> Linked Lists are stored in different places in memory and they keep reference to the next item with a pointer.
>
> **Advantages:**
>
> Linked Lists are also useful to implement [Stacks](./data-structures/Stack.js), [Lists](./data-structures/List.js) and [Queues](./data-structures/Queue.js).
> We can take more advantage of memory since they're not required to be in sequence.
>
> **Drawbacks:**
>
> In order to get the `nth` element in a linked list, you should start from the first and start couting.
> We can not know the previous item of a current item easy, we need to iterate over all items from the first one until the `n - 1` item.
>
> Code: [LinkedList.js](./data-structures/List.js)

#### The Doubly Linked List

> The Doubly Linked List is the same as a Linked List with an extra pointer, pointing to the previous element.
>
> **Advantages:**
>
> It is easier to delete items in the middle. We can iterate forward and backwards in the list.
>
> **Drawbacks:**
>
> We still need to iterate over all items starting from the first one to access any `nth` item.
> Implemetation is more complex in code.
> More memory space required to store the pointer.
>
> Code: [DoublyLinkedList.js](./data-structures/DoublyLinkedList.js)

#### Arrays vs. Linked Lists

> Some feature-rich programming languages have some of the ADT built-in. We can make used of this generic implementations when performance is not an issue, otherwise, we should consider to implement the best ADT for a specific problem and also when working with low-level programming languages.
>
> **Use Arrays when:**
> * Accessing data in a random or unordered way.
> * Length of values is fixed or it will never change.
> * Need instant access to elements.
>
> **Use Linked Lists when:**
> * Adding/removing elements in a faster way and in the middle of the list.
> * Length can be variable.
> * No need to access data in a random way.

#### The Tree

> Like the Linked List, Trees do not use contiguous memory cells in physical memory to store objects. Unlike the Linked List, values and pointers are not arranged in a linear chain but in a tree-like structure.
>
> * **node**: A cell in the tree. Must have one single parent, except from the root node.
> * **root**: The top-most node of a Tree. Doesn't have a parent.
> * **edge**: A pointer from one node to another.
> * **parent**: The parent of a node
> * **children**: The children of a node
> * **antecesors**: Parent, grandparent, great-grandparent of a node.
> * **decendants**: Children, grand-children, ... of a node.
> * **siblings**: Nodes that share the same parent.
> * **leaf**: Nodes with no children.
> * **path**: The set of nodes and edges to lead from one node to another.
> * **height**: The number of levels from the the root node to the deepest node in the tree.
> * **level**: Position of a node in the tree in respect of the root node.
> * **forest**: A set of trees.

#### Binary Search Tree

#### The Binary Heap

#### The Graph

#### The Hash Table

## References

### In the book:
