// Console log shifting a string, hopefully it works
let sentence = "this sentence is to be capitalized and a dot should be added to the end"

let sentenceToList = sentence.split('')

// Put the character into the upperCaseStart variable – update: don't even need to do that, can just uppercase directly

let upperCaseStart = sentenceToList[0].toUpperCase()

// Make the upperCaseStart variable upper case – done above

// Pop back upperCaseStart to the string with unshift or concatenation

sentenceToList.shift()

sentenceToList.unshift(upperCaseStart)

// If the last character is not punctuation 
//  – then add a dot

if (sentenceToList[sentenceToList.length-1] !== '.' && sentenceToList[sentenceToList.length-1] !== '!' && sentenceToList[sentenceToList.length-1] !== '?' ) {
    sentenceToList.push('.')
}

let capStartFullStopSentence = ''

for (let i of sentenceToList) {
    capStartFullStopSentence += i
}

console.log(capStartFullStopSentence)