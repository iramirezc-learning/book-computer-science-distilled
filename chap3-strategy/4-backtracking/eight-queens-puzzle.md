__eight-queens-puzzle__

_pseudocode_

```js
function queens(board)
  if board.has_8_queens
    return board
  foreach position in board.unattacked_positions
    board.place_queen(position)
    solution <- queens(board)
    if solution
      return solution
    board.remove_queen(position)
  return false
```
