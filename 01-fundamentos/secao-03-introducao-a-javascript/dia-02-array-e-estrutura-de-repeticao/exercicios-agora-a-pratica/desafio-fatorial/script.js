// crie um algoritmo que imprima na tela o fatorial de 10.
const num = 10;

let fatResult = 1;
for (let fat = 2; fat <= num; fat += 1) {
  fatResult *= fat;
} 

console.log(fatResult);