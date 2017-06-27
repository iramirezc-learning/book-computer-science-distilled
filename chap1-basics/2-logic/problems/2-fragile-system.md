# Fragile System

__We have to create a database system with the following requirements:__

  1. If the database is locked, we can save data.
  2. A database lock on a full write queue cannot happen.
  3. Either the write queue is full, or the cache is loaded.
  4. If the cache is loaded, the database cannot be locked.

_Is this possible? Under which conditions will it work?_
