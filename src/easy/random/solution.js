function getRandomArbitrary(num1, num2) {
  return Math.random() * (num2 - num1) + num1;
}

console.log(getRandomArbitrary(3, 12));
