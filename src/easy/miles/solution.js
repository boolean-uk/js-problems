function toMiles(kilometers) {
    const miles = kilometers / 1.6
    remainder = miles % 1
    if (remainder < 0.5) {
        return Math.floor(miles)
    } else {
        return Math.ceil(miles)
    }
        
}

const givenNum = 101
console.log(givenNum, 'kilometers equal to', toMiles(givenNum), 'miles.')