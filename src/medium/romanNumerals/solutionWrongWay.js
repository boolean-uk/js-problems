number = 100

const oneDigitMap = {
    1: 'I',
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
}

const twoDigitMap = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC"
}

const threeDigitMap = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM"
}

function arabicToRomanNumberals (number) {
    numAsString = number.toString()
    if (numAsString.length === 1) {
        return oneDigitMap[numAsString] || ""
    } else if (numAsString.length === 2) {
        return twoDigitMap[numAsString[0]] || "" + oneDigitMap[numAsString[1]] || ""
    } else if (numAsString.length === 3) {
        return threeDigitMap[numAsString[0]] || "" + twoDigitMap[numAsString[1]] || "" + oneDigitMap[numAsString[2]] || ""
    }
}

console.log(arabicToRomanNumberals(number))
