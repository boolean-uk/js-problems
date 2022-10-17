# Pseudo Code Solution

Start a min and max variable that our generator will generate between

Use date.now() to generate a random number

Loop through date.now() from the back (important since the back will be different all the time, the front will be the same) and if a number is found that is between min and max, then return that and break from the loop.

This won't be able to generate negative numbers and numbers that are smaller than one.