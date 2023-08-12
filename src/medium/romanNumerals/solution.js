function getRomanValue(romanChar) {
    const valueList = [
        {symbol: 'I', value: 1},
        {symbol: 'V', value: 5},
        {symbol: 'X', value: 10},
        {symbol: 'L', value: 50},
        {symbol: 'C', value: 100},
        {symbol: 'D', value: 500},
        {symbol: 'M', value: 1000}
    ]
    for (let i = 0; i < valueList.length; i++) {
        if (romanChar === valueList[i].symbol) {
            return valueList[i].value
        }
    }
}

function romanNumerals(str) {
    const strList = str.split('')
    let result = 0
    let tmp1 = 0
    for (let i = strList.length - 1; i >= 0; i--) {
        const tmp2 = getRomanValue(strList[i])
        if (i === strList.length - 1){
            tmp1 = tmp2
            result += tmp1
        } else {
            if (tmp2 >= tmp1) {
                result += tmp2
            } else {
                result -= tmp2
            }
            tmp1 = tmp2
        }
    }
    return result
}

const givenRoman = 'XL'
console.log(givenRoman, 'has numeral value of', romanNumerals(givenRoman))
