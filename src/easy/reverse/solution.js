function reverse(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
        // console.log(newStr)
        // console.log(str[i])
    }
    return newStr
}

let test1 = "hello"

console.log(reverse('hello'))