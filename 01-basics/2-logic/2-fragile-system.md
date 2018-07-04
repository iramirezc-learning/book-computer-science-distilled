# Fragile System

__We have to create a database system with the following requirements:__

  1. If the database is locked, we can save data.
  2. A database lock on a full write queue cannot happen.
  3. Either the write queue is full, or the cache is loaded.
  4. If the cache is loaded, the database cannot be locked.

_Is this possible? Under which conditions will it work?_

A = Database Locked

B = Can save data

C = Write queue is full

D = Cache is loaded

1 = `A -> B`

2 = `!(A AND C)`

3 = `C OR D`

4 = `D -> !A`

\* = All conditions (1-4) met

Truth Table: ✓ ✗

| #| A | B | C | D | | 1 | 2 | 3 | 4 | * |
|--|---|---|---|---|-|---|---|---|---|---|
| 1| ✓ | ✓ | ✓ | ✓ | | ✓ | ✗ | ✓ | ✗ | ✗ |
| 2| ✓ | ✓ | ✓ | ✗ | | ✓ | ✗ | ✓ | ✓ | ✗ |
| 3| ✓ | ✓ | ✗ | ✓ | | ✓ | ✓ | ✓ | ✗ | ✗ |
| 4| ✓ | ✓ | ✗ | ✗ | | ✓ | ✓ | ✗ | ✓ | ✗ |
| 5| ✓ | ✗ | ✓ | ✓ | | ✗ | ✗ | ✓ | ✗ | ✗ |
| 6| ✓ | ✗ | ✓ | ✗ | | ✗ | ✗ | ✓ | ✓ | ✗ |
| 7| ✓ | ✗ | ✗ | ✓ | | ✗ | ✓ | ✓ | ✗ | ✗ |
| 8| ✓ | ✗ | ✗ | ✗ | | ✗ | ✓ | ✗ | ✓ | ✗ |
| 9| ✗ | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|10| ✗ | ✓ | ✓ | ✗ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|11| ✗ | ✓ | ✗ | ✓ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|12| ✗ | ✓ | ✗ | ✗ | | ✓ | ✓ | ✗ | ✓ | ✗ |
|13| ✗ | ✗ | ✓ | ✓ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|14| ✗ | ✗ | ✓ | ✗ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|15| ✗ | ✗ | ✗ | ✓ | | ✓ | ✓ | ✓ | ✓ | ✓ |
|16| ✗ | ✗ | ✗ | ✗ | | ✓ | ✓ | ✗ | ✓ | ✗ |


**Result ->**

All requirements are met in states 9, 10, 11, 13, 14 and 15.

Cache will not be loaded on states 10 and 14.
