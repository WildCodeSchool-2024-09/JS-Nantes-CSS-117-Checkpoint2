/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  const givenArray = Array.from(givenString);
  console.log(givenArray)
  const lettersToFind = givenArray.filter((char) => {
    return char === letter;
  })
  console.log(lettersToFind);
  console.log(lettersToFind.length)
  return lettersToFind.length;
}

export default countLetters;
