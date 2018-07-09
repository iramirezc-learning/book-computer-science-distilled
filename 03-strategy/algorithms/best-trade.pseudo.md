# best-trade

## Best Trade

_You have the daily prices of gold for a interval of time. You want to find two days in this interval such that if you had bought then sold gold at those dates, you'd have made the maximum possible profit._

```bash
function best_trade (gold_prices)
  buyingDate
  sellingDate
  maxProfit

  for each (buyingPrice in gold_prices)
    for each (sellingPrice in gold_prices)
      profit <- sellingPrice - buyingPrice
      if profit > maxProfit
        maxProfit <- profit
        buyingDate <- indexOf(buyingPrice)
        sellingDate <- indexOf(sellingPrice)

  return maxProfit
```