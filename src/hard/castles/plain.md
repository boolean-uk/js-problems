# Plain English Solution

First, I will make a function to create a group of castles and rooms with random values for their tresures and random chance of success when attacking the creature.

Then I will create the main function which will be the actual game, where I will loop through the different rooms in the different castles. Since there is no penalty for bluffing the creature, I will always try to bluff it first, and if that doesn't succeed, I will try attacking it. If the attack fails, a life is taken away, so after every attack we will have to check if the lives have reached 0, and if so, we break the loop.

I will need two separate functionalities for bluffing and attacking, which will probably be extracted in separate functions.

I will also need some way of keeping track of the remaining lives of the player, as well as maybe the treasure they collected so far.
