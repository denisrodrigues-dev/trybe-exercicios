/* 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

let trianguloAngulo1 = 90;
let trianguloAngulo2 = 80;
let trianguloAngulo3 = 10;

let somaAngulos = trianguloAngulo1 + trianguloAngulo2 + trianguloAngulo3;

if (trianguloAngulo1 < 0 || trianguloAngulo2 < 0 || trianguloAngulo3 < 0) {
    console.log('Ângulo inválido!')
} else if (somaAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}