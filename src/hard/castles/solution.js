const totalCastles = 5
const roomsPerCastle = 7
const totalRooms = totalCastles * roomsPerCastle
const maxLives = 9
const treasures = []
const creatures = []
const treasurePoints = [10, 20, 30, 40, 50]
const bluffSuccessRate = 0.3

for (let i = 0; i < totalRooms; i++) {
  treasures.push(treasurePoints[Math.floor(Math.random() * treasurePoints.length)])
  creatures.push(Math.random())
}

let playerLives = maxLives
let playerScore = 0
let currentRoom = 0

function bluff() {
  return Math.random() < bluffSuccessRate
}

function fight(creature) {
  const fightSuccessRate = 1 - creature
  return Math.random() < fightSuccessRate
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function playGame() {
  if (currentRoom < totalRooms && playerLives > 0) {
    console.log(`You are in room ${currentRoom + 1} of ${totalRooms}.`)
    console.log(`You have ${playerLives} lives and ${playerScore} points.`)

    rl.question("Do you want to (b)luff or (f)ight? ", (decision) => {
      if (decision.toLowerCase() === "b") {
        if (bluff()) {
          console.log("Bluff successful! You capture the treasure.")
          playerScore += treasures[currentRoom]
        } else {
          console.log("Bluff failed. The creature attacks!")
          playerLives--
        }
      } else if (decision.toLowerCase() === "f") {
        if (fight(creatures[currentRoom])) {
          console.log("You defeat the creature and capture the treasure.")
          playerScore += treasures[currentRoom]
        } else {
          console.log("You lost the fight. The creature overpowers you.")
          playerLives--
        }
      } else {
        console.log("Invalid input. Please enter 'b' for bluff or 'f' for fight.")
      }

      currentRoom++
      playGame()
    })
  } else {
    rl.close()
    if (playerLives === 0) {
      console.log("Game over! You have run out of lives.")
    } else {
      console.log(`Congratulations! You collected ${playerScore} points.`)
    }
  }
}

playGame()
