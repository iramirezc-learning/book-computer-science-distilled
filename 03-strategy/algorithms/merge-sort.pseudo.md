# merge-sort

```bash
function merge_sort(list)
  if list.length = 1
    return list

  left <- list.first_half
  right <- list.last_half

  return merge(merge_sort(left), merge_sort(right));
```
