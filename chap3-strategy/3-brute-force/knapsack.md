__knapsack__

_pseudocode_

```js
function knapsack(items, max_weight)
  best_value <- 0
  foreach candidate in power_set(items)
    if total_weight(candidate) <= max_weight
      if sales_value(candidate) > best_value
        best_value <- sales_value(candidate)
        best_candidate <- candidate
  
  return best_candidate
```
