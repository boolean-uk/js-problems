# Plain English Solution

Using this more as the ReadMe file rather than the solution.

toMorse() ->    Takes 2 arguements and returns either Morse Code or English Letters.
                Second arguement is a flag. If flag is true then convert to Morse Code. If flag is false then convert to English.
                First arguement is the letter to be converted and is either in English or Morse Code.

isNotMorse() -> Checks if the arguement is an English sentence or sentence in Morse Code.
                Return true if English or false if Morse.

morseCode() ->  Takes 1 arguement and uses the two functions above to make the Morse Code Converter working either way.
                English Sentence -> Morse Code
                Morse Code -> English Sentence

Note: The converter only works for English Alphabet letters and white spaces. There is no conversion for punctuation.
