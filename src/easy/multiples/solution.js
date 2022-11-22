function multiples(num, length) {
    let multiArray = []
    for (i = 1; i <= length; i++) {
        multiArray.push(i * num)
    }
    return multiArray
}

console.log(multiples(7,5))