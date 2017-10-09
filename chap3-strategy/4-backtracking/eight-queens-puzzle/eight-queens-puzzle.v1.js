// Eight Queens Puzzle. How do you place eight queens
// on the board such that no queens attack each other?

const QUEEN = '*';
const ATTACKED = '·';
const COLLISION = 'x';
const EMPTY = ' ';

function Square() {
  this.holdingPiece = null;
  this.attackedBy = Object.create(null);
}

Square.prototype.toString = function () {
  function printSquare(val) {
    return `[${val}]`;
  }

  const attackedCount = Object.keys(this.attackedBy).length;

  if (this.holdingPiece && !attackedCount) {
    return printSquare(this.holdingPiece.display);
  } else if (this.holdingPiece && attackedCount) {
    return printSquare(COLLISION);
  } else if (!this.holdingPiece && attackedCount) {
    return printSquare(ATTACKED);
  } else {
    return printSquare(EMPTY);
  }
}

Square.prototype.isEmpty = function () {
  return !this.holdingPiece && !Object.keys(this.attackedBy).length;
}

function createBoard(boardSize) {
  const board = new Array(boardSize);

  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize);
    for (let j = 0; j < boardSize; j++) {
      board[i][j] = new Square();
    }
  }

  return board;
}

function printBoard(board) {
  return board.map(row => row.map(square => square.toString()).join('')).join('\n');
}

function getTargetSquares(board, position) {
  const { y: row, x: col } = position;
  const totalRows = board.length;
  const totalCols = board[row].length;
  const squares = [];

  let y, x;

  function isInLimit(y, x) {
    if (y >= 0 && y < totalRows && x >= 0 && x < totalCols) {
      return true;
    }

    return false;
  }

  // horizontal
  for (x = 0; x < totalCols; x++) {
    if (x !== col) {
      squares.push({ y: row, x });
    }
  }

  // vertical
  for (y = 0; y < totalRows; y++) {
    if (y !== row) {
      squares.push({ y, x: col });
    }
  }

  // diagonal top left
  y = row;
  x = col;
  while (isInLimit(--y, --x)) {
    squares.push({ y, x });
  }

  // diagonal top right
  y = row;
  x = col;
  while (isInLimit(--y, ++x)) {
    squares.push({ y, x });
  }

  // diagonal bottom left
  y = row;
  x = col;
  while (isInLimit(++y, --x)) {
    squares.push({ y, x });
  }

  // diagonal bottom right
  y = row;
  x = col;
  while (isInLimit(++y, ++x)) {
    squares.push({ y, x });
  }

  return squares;
}

function hasNQueens(board, nQueens) {
  let queens = 0;

  board.forEach(row => {
    row.forEach(square => {
      if (square.holdingPiece && square.holdingPiece.display === QUEEN) {
        queens++;
      }
    });
  });

  return queens === nQueens;
}

function unattackedPositions(board) {
  const unattacked = [];

  board.forEach((row, y) => {
    row.forEach((square, x) => {
      if (square.isEmpty()) {
        unattacked.push({ y, x });
      }
    });
  });

  return unattacked;
}

function placeQueen(board, position) {
  const attacks = getTargetSquares(board, position);
  const { y, x } = position;
  const queenPositionKey = `${y}${x}`;

  board[y][x].holdingPiece = {
    display: QUEEN,
    attacks,
  };

  attacks.forEach(({ y, x }) => {
    board[y][x].attackedBy[queenPositionKey] = true;
  });
}

function removeQueen(board, position) {
  const { y, x } = position;

  if (!board[y][x].holdingPiece) {
    return;
  }

  const queenPositionKey = `${y}${x}`;
  const attacks = board[y][x].holdingPiece.attacks;

  attacks.forEach(({ y, x }) => {
    delete board[y][x].attackedBy[queenPositionKey];
  });

  board[y][x].holdingPiece = null;
}

function queens(board, nQueens) {
  if (hasNQueens(board, nQueens)) {
    return board;
  }

  const unattacked = unattackedPositions(board);

  for (let i = 0, len = unattacked.length; i < len; i++) {
    const position = unattacked[i];

    placeQueen(board, position);

    const solution = queens(board, nQueens);

    if (solution) {
      return solution;
    }

    removeQueen(board, position);
  }

  return false;
}

// Start
// ==================================================
const BOARD_SIZE = 8;
const board = createBoard(BOARD_SIZE);

const solution = queens(board, BOARD_SIZE);
console.log('solution->');
console.log(solution ? printBoard(solution) : solution);
// [*][·][·][·][·][·][·][·]
// [·][·][·][·][*][·][·][·]
// [·][·][·][·][·][·][·][*]
// [·][·][·][·][·][*][·][·]
// [·][·][*][·][·][·][·][·]
// [·][·][·][·][·][·][*][·]
// [·][*][·][·][·][·][·][·]
// [·][·][·][*][·][·][·][·]