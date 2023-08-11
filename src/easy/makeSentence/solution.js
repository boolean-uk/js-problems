function isLetter(char){
    //If more things are considered as punctuation, they should be added.
    const nonLetters = ['.', ',', '?', '!', ';']
    for (let i = 0; i < nonLetters.length; i++) {
        if (char === nonLetters[i]) {
            return false
        }
    }
    return true
}

function makeSentence(str) {
    //Considering given sentence always starts with a letter.
    str = str[0].toUpperCase() + str.slice(1)
    if (isLetter(str[str.length-1])) {
        str += '.'
    }
    return str
}

givenStr = 'hello mate'
console.log('Turned', givenStr,'to',makeSentence(givenStr))