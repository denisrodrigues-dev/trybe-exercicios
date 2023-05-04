/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeImpar = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        quantidadeImpar += 1;
    }    
}

if(quantidadeImpar !== 0) {
    console.log(quantidadeImpar);
} else {
    console.log('Nenhum valor ímpar encontrado');
}