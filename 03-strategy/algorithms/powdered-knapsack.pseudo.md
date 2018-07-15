# powdered-knapsack

```bash
function powdered_knapsack (items, max_weight)
  bag_value <- 0
  bag_weight <- 0
  bag_items <- List.new
  items <- sort_by_value_weight_ratio(items)

  for each (i in items)
    weight <- min(max_weight - bag_weight, i.weight)
    bag_weight <- bag_weight + weight
    value <- weight * i.value_weight_ratio
    bag_value <- bag_value + value
    bag_items.append(item, weight)

  return bag_items, bag_value
```
