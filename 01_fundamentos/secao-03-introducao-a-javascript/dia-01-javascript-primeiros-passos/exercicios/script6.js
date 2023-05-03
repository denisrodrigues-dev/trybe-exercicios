/* 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let pecaXadrez = 'bispo';

switch (pecaXadrez) {
    case 'peão':
        console.log('frente');
        break;
    case 'cavalo':
        console.log('forma L');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'torre':
        console.log('linhas horizontais ou verticais');
        break;
    case 'dama':
        console.log('retas horizontais, verticais e diagonais');
        break;
    case 'rei':
        console.log('qualquer direção ou sentido');
        break;
    default:
        console.log('peça inválida!');
}