# Fragile System

**Problem:**

_We have to create a database system with the following requirements:_

> I. If the database is locked, we can save data.
>
> II. A database lock on a full write queue cannot happen.
>
> III. Either the write queue is full, or the cache is loaded.
>
> IV. If the cache is loaded, the database cannot be locked.

_Is this possible? Under which conditions will it work?_

**Solution:**

Conditions

> `A` = Database Locked
>
> `B` = Can save data
>
> `C` = Write queue is full
>
> `D` = Cache is loaded

Model

> `I` = `A -> B`
>
> `II` = `!(A AND C)`
>
> `III` = `C OR D`
>
> `IV` = `D -> !A`

Truth Table: ✓ ✗

| #| A | B | C | D | | I | II | III | IV | * |
|--|---|---|---|---|-|---|----|-----|----|---|
| 1| ✓ | ✓ | ✓ | ✓ | | ✓ | ✗  | ✓   | ✗  | ✗ |
| 2| ✓ | ✓ | ✓ | ✗ | | ✓ | ✗  | ✓   | ✓  | ✗ |
| 3| ✓ | ✓ | ✗ | ✓ | | ✓ | ✓  | ✓   | ✗  | ✗ |
| 4| ✓ | ✓ | ✗ | ✗ | | ✓ | ✓  | ✗   | ✓  | ✗ |
| 5| ✓ | ✗ | ✓ | ✓ | | ✗ | ✗  | ✓   | ✗  | ✗ |
| 6| ✓ | ✗ | ✓ | ✗ | | ✗ | ✗  | ✓   | ✓  | ✗ |
| 7| ✓ | ✗ | ✗ | ✓ | | ✗ | ✓  | ✓   | ✗  | ✗ |
| 8| ✓ | ✗ | ✗ | ✗ | | ✗ | ✓  | ✗   | ✓  | ✗ |
| 9| ✗ | ✓ | ✓ | ✓ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|10| ✗ | ✓ | ✓ | ✗ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|11| ✗ | ✓ | ✗ | ✓ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|12| ✗ | ✓ | ✗ | ✗ | | ✓ | ✓  | ✗   | ✓  | ✗ |
|13| ✗ | ✗ | ✓ | ✓ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|14| ✗ | ✗ | ✓ | ✗ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|15| ✗ | ✗ | ✗ | ✓ | | ✓ | ✓  | ✓   | ✓  | ✓ |
|16| ✗ | ✗ | ✗ | ✗ | | ✓ | ✓  | ✗   | ✓  | ✗ |

> `*` All conditions (I-IV) are met

Result

> All requirements are met in states: `9-11` and `13-15`.
>
> Cache will not be loaded in states `10` and `14`.
>
> Database can **NOT** ever be locked when `A = false`.
