function factorial(num){
    let factNum = num
    for (i = num - 1; i > 0; i--) {
        factNum *= i
    }
    return factNum
}

console.log(factorial(52))