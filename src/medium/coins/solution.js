function coins(value) {
    const coinList = [100, 25, 10, 5, 1]
    let resultStr = ''
    for (let i = 0; i < 5; i++) {
        const result = Math.floor(value / coinList[i])
        if (result > 0) {
            resultStr += result.toString() + ' * ' + coinList[i].toString() + ', '
            value -= result * coinList[i]
        }
    }
    return resultStr.slice(0,resultStr.length-2)
}

const givenVal = 226
console.log('(', givenVal, ') ->', coins(givenVal))