# Hot Server

__A server crashes if it's overheating while the air conditioning is off. It also crashes if it's overheating and it chassis cooler fails. In which conditions does the server work?__

A = Overheating

B = Air conditioning is off

C = Chassis cooler fails

D = Server crashes

Model the problem

`(A AND B) OR (A AND C) -> D`

Use distributivity

`A AND (B OR C) -> D`

Use contrapositive

`!D -> !(A AND (B OR C))`

Use DeMorgan's Law

`!D -> !A OR !(B OR C)`

Use DeMorgan's Law one more time

`!D -> !A OR (!B AND !C)`

**Result ->** 

The server won't crash if it's not overheated or both air conditioning and cooler don't fail. In oder words, The server works if it's not overheated or both air and cooler are working.
