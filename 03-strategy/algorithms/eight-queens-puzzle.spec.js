const assert = require('assert');

const Board = require('./eight-queens-puzzle.v1');

describe('Algorithm - 8 Queens Puzzle [Backtracking]', function () {
  describe('Object Oriented Version', function () {
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
        expected: '[·][*][·][·][·][·][·][*][*][·][·][·][·][·][*][·]',
      },
      {
        boardSize: 8,
        expected: '[*][·][·][·][·][·][·][·][·][·][·][·][*][·][·][·][·][·][·][·][·][·][·][*][·][·][·][·][·][*][·][·][·][·][*][·][·][·][·][·][·][·][·][·][·][·][*][·][·][*][·][·][·][·][·][·][·][·][·][*][·][·][·][·]'
      }
    ];

    testCases.forEach(({ boardSize, expected }) => {
      const board = new Board(boardSize);

      it(`should solve queens puzzle for a board of size: ${boardSize}`, function () {
        const solution = board.solve(boardSize);

        assert.equal(solution, expected);
      });
    });
  });
});