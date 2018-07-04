const QUEEN = '*';

function createBoard(boardSize) {
  const board = new Array(boardSize);

  for (let y = 0; y < boardSize; y++) {
    board[y] = new Array(boardSize);
    for (let x = 0; x < boardSize; x++) {
      board[y][x] = 0;
    }
  }

  return board;
}

function printBoard(board) {
  return board.map(row => row.map(col => col === QUEEN ? `|${col}|` : '| |').join('')).join('\n');
}

function hasNQueens(board, nQueens) {
  let totalQueens = 0;

  board.forEach(y => {
    y.forEach(x => {
      if (x === QUEEN) {
        totalQueens++
      }
    });
  });

  return totalQueens === nQueens;
}

function getTargetSquares(board, position) {
  const { y: row, x: col } = position;
  const totalRows = board.length;
  const totalCols = board[row].length;
  const attackedSquares = [];

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
      attackedSquares.push({ y: row, x });
    }
  }

  // vertical
  for (y = 0; y < totalRows; y++) {
    if (y !== row) {
      attackedSquares.push({ y, x: col });
    }
  }

  // diagonal top left
  y = row;
  x = col;
  while (isInLimit(--y, --x)) {
    attackedSquares.push({ y, x });
  }

  // diagonal top right
  y = row;
  x = col;
  while (isInLimit(--y, ++x)) {
    attackedSquares.push({ y, x });
  }

  // diagonal bottom left
  y = row;
  x = col;
  while (isInLimit(++y, --x)) {
    attackedSquares.push({ y, x });
  }

  // diagonal bottom right
  y = row;
  x = col;
  while (isInLimit(++y, ++x)) {
    attackedSquares.push({ y, x });
  }

  return attackedSquares;
}

function getUnattackedPositions(board) {
  const unattacked = [];

  board.forEach((row, y) => {
    row.forEach((col, x) => {
      if (board[y][x] === 0) {
        unattacked.push({ y, x });
      }
    });
  });

  return unattacked;
}

function placeQueen(board, position) {
  const { y, x } = position;

  if (board[y][x] !== 0) {
    return false;
  }

  board[y][x] = QUEEN;

  const attacked = getTargetSquares(board, position);

  attacked.forEach(({ y, x }) => {
    board[y][x]++;
  });

  return true;
}

function removeQueen(board, position) {
  const { y, x } = position;

  if (board[y][x] !== QUEEN) {
    return false;
  }

  board[y][x] = 0;

  const attacked = getTargetSquares(board, position);

  attacked.forEach(({ y, x }) => {
    board[y][x]--;
  });

  return true;
}

function copyArray(array) {
  const copy = [];

  for (let i = 0, len = array.length; i < len; i++) {
    if (Array.isArray(array[i])) {
      copy[i] = copyArray(array[i]);
    } else {
      copy[i] = array[i];
    }
  }

  return copy;
}

const solutions = [];

function saveSolution(board) {
  const copyBoard = copyArray(board);
  const boardString = printBoard(copyBoard);

  if (solutions.some(sol => printBoard(sol) === boardString)) {
    return;
  }

  solutions.push(copyBoard);
}


function solveQueens(board, boardSize) {
  if (hasNQueens(board, boardSize)) {
    // save solution
    saveSolution(board);
    return board;
  }

  const unattackedPositions = getUnattackedPositions(board);

  for (let i = 0, len = unattackedPositions.length; i < len; i++) {
    const position = unattackedPositions[i];

    if (placeQueen(board, position)) {
      const solution = solveQueens(board, boardSize);

      removeQueen(board, position);
    }
  }

  return false;
}

// Start
// ==============================
const BOARD_SIZE = 8;
const board = createBoard(BOARD_SIZE);

console.time('queens');
const solution = solveQueens(board, BOARD_SIZE);
console.timeEnd('queens');
console.log('total solutions->', solutions.length); // if SIZE = 8 -> solutions: 92