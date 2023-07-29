// Utilizando for, descubra o maior valor contido no array e imprima-o.
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maxNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maxNumber) maxNumber = numbers[index];
}

console.log(maxNumber);
