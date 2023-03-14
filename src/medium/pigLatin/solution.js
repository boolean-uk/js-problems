// # Pig Latin

// Translate some text to Pig Latin and vice versa.

// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. Therefore, "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".

// var arr = [1, 2, 6, 3, 4, 5];
//     arr.push(arr.splice(2,4), 1)[0]);
//     console.log(arr); // [1, 2, 3, 4, 5, 6]

// "hello world"
// "ellohay orldway"

//Step 1 "hello world"
//split > [ "hello", "world"
// Step 2 Hello:       H shifted then pushed to the end
//step 3 push AY to the end of the ELLOH

var a = ["h","ello"]

    a.push(a.shift());
    a.push('ay');
    console.log(a); // [1,2,3,4,5]

    

        