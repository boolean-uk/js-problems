const romanNumeral = 'DCCCXXVIII'

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
    romanAsArray = roman.split('') // Splitting the input into a list
    previousLetter = '' // Empty variable so we can see if we need to deduct in the future
    arabicValue = 0 // Empty variable for the value total at the end
    for (let i = 0; i < romanAsArray.length; i++) {
        let currentLetter = romanAsArray[i] // new var in current iteration for easier readability
        if (currentLetter === "V" && previousLetter === "I") { // huge if statemet for deducting value (there has to be a neater way)
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
        arabicValue += valueMap[currentLetter] || 0 // iterating through the map and adding the value
        previousLetter = currentLetter // setting up the previous letter so we can check if we need to deduct stuff next iteration
    }
    return arabicValue
}