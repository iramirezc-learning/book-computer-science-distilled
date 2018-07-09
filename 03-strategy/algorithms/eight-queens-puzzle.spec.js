const assert = require('assert');

const Board = require('./eight-queens-puzzle.v1');
const queensPuzzle = require('./eight-queens-puzzle.v2');

describe('Algorithm - 8 Queens Puzzle [Backtracking]', function () {
  const testCases = [
    {
      boardSize: 1,
      expected: '[*]',
    },
    {
      boardSize: 2,
      expected: false,
    },
    {
      boardSize: 3,
      expected: false,
    },
    {
      boardSize: 4,
      expected: '[ ][*][ ][ ][ ][ ][ ][*][*][ ][ ][ ][ ][ ][*][ ]',
    },
    {
      boardSize: 8,
      expected: '[*][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][*][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][*][ ][ ][ ][ ][ ][*][ ][ ][ ][ ][*][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][*][ ][ ][*][ ][ ][ ][ ][ ][ ][ ][ ][ ][*][ ][ ][ ][ ]'
    }
  ];

  describe('Object Oriented Version', function () {
    testCases.forEach(({ boardSize, expected }) => {
      const board = new Board(boardSize);

      it(`should solve queens puzzle for a board of size: ${boardSize}`, function () {
        const solution = board.solve(boardSize);

        if (typeof expected === 'string') {
          expected = expected.replace(/\s/g, '·');
        }

        assert.equal(solution, expected);
      });
    });
  });

  describe('Functional Version', function() {
    testCases.forEach(({ boardSize, expected }) => {
      const board = queensPuzzle.createBoard(boardSize);

      it(`should solve queens puzzle for a board of size: ${boardSize}`, function () {
        const solution = queensPuzzle(board, boardSize);

        assert.equal(queensPuzzle.serializeBoard(solution), expected);
      });
    });
  });
});