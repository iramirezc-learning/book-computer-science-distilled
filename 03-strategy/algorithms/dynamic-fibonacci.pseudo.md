# dynamic-fibonacci

```bash
M <- [1 -> 1; 2 -> 2]

function dfib (n)
  if n not in M
    M[n] <- dfib(n - 1) + dfib(n - 2)
  return M[n]
```
