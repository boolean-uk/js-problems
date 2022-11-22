function summing(start, end) {
    let sum = 0
    for (let i = start; i <= end; i++){
        sum += i
    }
    return sum
}

console.log(summing(1,100))