// Start a min and max variable that our generator will generate between

function randomGenerator(min, max) {

    // Use date.now() to generate a random number

    const randomList = String(Date.now()).split('')

    // Loop through date.now() from the back (important since the back will be different all the time, the front will be the same) and if a number is found that is between min and max, then return that and break from the loop.


    for (let i = randomList.length; i >= 0; i--) {
        if (randomList[i] > min && randomList[i] < max) {
            return randomList[i]
        }
    }
}

console.log(randomGenerator(0, 9))

// This won't be able to generate negative numbers and numbers that are smaller than one.

