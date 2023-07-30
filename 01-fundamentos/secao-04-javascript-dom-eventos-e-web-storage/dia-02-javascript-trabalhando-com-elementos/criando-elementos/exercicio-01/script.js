const elementWhereAreYou = document.getElementById('elementoOndeVoceEsta');

// Crie um irmão para elementoOndeVoceEsta.
const elBrother = document.createElement('section');
elBrother.id = 'quintoFilho';
elementWhereAreYou.parentElement.appendChild(elBrother);

// Crie um filho para elementoOndeVoceEsta.
const elChild = document.createElement('section');
elChild.id = 'terceiroFilho';
elementWhereAreYou.appendChild(elChild);

// Crie um filho para primeiroFilhoDoFilho.
const elChild2 = document.createElement('section');
elChild2.id = 'primeiroFilhoDoFilhoDoFilho';
elementWhereAreYou.firstElementChild.appendChild(elChild2);

// A partir desse filho criado, acesse terceiroFilho.
elChild2.parentElement.parentElement.lastElementChild;