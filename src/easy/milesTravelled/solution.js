function distance(speed, minutes) {
  let perMinuteSpeed = speed / 60;
  let dist = perMinuteSpeed * minutes;
  return Math.round(dist);
}

console.log(distance);
