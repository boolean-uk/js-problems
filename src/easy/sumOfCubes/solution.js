function sumOfCubes(numbers) {
    let sum = 0
    
    for (let i = 0; i < numbers.length; i++) {
      const cube = Math.pow(numbers[i], 3)
      sum += cube
    }
    return sum
  }
  const list1 = [1, 5, 9]
  const list2 = [3, 4, 5]
  const list3 = [2]
  const list4 = []
  console.log(sumOfCubes(list1)) // Output: 855
  console.log(sumOfCubes(list2)) // Output: 216
  console.log(sumOfCubes(list3)) // Output: 8
  console.log(sumOfCubes(list4))// Output: 0
  