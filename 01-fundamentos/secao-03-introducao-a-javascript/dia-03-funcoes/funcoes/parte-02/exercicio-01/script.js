// Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.
const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
  if (typeof customer === 'string') {
    trybeBankCustomers.push(customer);
  }
  else {
    console.log('O parâmetro passado deve ser do tipo string');
  }
}

addCustomer('Renato');
addCustomer('Carlos');
addCustomer(28);
console.log(trybeBankCustomers);



