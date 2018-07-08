# selection-sort

```bash
function selection_sort (list)
  for current <- 1 ... list.length - 1
    smallest <- current
    for i <- current + 1 ... list.length
      if list[i] < list[smallest]
        smallest <- i
    list.swap_items(current, smallest)
```
