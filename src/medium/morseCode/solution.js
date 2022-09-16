function morseConverter(englishSentence) {
    let morseSentence ='' // Define a new empty string
    for (i of englishSentence.toLowerCase()) { // Loop through the elements of the input string
        morseSentence += morseCharacterConverter(i) //  – use the function to add the correct morse code to a new string
    }
    return morseSentence
}

// Create a function that converts letters to morse code with a millio else if statements

function morseCharacterConverter(englishLetter){
    let morseLetter = ''
    if (englishLetter === 'a') {
        morseLetter = ' .– '
    } else if (englishLetter === 'b') {
        morseLetter = ' -... '
    } else if (englishLetter === 'c') {
        morseLetter = ' -.-. '
    } else if (englishLetter === 'd') {
        morseLetter = ' -.. '
    } else if (englishLetter === 'e') {
        morseLetter = ' . '
    } else if (englishLetter === 'f') {
        morseLetter = ' ..-. '
    } else if (englishLetter === 'g') {
        morseLetter = ' --. '
    } else if (englishLetter === 'h') {
        morseLetter = ' .... '
    } else if (englishLetter === 'i') {
        morseLetter = ' .. '
    } else if (englishLetter === 'j') {
        morseLetter = ' .--- '
    } else if (englishLetter === 'k') {
        morseLetter = ' -.- '
    } else if (englishLetter === 'l') {
        morseLetter = ' .-.. '
    } else if (englishLetter === 'm') {
        morseLetter = ' -- '
    } else if (englishLetter === 'n') {
        morseLetter = ' -. '
    } else if (englishLetter === 'o') {
        morseLetter = ' --- '
    } else if (englishLetter === 'p') {
        morseLetter = ' .--. '
    } else if (englishLetter === 'q') {
        morseLetter = ' --.- '
    } else if (englishLetter === 'r') {
        morseLetter = ' .-. '
    } else if (englishLetter === 's') {
        morseLetter = ' ... '
    } else if (englishLetter === 't') {
        morseLetter = ' - '
    } else if (englishLetter === 'u') {
        morseLetter = ' ..- '
    } else if (englishLetter === 'v') {
        morseLetter = ' ...- '
    } else if (englishLetter === 'w') {
        morseLetter = ' .-- '
    } else if (englishLetter === 'x') {
        morseLetter = ' -..- '
    } else if (englishLetter === 'y') {
        morseLetter = ' -.-- '
    } else if (englishLetter === 'z') {
        morseLetter = ' --.. '
    } else if (englishLetter === ' ') {
        morseLetter = '   '
    } else if  (englishLetter === '.') {
        morseLetter = ''
    } else if (englishLetter === '?') {
        morseLetter = ''
    } else if (englishLetter === '!') {
        morseLetter = ''
    }
    return morseLetter
}

console.log(morseConverter("Hello, let's see if this works"))