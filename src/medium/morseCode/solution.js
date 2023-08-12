function toMorse(char, flag) {
    if (flag !== true && flag !== false) {
        return ''
    }
    if (char === ' ') {
        return '/ '
    }
    if (char === '/') {
        return ' '
    }
    const conversion = [
        { char: 'A', code: '.-' },
        { char: 'B', code: '-...' },
        { char: 'C', code: '-.-.' },
        { char: 'D', code: '-..' },
        { char: 'E', code: '.' },
        { char: 'F', code: '..-.' },
        { char: 'G', code: '--.' },
        { char: 'H', code: '....' },
        { char: 'I', code: '..' },
        { char: 'J', code: '.---' },
        { char: 'K', code: '-.-' },
        { char: 'L', code: '.-..' },
        { char: 'M', code: '--' },
        { char: 'N', code: '-.' },
        { char: 'O', code: '---' },
        { char: 'P', code: '.--.' },
        { char: 'Q', code: '--.-' },
        { char: 'R', code: '.-.' },
        { char: 'S', code: '...' },
        { char: 'T', code: '-' },
        { char: 'U', code: '..-' },
        { char: 'V', code: '...-' },
        { char: 'W', code: '.--' },
        { char: 'X', code: '-..-' },
        { char: 'Y', code: '-.--' },
        { char: 'Z', code: '--..' }
    ]
    if (flag) {
        char = char.toUpperCase()
        const punctuation = ' .!?,;'
        if (punctuation.includes(char)) {
            return ' '
        }
        for (let i = 0; i < conversion.length; i++) {
            if (char === conversion[i].char) {
                return conversion[i].code + ' '
            }
        }
    } else {
        for (let i = 0; i < conversion.length; i++) {
            if (char === conversion[i].code) {
                return conversion[i].char
            }
        }
    }
    return ''
}

function isNotMorse(str) {
    const morseSymb = '.-'
    if (morseSymb.includes(str.charAt(0)) == true && (morseSymb.includes(str.charAt(1)) == true || morseSymb.includes(str.charAt(2)) == true)) {
        return false
    } else {
        return true
    }
}

function morseCode(str) {
    let strArray = []
    let result = ''
    let flag = true
    if (isNotMorse(str)) {
        strArray = str.split('')
        strArray.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                result += toMorse(element.charAt(i), flag)
            }
        })
    } else {
        flag = false
        strArray = str.split(' ')
        strArray.forEach(element => {
            result += toMorse(element, flag)
        })
    }
    return result
}

const givenEnglish = 'Morse Code'

console.log('English Sentence:', morseCode(morseCode(givenEnglish)))
console.log('Morse Code:', morseCode(givenEnglish))
