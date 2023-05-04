/* Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array. */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function deleteCliente(arrayClientes, name) {

    if(arrayClientes.includes(name) && typeof(name) === 'string') {
        let index = arrayClientes.indexOf(name);
        arrayClientes.splice(index, 1);
    
        return arrayClientes;
    } else {
        return 'O valor informado é inválido ou o cliente não existe';
    }
   
}

console.log(deleteCliente(clientesTrybeBank, 'Gus'));

