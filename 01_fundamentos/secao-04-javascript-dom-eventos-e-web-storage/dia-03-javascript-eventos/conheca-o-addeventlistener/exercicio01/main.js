const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Isso acontece porque a classe 'tech' no arquivo style.css recebe uma propriedade chamada transform com translatey que move o elemento no eixo y 20px, essa classe então é aplicada na tag li.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

const changeTech = () => {
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', (event) => {
      const tech = document.getElementsByClassName('tech')[0];
      tech.classList.remove('tech');
      event.target.classList.add('tech');
    });
  }
};

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

const updateTextTech = () => {
  input.addEventListener('input', (event) => {
    const tech = document.getElementsByClassName('tech')[0];
    tech.innerText = event.target.value;
  });
};

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

const redirect = () => {
    myWebpage.addEventListener('dblclick', () => {
        window.location.replace('https://www.linkedin.com/in/denis-rodrigues-dev/');
    })
};

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

const updateColor = () => {
    myWebpage.addEventListener('mouseover', () => {
        if(myWebpage.style.color === 'blue') {
            myWebpage.style.color = 'white';
        } else {
            myWebpage.style.color = 'blue' 
        }
    })
}

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener('dblclick', resetText);
changeTech();
updateTextTech();
redirect();
updateColor();

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
