__evil-knapsack__

_pseudocode_

```js
function greedy_knapsack(items, max_weight)
  bag_weight <- 0
  bag_items <- List.new
  foreach item in sort_by_value(items);
    if max_weight <= bag_weight + item.weight
      bag_weight <- bag_weight + item.weight
      bag_items.append(items)
  
  return bag_items;
```
