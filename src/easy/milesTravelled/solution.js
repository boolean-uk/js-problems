function calculateDistance(minutes, speed) {
    const hours = minutes / 60
    const distance = speed * hours
    const roundedDistance = Math.round(distance)
    return roundedDistance
  }
  const travelDurationInMinutes = 100
  const speedInMph = 50 
  const distance = calculateDistance(travelDurationInMinutes, speedInMph)
  console.log(`Distance traveled: ${distance} miles.`)
  