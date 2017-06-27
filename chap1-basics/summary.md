# Chapter 1. Basics - Summary

## 1.1 Ideas

There are different ways to help you break down a problem into smaller processable chunks, the ones covered in this book are:
  * Flowcharts
  * Pseudocode
  * Math models

## 1.2 Logic

### Truth Tables

(http://kias.dyndns.org/comath/21.html)

AND (conjunction)
---
| p | q | p & q |
|---|---|-------|
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   F   |

OR (disjunction)
---
| p | q | p | q |
|---|---|-------|
| T | T |   T   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |

NOT (negation | inversion)
---
| p | ~p |
|---|----|
| T |  F |
| F |  T |

XOR (eXclusive OR) _p X q is T if either p or q is T, but not both_
---
| p | q | p X q |
|---|---|-------|
| T | T |   F   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |

IMPLIES (implication)
---
| p | q | p -> q |
|---|---|--------|
| T | T |   T    |
| T | F |   F    |
| F | T |   T    |
| F | F |   T    |

  * A `TRUE` premise implies a `TRUE` conclusion, `T -> T is T`
  * A `TRUE` premise can not imply a `FALSE` conclusion, `T -> F is F`
  * You can conclude anything from a `FALSE` assumption, `F -> * is T`
  * CONTRAPOSITIVE. If `A -> B`, its contrapositive is `!B -> !A`

EQUIVALENCE
---
| p | q | p <-> q |
|---|---|---------|
| T | T |    T    |
| T | F |    F    |
| F | T |    F    |
| F | F |    T    |

### Operators Precedence

  1. NOT
  2. AND,
  3. OR, XOR
  4. IMPLIES, EQUIVALENCE

### Boolean Algebra

Associativity

`A AND (B AND C) = (A AND B) AND C`
`A OR (B OR C) = (A OR B) OR C`

Distributivity

`A AND (B OR C) = (A AND B) OR (A AND C)`
`A OR (B AND C) = (A OR B) AND (A OR C)`

DeMorgan's Law

`!(A AND B) = !A OR !B`
`!A AND !B = !(A OR B)`

## 1.3 Counting
