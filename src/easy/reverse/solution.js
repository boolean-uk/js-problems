

function reverse(stringToReverse) {

    // Define empty newString
    let reversedString = ''

    // Loop through the elements of a string backwards
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        // Add the characters to the empty newString
        reversedString += stringToReverse[i]
    }

    // Return newString
    return reversedString
}

console.log(reverse('123'))