/* Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2 */

let inicial = 1;
let final = 25;
let arrayNumbers = [];

for(let index = inicial; index <= final; index += 1) {
    arrayNumbers.push(index);
}

for(let index = 0; index < arrayNumbers.length; index += 1) {
    console.log(arrayNumbers[index] / 2)
}