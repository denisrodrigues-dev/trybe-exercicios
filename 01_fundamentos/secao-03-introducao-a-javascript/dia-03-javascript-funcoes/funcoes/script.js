/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo. */

let saldo = 500;

function somaValor(saldo, valor) {
    return saldo + valor;
}

function subtraiValor(saldo, valor) {
    return saldo - valor;
}

function multiplicaValor(saldo, valor) {
    return saldo * valor;
}

function dividiValog(saldo, valor) {
    return saldo / valor;
}

console.log(somaValor(saldo, 200));
console.log(subtraiValor(saldo, 300));
console.log(multiplicaValor(saldo, 5));
console.log(dividiValog(saldo, 100));