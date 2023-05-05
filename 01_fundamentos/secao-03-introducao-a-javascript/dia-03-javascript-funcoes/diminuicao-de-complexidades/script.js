/* Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores. */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function checkString(cliente) {
    if(typeof(cliente) === 'string') {
        return true
    }
    return false;
}

function checkCliente(cliente) {
    if(checkString(cliente)) {
        for(let index = 0; index < clientesTrybeBank.length; index += 1) {
            if(clientesTrybeBank[index] === cliente) {
                return index;
            }
        }
        return 'Cliente não encontrado';
    }
    else {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
}

function removeCliente(cliente) {
    if(checkString(cliente) && typeof(checkCliente(cliente)) === 'number') {
        let index = checkCliente(cliente);
        clientesTrybeBank.splice(index, 1);
        return clientesTrybeBank;
    }else {
        return checkCliente(cliente);
    }
}

console.log(removeCliente('John'));