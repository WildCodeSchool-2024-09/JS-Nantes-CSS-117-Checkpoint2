function countLetters(givenString: string, letter: string): number {
  let letterCount = 0;

  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === letter) {
      letterCount++;
    }
  }

  return letterCount;
}

export default countLetters;
