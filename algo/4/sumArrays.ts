/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément 
du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  const result = [];
  let lengthA = 0;
  let lengthB = 0;
  const tableA = [];
  const tableB = [];
  let sumArray = 0;

  for (const string in arrayA) {
    const splittedArrayA = arrayA[string].split("");
    tableA.push(splittedArrayA);
  }

  lengthA = tableA.length;

  for (const string in arrayB) {
    const splittedArrayB = arrayB[string].split("");
    tableB.push(splittedArrayB);
  }
  lengthB = tableB.length;

  if (lengthA >= lengthB) {
    for (let i = 0; i < lengthA; i++) {
      if (tableB[i]) {
        sumArray = Number(tableA[i]) + Number(tableB[i]);
        result.push(sumArray.toString());
      } else {
        result.push(Number(tableA[i]).toString());
      }
    }
  } else {
    for (let i = 0; i < lengthB; i++) {
      if (tableA[i]) {
        sumArray = Number(tableA[i]) + Number(tableB[i]);
        result.push(sumArray.toString());
      } else {
        result.push(Number(tableB[i]).toString());
      }
    }
  }
  return result;
}

export default sumArr;
