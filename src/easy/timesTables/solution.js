function generateMultiplicationTables() {
    const table = []
  
    for (let i = 1; i <= 12; i++) {
      const row = []
  
      for (let j = 1; j <= 12; j++) {
        row.push(i * j)
      }
      table.push(row)
    }
    return table
  }
  function displayMultiplicationTable(table) {
    for (let i = 1; i <= 12; i++) {
      const row = table[i - 1].join(' | ')
      console.log(`\n${i} times table`)
      console.log(`| ${row} |`)
    }
  }
  const multiplicationTable = generateMultiplicationTables()
  displayMultiplicationTable(multiplicationTable)
  