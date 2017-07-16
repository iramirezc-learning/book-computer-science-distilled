__exploring-scents__

_Floral fragances are made combining scents from flowers. Give a set of flowers `F`, how do you list all fragances that can be made?_

_pseudocode_

```js
function power_set(flowers)
  fragances <- Set.new
  fragances.add(Set.new)
  
  for each (flower in flowers)
    new_fragances <- copy(fragances)
    for each (france in new_fragances)
      fragances.add(flower)
    fragances <- fragances + new_fragances
  
  return fragances
```
