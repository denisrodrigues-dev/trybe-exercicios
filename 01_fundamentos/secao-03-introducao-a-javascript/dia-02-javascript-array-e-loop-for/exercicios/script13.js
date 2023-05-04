/* Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */
let number = 50
let maiorPrimo = 0;
let countDivisores = 0;


for (let inicial = 2; inicial <= number; inicial += 1) {
    countDivisores = 0;
    for(let divisor = 1; divisor <= inicial; divisor += 1) {
        if(inicial % divisor === 0) {
            countDivisores += 1;
        }
    }
    if (countDivisores === 2) {
        maiorPrimo = inicial;
    }
}

console.log(maiorPrimo);
