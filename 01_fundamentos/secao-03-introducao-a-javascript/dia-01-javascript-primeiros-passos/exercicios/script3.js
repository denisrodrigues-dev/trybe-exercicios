/* 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

let num1 = 15;
let num2 = 20;
let num3 = 19;

let maior = 0;

if(num1 > num2) {
    maior = num1;
} else {
    maior = num2;
} 

if (maior > num3) {
    console.log(maior);
} else {
    console.log(num3);
}