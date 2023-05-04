/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';
let newWord = '';

for(let index = word.length - 1; index >= 0; index -= 1) {
    newWord += word[index];
}

console.log(newWord);