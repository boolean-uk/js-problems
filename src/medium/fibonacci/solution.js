function fibonacci(){
    resultList = [1, 1]
    for (let i = 2; i < 100; i++) {
        resultList.push(resultList[i-2] + resultList[i-1])
    }
    return resultList
}

console.log (fibonacci())