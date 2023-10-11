function findDifference(numbers) {
    if (numbers.length === 0) {
      return 0
    }
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    return max - min
  }
  const numbers = [12, 5, 8, 24, 15, 3]
  const difference = findDifference(numbers)
  console.log(difference) // 21
  