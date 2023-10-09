function factorial(n) {
    if (n === 0 || n === 1) {
      return 1
    } else {
      return n * factorial(n - 1)
    }
  }
  
 //`5! = 5 x 4 x 3 x 2 x 1 = 120`
  const number = 5;
  const result = factorial(number)
  console.log(`${number}! = ${result}`)
  