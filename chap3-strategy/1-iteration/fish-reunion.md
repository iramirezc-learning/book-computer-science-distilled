__fish-reunion__

_You're given a list of saltwater fish and a list of freshwater fish, both in alphabetical order. How do you create a list featuring all the fish in alphabetical order?_

_pseudocode_

```js
function merge(sea, fresh)
  result <- List.new

  while not (sea.empty and fresh.empty)
    if sea.top_item > fresh.top_item
      fish <- sea.remove_top_item
    else
      fish <- fresh.remove_top_item
    result.append(fish)
  
  return result
```
