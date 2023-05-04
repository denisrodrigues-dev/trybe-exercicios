/* Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string. */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addCliente(arrayClientes, name) {
    if(typeof(name) === 'string') {
        arrayClientes.push(name);
        return arrayClientes;
    } else {
        return 'O valor informado não é uma string'
    }
}

console.log(addCliente(clientesTrybeBank, 'Dênis'));