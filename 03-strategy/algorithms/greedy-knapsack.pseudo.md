# greedy-knapsack

## Evil Knapsack

_A greedy burglar breaks into your home to steal the products you wanted to sell. He decides to use your knapsack to carry the stolen items. Which items will he steal? Remember, the less time he spends in your home, the less likely he is to get caught._

```bash
function greedy_knapsack (items, max_weight)
  bag_weight <- 0
  bag_items <- List.new

  for each (item in sort_by_value(items))
    if max_weight <= bag_weight + item.weight
      bag_weight <- bag_weight + item.weight
      bag_items.append(items)

  return bag_items;
```
