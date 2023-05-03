/* 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false. */

let num1 = 2;
let num2 = 3;
let num3 = 6;
let result = false;

if (num1 % 2 ==! 0 || num2 % 2 ==! 0 || num3 % 2 ==! 0) {
    result = true;
}

console.log(result);