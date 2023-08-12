function timesTables(){
    const resultTable = []
    for (let i = 1; i <= 12; i++) {
        const entryTable = []
        for (let j = 1; j <= 12; j++) {
            entryTable.push(i*j)
        }
        resultTable.push(entryTable)
    }
    return resultTable
}

console.log(timesTables())