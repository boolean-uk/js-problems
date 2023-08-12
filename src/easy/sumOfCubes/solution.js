function sumOfCubes(list){
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += Math.pow(list[i],3)
    }
    return sum
}

const givenList = [1, 5, 9]
console.log(givenList, '->', sumOfCubes(givenList))