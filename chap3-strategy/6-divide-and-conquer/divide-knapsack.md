__divide-knapsack__

_math function_

```js
W = weight
V = value

K(n, c) = max( K(n - 1, c), 
               K(n - 1, c - Wn) + Vn )
```
