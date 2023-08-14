function milesTravelled(minutes, speed) {
    const hours = minutes / 60
    const distance = hours * speed
    const tmp = distance % 1
    if (tmp < 0.5) {
        return Math.floor(distance)
    }
    else {
        return Math.ceil(distance)
    }
}

const givenDuration = 140
const givenSpeed = 85
console.log("Travelled distance equals to", milesTravelled(givenDuration,givenSpeed), 'miles.')