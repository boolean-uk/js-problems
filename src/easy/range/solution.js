function maxMinDiff(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    return max - min
}

let testArray = [23, 3, 5, 66]

console.log(maxMinDiff(testArray))