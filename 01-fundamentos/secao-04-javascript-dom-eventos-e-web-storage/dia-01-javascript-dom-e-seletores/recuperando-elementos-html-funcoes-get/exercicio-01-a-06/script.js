// Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
const title = document.getElementById('page-title');
title.innerText = 'Harry Potter - E a Pedra Filosofal'

// Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
const firstParagraph = document.getElementById('first-paragraph');
firstParagraph.innerText = 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.'

// Recupere o subtítulo e altere-o para: Principais informações.
const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'Principais informações';

// Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
const paragraphs = document.getElementsByClassName('paragraph-style')[0];
paragraphs.style.fontStyle = 'italic';

// Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'Roteirista: Kloves, Direção: Chris Columbus, Atores principais: Daniel Radcliffe - Harry Potter, Emma Watson - Hermione Granger, Rupert Grint - Ron Weasley, Alan Rickman - Severus Snape, Robbie Coltrane - Rúbeo Hagrid, Tom Felton - Draco Malfoy, Richard Harris - Albus Dumbledore, Matthew Lewis - Neville Longbottom.'

// Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.
const elementH2 = document.getElementsByTagName('h2');
elementH2[0].style.color = 'red';