// Escreva uma função chamada multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number1, number2 = 1) => number1 * number2;

console.log(multiply(9));