function sum() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum
}

console.log("Sum of numbers from 1 to 100 is", sum())