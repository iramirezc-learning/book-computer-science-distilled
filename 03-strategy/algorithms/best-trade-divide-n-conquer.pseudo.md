# best-trade-divide-n-conquer

## Best Trade

_You have the daily prices of gold for a interval of time. You want to find two days in this interval such that if you had bought then sold gold at those dates, you'd have made the maximum possible profit._

```bash
function trade (prices)
  if prices.length = 1
    return 0

  former <- prices.first_half
  latter <- prices.last_half
  case3 <- max(latter) - min(former)

  return max(trade(latter), trade(former), case3)
```
