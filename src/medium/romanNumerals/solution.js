const romanNumeral = 'DCCCXXVIII '

const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

console.log(romanToArabicNumerals(romanNumeral))

function romanToArabicNumerals (roman) {
    romanAsArray = roman.split('')
    previousLetter = ''
    arabicValue = 0
    for (let i = 0; i < romanAsArray.length; i++) {
        currentLetter = romanAsArray[i]
        if (currentLetter === "V" && previousLetter === "I") {
            arabicValue -= 2
        } else if (currentLetter === "X" && previousLetter === "I") {
            arabicValue -= 2
        } else if (currentLetter === "L" && previousLetter === "X") {
            arabicValue -= 20
        } else if (currentLetter === "C" && previousLetter === "X") {
            arabicValue -= 20
        } else if (currentLetter === "D" && previousLetter === "C") {
            arabicValue -= 200
        } else if (currentLetter === "M" && previousLetter === "C") {
            arabicValue -= 200
        }
        arabicValue += valueMap[currentLetter] || 0
        previousLetter = currentLetter
    }
    return arabicValue
}