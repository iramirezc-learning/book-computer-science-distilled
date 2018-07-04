__recursive-power-set__

_pseudocode_

```js
function recursive_power_set(items)
  ps <- copy(items)
  for each (e in items)
    ps <- ps.remove(e)
    ps <- ps + recursive_power_set(ps)
    ps <- ps.add(e)
  return ps
```
