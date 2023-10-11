function listMultiples(number, length) {
    const multiples = []
    for (let i = 1; multiples.length < length; i++) {
      multiples.push(number * i)
    }
    return multiples
  }
  console.log(listMultiples(7, 5))  // ➞ [7, 14, 21, 28, 35]
  console.log(listMultiples(12, 10)) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
  console.log(listMultiples(17, 6)) // ➞ [17, 34, 51, 68, 85, 102]
  