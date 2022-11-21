function capLetter(sentence) {
  let a = sentence[0].toUpperCase() + sentence.slice(1);
  if (sentence[-1] === "." || sentence[-1] === "?" || sentence[-1] === "!") {
    return a;
  } else {
    return (a += ".");
  }
}

console.log(capLetter("yay"));
