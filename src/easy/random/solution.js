function getRandomNumber(min, max) {
    const randomFraction = Math.random()
    const randomInRange = min + randomFraction * (max - min)
    return Math.round(randomInRange)
  }
  const min = 10
  const max = 20
  const randomValue = getRandomNumber(min, max)
  console.log(randomValue) 
  