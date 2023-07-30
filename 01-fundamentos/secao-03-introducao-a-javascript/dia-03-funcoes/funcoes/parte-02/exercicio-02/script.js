// Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
// Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
// Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”
const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(bankCustomers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === 'string') bankCustomers.push(newCustomers[index])
    else return 'Todos os valores precisam ser strings.';
  }
  return bankCustomers;
}

console.log(addCustomers(trybeBankCustomers, ['Paulo', 'Sara', 'Beatriz']));
console.log(addCustomers(trybeBankCustomers, ['Ana', 78, 'Carlos']));
