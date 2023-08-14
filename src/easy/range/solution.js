function range(numList) {
    let min = numList[0]
    let max = numList[0]
    numList.forEach(
        (listItem) => {
            if (listItem > max) {
                max = listItem
            }
            if (listItem < min) {
                min = listItem
            }
        }
    )
    return max - min
}

const givenList = [10, 5, 7, 20, 3, 69, 22, -5, 75]
console.log('The range of given list is', range(givenList))