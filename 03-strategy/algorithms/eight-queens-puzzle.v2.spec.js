const assert = require('assert');

const queensPuzzle = require('./eight-queens-puzzle.v2');

describe('Algorithm - 8 Queens Puzzle [Backtracking] (Functional Version)', function () {
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

  testCases.forEach(({ boardSize, expected }) => {
    const board = queensPuzzle.createBoard(boardSize);

    it(`should solve queens puzzle for a board of size: ${boardSize}`, function () {
      const solution = queensPuzzle(board, boardSize);

      assert.equal(queensPuzzle.serializeBoard(solution), expected);
    });
  });
});
