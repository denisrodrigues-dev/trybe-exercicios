/* Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado. */

let inicial = 1;
let final = 25;
let arrayNumbers = [];

for(let index = inicial; index <= final; index += 1) {
    arrayNumbers.push(index);
}

console.log(arrayNumbers);