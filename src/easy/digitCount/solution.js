function digitCounter(num) {
    let count = 0
    while(num >= 1){
        num /= 10
        count++
    }
    return count
}

const givenNum = 314890
console.log('The number', givenNum, "has", digitCounter(givenNum), 'digits.')