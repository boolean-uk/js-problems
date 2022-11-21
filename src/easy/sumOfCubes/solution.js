function sumOfCubes(array){
    let sum = 0
    for (i = 0; i < array.length; i++){
        let cube = array[i] ** 3
        sum += cube
    }
    return sum
}

let testArray = [1, 5, 9]

console.log(sumOfCubes(testArray))