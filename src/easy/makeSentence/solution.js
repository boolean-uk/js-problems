function capitalizeAndAddPeriod(sentence) {
    // Remove trailing whitespace
    sentence = sentence.trim();
  
    const lastChar = sentence.charAt(sentence.length - 1);
    const punctuationRegex = /[.!?]/;
    

    if (!punctuationRegex.test(lastChar)) {
      sentence += '.';
    }
  
    // Capitalize the first letter
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  
    return sentence;
  }
  
 
  //const inputSentence = "Given a sentence, capitalise the first letter and add a full stop to the end. However, if the sentence already ends with some form of puncutation, leave it as is.";
  const inputSentence = "Loza is pretty"
  const outputSentence = capitalizeAndAddPeriod(inputSentence);
  console.log(outputSentence); 
  