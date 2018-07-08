# merge-two-sorted-lists

## Fish Reunion

_You're given a list of saltwater fish and a list of freshwater fish, both in alphabetical order._

_How do you create a list featuring all the fish in alphabetical order?_

```bash
function merge (list1, list2)
  result <- List.new

  while not (list1.empty and list2.empty)
    if list1.top_item < list2.top_item
      item <- list1.remove_top_item
    else
      item <- list2.remove_top_item

    result.append(item)

  return result
```
