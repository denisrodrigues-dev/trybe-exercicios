// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.
const num1 = 21;
const num2 = 25;
const num3 = 61;

let haveNumberEven = false;  

if (!(num1 % 2) || !(num2 % 2) || !(num3 % 2)) {
  haveNumberEven = true;
}

console.log(haveNumberEven);

