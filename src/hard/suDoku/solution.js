const fs = require('fs')

function printGrid(grid) {
  for (let row of grid) {
    console.log(row.join(' '))
  }
}

function isSafe(grid, row, col, num) {
  return (
    !usedInRow(grid, row, num) &&
    !usedInColumn(grid, col, num) &&
    !usedInBox(grid, row - (row % 3), col - (col % 3), num)
  )
}

function usedInRow(grid, row, num) {
  return grid[row].includes(num)
}

function usedInColumn(grid, col, num) {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === num) {
      return true
    }
  }
  return false
}

function usedInBox(grid, boxStartRow, boxStartCol, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + boxStartRow][j + boxStartCol] === num) {
        return true
      }
    }
  }
  return false
}

function findEmptyLocation(grid, location) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        location[0] = row
        location[1] = col
        return true
      }
    }
  }
  return false
}

function solveSudoku(grid) {
  const location = [0, 0]
  if (!findEmptyLocation(grid, location)) {
    return true // No empty location, puzzle solved
  }
  const [row, col] = location

  for (let num = 1; num <= 9; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num

      if (solveSudoku(grid)) {
        return true
      }

      grid[row][col] = 0
    }
  }

  return false
}

function solveSudokuPuzzle(puzzle) {
  const grid = puzzle.map((row) => row.split('').map(Number))
  if (solveSudoku(grid)) {
    return grid.map((row) => row.join(''))
  }
  return null
}

const puzzles = fs
  .readFileSync('/js-problems/src/hard/suDoku/data/sudoku.txt', 'utf-8')
  .split('\n')
  .filter((line) => line.trim().length === 9)

for (let i = 0; i < puzzles.length; i += 9) {
  const puzzle = puzzles.slice(i, i + 9)
  const solution = solveSudokuPuzzle(puzzle)
  if (solution) {
    console.log(`Sudoku Puzzle #${i / 9 + 1} Solution:`)
    printGrid(solution)
  } else {
    console.log(`Sudoku Puzzle #${i / 9 + 1} has no solution.`)
  }
}
