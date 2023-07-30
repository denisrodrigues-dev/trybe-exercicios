// Acesse o elemento where-are-you.
const sectionWhere = document.getElementById('where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
sectionWhere.parentElement.style.color = ('red');

// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
sectionWhere.firstElementChild.innerText = 'first-child-of-child';

// Acesse o first-child a partir de parent.
const parent = sectionWhere.parentElement;
parent.firstElementChild;

// Acesse o first-child a partir de where-are-you.
sectionWhere.previousElementSibling;

// Acesse o texto Attention! a partir de where-are-you.
sectionWhere.nextSibling;

// Acesse o third-child a partir de where-are-you.
sectionWhere.nextElementSibling;

// Acesse o third-child a partir de parent.
parent.lastElementChild.previousElementSibling;