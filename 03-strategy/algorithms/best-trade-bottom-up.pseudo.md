# best-trade-bottom-up (dynamic-programming)

```bash
function best_trade_dp (P)
  B[1] <- 1
  sell_day <- 1
  best_profit <- 0

  for each (n from 2 to P.length)
    if P[n] < P[B[n - 1]]
      B[n] <- n
    else
      B[n] <- B[n - 1]

    profit <- P[n] - P[B[n]]

    if profit > best_profit
      sell_day <- n
      best_profit <- profit

  return (sell_day, B[sell_day])
  ```
