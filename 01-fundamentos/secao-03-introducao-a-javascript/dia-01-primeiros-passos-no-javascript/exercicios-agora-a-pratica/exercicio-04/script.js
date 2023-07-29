// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
const angleA = 62;
const angleB = -2;
const angleC = 15;

if (angleA < 0 || angleB < 0 || angleC < 0) {
  console.log('Os valores contêm ângulos inválidos!');
}
else if (angleA + angleB + angleC === 180) {
  console.log(true);
}
else {
  console.log(false);
}
