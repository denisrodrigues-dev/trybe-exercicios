// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let countOdd = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) countOdd += 1;
}

if (countOdd) console.log(countOdd); 
else console.log('Nenhum valor ímpar encontrado');
