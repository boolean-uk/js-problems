function sentenceConversion(sentence){
    const firstLetter = sentence[0].toUpperCase()
    let rSentence = sentence.slice(1)
    // console.log(rSentence[rSentence.length -1])
    if (rSentence[rSentence.length -1] === '!' || '?' || '.'){

    }
    else {
        rSentence += "."
    }
    const newSentence = firstLetter + rSentence
    return newSentence
}

console.log(sentenceConversion("twert!!"))