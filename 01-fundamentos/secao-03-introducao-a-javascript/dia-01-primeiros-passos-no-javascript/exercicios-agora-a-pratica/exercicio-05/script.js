// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
const piece = 'Rainha';

switch (piece.toLowerCase()) {
  case 'rei':
    console.log('Uma casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Quantas casas desejar em qualquer direção');
    break;
  case 'torre':
    console.log('Quantas casas desejar em linha reta');
    break;
  case 'bispo':
    console.log('Quantas casas desejar em diagonal');
    break;
  case 'cavalo':
    console.log('Movimento em "L"');
    break;
  case 'peão':
    console.log('Move-se uma casa para frente, no primeiro movimento pode mover duas');
    break;
  default:
    console.log('Peça não existe!');
}