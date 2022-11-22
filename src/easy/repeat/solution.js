function repeatString(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
    newString += string[i];
  }
  return newString;
}

console.log(repeatString("dinner"));
