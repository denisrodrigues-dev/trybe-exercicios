// Altere a cor de fundo do header para rgb(0, 176, 105);
const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

// Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
const divEmergency = document.querySelector('.emergency-tasks');
divEmergency.style.backgroundColor = 'rgb(255, 159, 132)';

// Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);
const titlesEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titlesEmergency.length; index += 1) {
  titlesEmergency[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

// Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);
const divNoEmergency = document.querySelector('.no-emergency-tasks');
divNoEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

// Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);
const titlesNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titlesNoEmergency.length; index += 1) {
  titlesNoEmergency[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

// Altere a cor de fundo do footer para rgb(0, 53, 51).
const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';