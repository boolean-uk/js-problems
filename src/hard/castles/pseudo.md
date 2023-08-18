# Pseudo Code Solution
 function createCastle {
    const castles []
    for every iteration [0-5)
        create a new castle
            for every iteration [0-7) 
               create newRoom = {randomTreasureAmount, randomCreatureChanceOfSuccess}
    
    return castles
 }

 playerLives =9;
 playerTreasureAmount = 0;

 function playGame(castles) {
    for every iteration [0-5) // castles
            for every iteration [0-7) // rooms
               bluffCreature() ?  playerTreasureAmount += room.treasureAmount : attackCreature()             
                    if attackCreature is false -> lives-- 
                        if lives ==0 -> break
                    else 
                        playerTreasureAmount += room.treasureAmount
    return playerTreasureAmount
 }

 function bluff -> return Math.random < 0.3 
 function attack -> return Math.random < room.creatureChanceOfSuccess 