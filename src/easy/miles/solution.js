function kilometersToMiles(kilometers) {
    const miles = kilometers / 1.6 // 1.6 kilometers in a mile
    return Math.round(miles)
  }
  const kilometers = 25
  const miles = kilometersToMiles(kilometers)
  console.log(`${kilometers} kilometers is approximately ${miles} miles.`)