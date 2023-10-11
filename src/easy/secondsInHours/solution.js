function hoursToSeconds(hours) {
    return hours * 3600// 1 hour = 3600 seconds
  }
  const hours = 15
  const seconds = hoursToSeconds(hours)
  console.log(seconds) // Output: 18000 seconds (15 hours * 3600 seconds/hour)
  