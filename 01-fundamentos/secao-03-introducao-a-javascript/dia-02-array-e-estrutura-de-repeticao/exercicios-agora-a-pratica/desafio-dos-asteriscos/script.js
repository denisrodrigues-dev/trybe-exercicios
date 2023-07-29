// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.
const n = 5;
let asterisk = '';

for (let index = 0; index < n; index += 1) {
  asterisk += '*';
}

for (let index = 0; index < n; index += 1) {
  console.log(asterisk);
}


