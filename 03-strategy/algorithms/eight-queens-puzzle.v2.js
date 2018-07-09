var QUEEN = '*';

/**
 * Returns an Array of Arrays of `0` Zeros
 * @example
 * // boardSize = 3
 * // [[0,0,0],[0,0,0],[0,0,0]]
 * @param {number} boardSize
 * @returns {Array}
 */
function createBoard(boardSize) {
  var board = new Array(boardSize);

  for (var y = 0; y < boardSize; y++) {
    board[y] = new Array(boardSize);
    for (var x = 0; x < boardSize; x++) {
      board[y][x] = 0;
    }
  }

  return board;
}

/**
 * Prints the board.
 * @example
 * // board of size 3
 * // [*][·][·]
 * // [·][*][·]
 * // [·][·][*]
 * @param {Array} board
 * @returns {string}
 */
function printBoard(board) {
  return board.map(row => row.map(col => col === QUEEN ? `[${col}]` : '[ ]').join('')).join('\n');
}

/**
 * Returns the board as a string in a single row.
 * @example
 * // board of size 3
 * // [*][·][·][·][*][·][·][·][*]
 * @param {Array} board
 * @returns {string}
 */
function serializeBoard(board) {
  if (Array.isArray(board)) {
    return board.map(row => row.map(col => col === QUEEN ? `[${col}]` : '[ ]').join('')).join('');
  } else {
    return board;
  }
}

/**
 * Tells if the board has `n` queens.
 * @param {Array} board
 * @param {number} nQueens 
 * @returns {boolean}
 */
function hasNQueens(board, nQueens) {
  var totalQueens = 0;

  board.forEach(y => {
    y.forEach(x => {
      if (x === QUEEN) {
        totalQueens++
      }
    });
  });

  return totalQueens === nQueens;
}

/**
 * Gets the list of attacked squares from a given position.
 * @param {Array} board 
 * @param {Object} position Attacker's position in the board
 * @param {number} position.x Attacker's X position
 * @param {number} position.y Attacker's Y position
 * @returns {Array} List of attacked squares
 */
function getTargetSquares(board, position) {
  var { y: row, x: col } = position;
  var boardSize = board.length;
  var squares = [];

  var y, x;

  function isInLimit(y, x) {
    if (y >= 0 && y < boardSize && x >= 0 && x < boardSize) {
      return true;
    }

    return false;
  }

  // horizontal
  for (x = 0; x < boardSize; x++) {
    if (x !== col) {
      squares.push({ y: row, x });
    }
  }

  // vertical
  for (y = 0; y < boardSize; y++) {
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

/**
 * Returns a list of the unnattacked squares in the board.
 * @param {Array} board
 * @returns {Array}
 */
function getUnattackedPositions(board) {
  var unattacked = [];

  board.forEach((row, y) => {
    row.forEach((col, x) => {
      if (board[y][x] === 0) {
        unattacked.push({ y, x });
      }
    });
  });

  return unattacked;
}

/**
 * Places a Queen piece in the board
 * @param {Array} board
 * @param {Object} position Queen's position in the board
 * @param {number} position.x Queen's X position
 * @param {number} position.y Queen's Y position
 * @returns {boolean}
 */
function placeQueen(board, position) {
  var { y, x } = position;

  if (board[y][x] !== 0) {
    return false;
  }

  board[y][x] = QUEEN;

  var attacked = getTargetSquares(board, position);

  attacked.forEach(({ y, x }) => {
    board[y][x]++;
  });

  return true;
}

/**
 * Removes a Queen piece from the board
 * @param {Array} board
 * @param {Object} position Queen's position in the board
 * @param {number} position.x Queen's X position
 * @param {number} position.y Queen's Y position
 * @returns {boolean}
 */
function removeQueen(board, position) {
  var { y, x } = position;

  if (board[y][x] !== QUEEN) {
    return false;
  }

  board[y][x] = 0;

  var attacked = getTargetSquares(board, position);

  attacked.forEach(({ y, x }) => {
    board[y][x]--;
  });

  return true;
}

/**
 * Solves the nQueens Puzzle
 * @param {Array} board
 * @param {number} boardSize
 */
function solveQueens(board, boardSize) {
  if (hasNQueens(board, boardSize)) {
    return board;
  }

  var unattackedPositions = getUnattackedPositions(board);

  for (var i = 0, len = unattackedPositions.length; i < len; i++) {
    var position = unattackedPositions[i];

    placeQueen(board, position);

    var solution = solveQueens(board, boardSize);

    if (solution) {
      return solution;
    }

    removeQueen(board, position);
  }

  return false;
}

solveQueens.createBoard = createBoard;
solveQueens.printBoard = printBoard;
solveQueens.serializeBoard = serializeBoard;

module.exports = solveQueens;