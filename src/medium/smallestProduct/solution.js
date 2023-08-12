function smallestProduct() {
    let flag = true
    let result = 0
    while (flag) {
        result += 20
        for (let i = 19; i > 0; i--) {
            if (i === 1) {
                flag = false
                break
            }
            if (result % i !== 0) {
                break
            }
        }
    }
    return result
}

console.log('The smallest positive number divided by [1-20] is', smallestProduct())