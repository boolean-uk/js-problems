function repeat(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str.charAt(i) + str.charAt(i)
    }
    return result
}

const givenStr = '1234!_ ?'
console.log(givenStr, '->', repeat(givenStr))