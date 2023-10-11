function doubleCharacters(inputString) {
    let doubledString = ""
    for (let i = 0; i < inputString.length; i++) {
      doubledString += inputString[i] + inputString[i]
    }
    return doubledString
  }
  const input1 = "String"
  const result1 = doubleCharacters(input1)
  console.log(result1)
  const input2 = "Hello World!"
  const result2 = doubleCharacters(input2)
  console.log(result2)
  const input3 = "1234!_ "
  const result3 = doubleCharacters(input3)
  console.log(result3)
  