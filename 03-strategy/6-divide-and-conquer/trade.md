__divide-and-trade__

_pseudocode_

```js
function trade(prices)
  if (prices.length = 1)
    return 0
  former <- prices.first_half
  latter <- prices.last_half
  case3 <- max(latter) - min(former)

  return max(trade(latter), trade(former), case3)
```
