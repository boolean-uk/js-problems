function createCastles() {
    const maxCastles = 5
    const maxRooms = 7

    const castles = []

    for (let i = 0; i <=maxCastles; i++) {
        const castle = []      
        castles.push(castle)
        for (let j = 0; j <= maxRooms; j++) {
            const room = {
                treasure: Math.floor(Math.random() * 100) + 1, // generate a value between 1 and 100
                creature: Math.random() // generate a number between 0 and 1
            }  
            castles[i].push(room)   
        }
    }
    return castles
}


function bluffCreature() {
    const successChance = 0.3
    const randomValue = Math.random() 
    return successChance >= randomValue
}

function attackCreature(room) {
    const successChance = room.creature
    const randomValue = Math.random() 
    return successChance >= randomValue
}

function calculateTotalTreasure(castles) {
    let totalValue = 0
    castles.forEach(castle => {
        castle.forEach(room => {
            totalValue += room.treasure
        })
    });
    return totalValue
}

function playGame(player,castles) {
    const totalTreasuresValue = calculateTotalTreasure(castles)
    for (let index = 0; index < castles.length; index++) {
        const castle = castles[index];
        for (let j = 0; j < castle.length; j++) {
            const room = castle[j];
            if (bluffCreature()) {
                player.treasureCollected+= room.treasure
            } else {
                if (attackCreature(room)) {
                    player.treasureCollected+= room.treasure
                } else {
                    player.lives--
                }
            }
            if (player.lives === 0) {
                break
            }
        }        
    }
    if (player.treasureCollected === totalTreasuresValue) {
        console.log(`Congratulations! The player collected all the available treasure!\nTreasure collected: ${totalTreasuresValue}`)
    } else {
        console.log(`Game over.\nThe player collected ${player.treasureCollected} treasures.\nTreasures remaining: ${totalTreasuresValue-player.treasureCollected}`)
    }
}

const player = {lives: 9, treasureCollected: 0}
const castles = createCastles()

playGame(player,castles)