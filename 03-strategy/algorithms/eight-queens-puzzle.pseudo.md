# eight-queens-puzzle

_How do you place eight queens on the board such that no queens attack each other?_

```bash
function queens (board)
  if board.has_8_queens
    return board

  for each (position in board.unattacked_positions)
    board.place_queen(position)
    solution <- queens(board)
    if (solution)
      return solution
    board.remove_queen(position) # backtracking

  return false
```
