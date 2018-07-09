const QUEEN = '*';
const ATTACKED = '·';
const COLLISION = 'x';
const EMPTY = ' ';

// How to Document Classes
// https://stackoverflow.com/questions/27343152/jsdoc-how-to-document-prototype-methods

/**
 * Square of a Board.
 * @class
 */
const Square = (function () {

  /**
   * Initializes a new instance of Square.
   * @constructs Square
   */
  function Square() {
    /**
     * Piece that is being hold.
     * @name Square#holdingPiece
     * @type {object}
     * @example
     * // {
     * //   display: QUEEN
     * //   attacks: []
     * // }
     */
    this.holdingPiece = null;

    /**
     * List of attackers to this Square.
     * @name Square#attackedBy
     * @type Array
     */
    this.attackedBy = Object.create(null);
  }

  /**
   * Prints the square with its content.
   * @example
   * // [*] - Square holding a Queen
   * // [x] - Attacked by multiple
   * // [·] - Attacked Square
   * // [ ] - Empty Square
   * @function Square#toString
   */
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
  };

  /**
   * Tells if a Square is empty and NOT attacked.
   * @function Square#isEmpty
   */
  Square.prototype.isEmpty = function () {
    return !this.holdingPiece && !Object.keys(this.attackedBy).length;
  };

  return Square;
})();

// ==================================================

/**
 * ChessBoard.
 * @class
 */
const Board = (function () {
  /**
   * Initializes a new instance of Board.
   * @constructs Board
   * @param {number} boardSize
   */
  function Board(boardSize) {
    /**
     * Board Size.
     * @name Board#boardSize
     * @type number
     */
    this.boardSize = boardSize;

    /**
     * ChessBoard.
     * @name Board#board
     * @type Array
     */
    this._board = new Array(boardSize);

    /**
     * Number of Queens.
     * @name Board#queens
     * @type number
     */
    this.queens = 0;

    /**
     * Initializes the board as an Array of Arrays of Squares
     */
    function init() {
      for (let i = 0; i < boardSize; i++) {
        this._board[i] = new Array(boardSize);
        for (let j = 0; j < boardSize; j++) {
          this._board[i][j] = new Square();
        }
      }
    }

    init.call(this);
  }

  /**
   * Prints the board.
   * @example
   * // board of size 3
   * // [*][·][·]
   * // [·][*][·]
   * // [·][·][*]
   * @function Board#toString
   */
  Board.prototype.toString = function () {
    return this._board.map(row => row.map(square => square.toString()).join('')).join('\n');
  };

  /**
   * Returns the board as a string in a single row.
   * @example
   * // board of size 3
   * // [*][·][·][·][*][·][·][·][*]
   * @function Board#serialize
   */
  Board.prototype.serialize = function () {
    return this._board.map(row => row.map(square => square.toString()).join('')).join('');
  };

  /**
   * Checks if a position is inside the boundaries of the board.
   * @param {number} x Square's X position
   * @param {number} y Square's Y position
   * @function Board#isInLimit
   */
  Board.prototype.isInLimit = function (x, y) {
    if (y >= 0 && y < this.boardSize && x >= 0 && x < this.boardSize) {
      return true;
    }

    return false;
  };

  /**
   * Gets the list of attacked Squares from a given position.
   * @function Board#getTargetSquares
   * @param {Object} position Attacker's position in the board
   * @param {number} position.x Attacker's X position
   * @param {number} position.y Attacker's Y position
   * @returns {Array} List of attacked Squares
   */
  Board.prototype.getTargetSquares = function ({ y: attackerY, x: attackerX }) {
    const squares = [];

    let y, x;

    // horizontal
    for (x = 0; x < this.boardSize; x++) {
      if (x !== attackerX) {
        squares.push({ y: attackerY, x });
      }
    }

    // vertical
    for (y = 0; y < this.boardSize; y++) {
      if (y !== attackerY) {
        squares.push({ y, x: attackerX });
      }
    }

    // diagonal top left
    y = attackerY;
    x = attackerX;
    while (this.isInLimit(--y, --x)) {
      squares.push({ y, x });
    }

    // diagonal top right
    y = attackerY;
    x = attackerX;
    while (this.isInLimit(--y, ++x)) {
      squares.push({ y, x });
    }

    // diagonal bottom left
    y = attackerY;
    x = attackerX;
    while (this.isInLimit(++y, --x)) {
      squares.push({ y, x });
    }

    // diagonal bottom right
    y = attackerY;
    x = attackerX;
    while (this.isInLimit(++y, ++x)) {
      squares.push({ y, x });
    }

    return squares;
  };

  /**
   * Places a Queen piece in the board
   * and updates the Squares that are attacked by it.
   * @function Board#placeQueen
   * @param {Object} position Queen's position in the board
   * @param {number} position.x Queen's X position
   * @param {number} position.y Queen's Y position
   */
  Board.prototype.placeQueen = function ({ x, y }) {
    const attacks = this.getTargetSquares({ x, y });
    const queenPositionKey = `${y}${x}`;

    this._board[y][x].holdingPiece = {
      display: QUEEN,
      attacks,
    };

    attacks.forEach(({ y, x }) => {
      this._board[y][x].attackedBy[queenPositionKey] = true;
    });

    this.queens++;
  };

  /**
   * Removes a Queen piece from the board
   * and cleans the attack from the Squares that are attacked by it.
   * @function Board#removeQueen
   * @param {Object} position Queen's position in the board
   * @param {number} position.x Queen's X position
   * @param {number} position.y Queen's Y position
   */
  Board.prototype.removeQueen = function ({ x, y }) {
    if (!this._board[y][x].holdingPiece) {
      return;
    }

    const queenPositionKey = `${y}${x}`;
    const attacks = this._board[y][x].holdingPiece.attacks;

    attacks.forEach(({ y, x }) => {
      delete this._board[y][x].attackedBy[queenPositionKey];
    });

    this._board[y][x].holdingPiece = null;

    this.queens--;
  };

  /**
   * Returns a list of the unnattacked Squares in the board.
   * @function Board#getUnattackedPositions
   * @returns {Array} List of unnatacked Squares
   */
  Board.prototype.getUnattackedPositions = function () {
    const unattacked = [];

    this._board.forEach((row, y) => {
      row.forEach((square, x) => {
        if (square.isEmpty()) {
          unattacked.push({ y, x });
        }
      });
    });

    return unattacked;
  };

  /**
   * Tells if the board has `n` queens.
   * @function Board#hasNQueens
   * @param {number} nQueens Number of total queens
   */
  Board.prototype.hasNQueens = function (nQueens) {
    return this.queens === nQueens;
  };

  /**
   * Solves the nQueens Puzzle.
   * @function Board#solve
   * @param {number} nQueens Number of total queens.
   */
  Board.prototype.solve = function (nQueens) {
    if (this.hasNQueens(nQueens)) {
      return this.serialize();
    }

    const unattacked = this.getUnattackedPositions();

    for (let i = 0, len = unattacked.length; i < len; i++) {
      const position = unattacked[i];

      this.placeQueen(position);

      const solution = this.solve(nQueens);

      if (solution) {
        return solution;
      }

      this.removeQueen(position);
    }

    return false;
  };

  return Board;
})();

module.exports = Board;