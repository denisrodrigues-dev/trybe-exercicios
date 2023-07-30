// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
const updateParagraph = (string) => {
  const paragraph = document.getElementsByTagName('p');
  paragraph[1].innerText = string;
};
// Crie e execute uma função que mude a cor de fundo do elemento amarelo para rgb(76, 164, 109).
const updateColorMain = (string) => {
  const main = document.getElementsByClassName('main-content');
  main[0].style.backgroundColor = string;
};

// Crie e execute uma função que mude a cor de fundo do elemento vermelho para branco.
const updateColorSection = (string) => {
  const section = document.getElementsByClassName('center-content');
  section[0].style.backgroundColor = string;
};

// Crie e execute uma função que corrija o texto da tag <h1>.
const correctTitle = (string) => {
  const title = document.getElementsByClassName('title');
  title[0].innerText = string;
};

// Crie e execute uma função que modifique o texto da primeira tag <p> para letras maiúsculas.
const upperCaseLetters = () => {
  const firstParagraph = document.getElementsByTagName('p');
  firstParagraph[0].innerText = firstParagraph[0].innerText.toUpperCase();
};

// Crie e execute uma função que exiba o conteúdo de todas as tags <p>.
const showParagraphs = () => {
  const paragraphs = document.getElementsByTagName('p');
  paragraphs[paragraphs.length - 1].innerText = '';
  for (let index = 0; index < paragraphs.length - 1; index += 1) {
    paragraphs[paragraphs.length - 1].innerText += ` ${paragraphs[index].innerText}`;
  }
};

updateParagraph('Daqui a 2 anos espero ter me formado na Trybe e me tornar um ótimo programador.');
updateColorMain('rgb(76, 164, 109');
updateColorSection('white');
correctTitle('Desafio - JavaScript');
upperCaseLetters();
showParagraphs();
