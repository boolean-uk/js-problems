# Plain English Solution

Convert the string to a list. Get the first character of the sentence with the index [0]. Add the first character into a new variable, convert it into uppercase (if it's already uppercase, still convert it), and then popping it back with concatenation or unshift. Then check if the last character is punctuation, and if it is, leave the string alone, but if not, add a dot.

If shifting a string doesn't work, I'll convert it to a list with .split and then reassemble it afterwards with a for loop.