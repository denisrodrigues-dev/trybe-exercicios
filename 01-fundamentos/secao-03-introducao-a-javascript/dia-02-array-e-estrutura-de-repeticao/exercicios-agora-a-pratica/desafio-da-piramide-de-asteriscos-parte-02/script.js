// imprima um triângulo retângulo com 5 asteriscos de base de forma invertida.
const num = 5;

for (let index1 = num; index1 >= 0; index1 -= 1) {
  let asterisk = '';
  for (let index2 = 0; index2 <= num; index2 += 1) {
    if (index2 > index1) {
      asterisk += '*';
    }
    else {
      asterisk += ' ';
    }
  }
  console.log(asterisk);
}