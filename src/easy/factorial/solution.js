function factorial(number) {
    if (number === 1) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

const givenNum = 5
console.log('The factorial of', givenNum, 'is', factorial(givenNum))