# knapsack

## Knapsack

_You have a knapsack to carry products for selling. It holds up to a certain weight, not enough for carrying all your products - you must choose which ones to carry. Knowing the weight and sales value of each product, which choice of products gives the highest revenue?_

```bash
function knapsack (items, max_weight)
  best_value <- 0

  for each (candidate in power_set(items))
    if (total_weight(candidate) <= max_weight)
      if sales_value(candidate) > best_value
        best_value <- sales_value(candidate)
        best_candidate <- candidate

  return best_candidate
```
