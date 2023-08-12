function mapInit() {
    const castles = 5
    const rooms = 7
    const baseChance = 85
    const baseReward = 10
    const castleLayout = []
    for (let i = 1; i <= castles; i++) {
        const roomLayout = []
        for (let j = 1; j <= rooms; j++) {
            const roomElements = {
                monster: baseChance - (15 * i) - j,
                treasure: baseReward * (Math.pow(i,2))
            }
            roomLayout.push(roomElements)
        }
        castleLayout.push(roomLayout)
    }
    return castleLayout
}

function rollDice() {
    const timeInit = new Date()
    return timeInit.getMilliseconds() % 101
}

function doBluff() {
    return rollDice() < 30
}

function doBattle(winThreshold) {
    return rollDice() < winThreshold
}

function castles() {
    let lives = 9
    let score = 0
    const castleMap = mapInit()
    for (let i = 0; i < castleMap.length; i++) {
        for (let j = 0; j < castleMap[i].length; j++) {
            if (doBluff() || doBattle(castleMap[i][j].monster)) {
                score += castleMap[i][j].treasure
            } else {
                lives--
            }
            if (lives === 0) {
                console.log(`Your adventure ends on floor ${i+1} room ${j+1}.`)
                break
            }
        }
        if (lives === 0) {
            console.log('Defeat!')
            break
        }
    }
    if (score === 3850) {
        console.log('You exit the castles with great treasures.')
        console.log('Victory!')
    }
    return score
}

//console.log(mapInit())
console.log('Your score for this run is', castles(),'.')
