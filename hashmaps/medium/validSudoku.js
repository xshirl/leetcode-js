/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let set = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let curr = board[i][j]
      if (curr != ".") {
        if (
          set.has(curr + "row" + i) ||
          set.has(curr + "col" + j) ||
          set.has(curr + " in block " + parseInt(i / 3) + "-" + parseInt(j / 3))
        ) {
          return false
        } else {
          set.add(curr + "row" + i)
          set.add(curr + "col" + j)
          set.add(curr + " in block " + parseInt(i / 3) + "-" + parseInt(j / 3))
        }
      }
    }
  }
  return true
}

//https://leetcode.com/problems/valid-sudoku/