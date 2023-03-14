function distacneCal(minutes,mph){
    let distance = (minutes * mph)/60
    let finaleNumber = Math.round(distance)
    return finaleNumber
}

console.log(distacneCal(30,10));