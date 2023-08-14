//Supposing num1 is the low threshold and num2 is the high threshold
function random(num1, num2) {
    let ms = new Date()
    ms = ms.getMilliseconds() % num1
    return ms + num2 - num1
}

const lowThreshold = 40
const highThreshold = 100
console.log('Random number between', lowThreshold, 'and', highThreshold, 'is', random(40, 100))