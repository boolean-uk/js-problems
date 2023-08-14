function multiples(number, len) {
    let tmp = 0
    const myArray = []
    for (let i = 1; i <= len; i++) {
        tmp += number
        myArray.push(tmp)
    }
    return myArray
}

const givenNum = 12
const givenLen = 10
console.log('(', givenNum, ',', givenLen, ') -> ', multiples(givenNum, givenLen))