import './style.css';

const numberMaxItens = 40;

const createElements = (tag, id, classe, text) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (classe) element.classList.add(classe);
  if (text) element.innerText = text;

  return element;
};

const showCurrency = (rates, moeda) => {
  const sectionShow = document.getElementById('section-show-currency');
  sectionShow.innerHTML = '';
  const container = createElements('section', 'section-currency-container', '', '');
  const h3El = createElements(
    'h3',
    'title-currency',
    '',
    `Valores referentes a 1 ${moeda.toUpperCase()}`,
  );
  sectionShow.appendChild(h3El);
  Object.keys(rates).slice(0, numberMaxItens).forEach((rate) => {
    const sectionCurrency = createElements('section', '', 'section-currency', '');
    const sectionText = createElements('section', '', 'section-text-currency', '');
    const imgCoin = createElements('img', '', '', '');
    imgCoin.src = '../images/coin.png';
    const ptextCurrency = createElements('p', '', '', rate);
    const pValueCurrency = createElements('p', '', '', rates[rate].toFixed(2));
    sectionText.appendChild(imgCoin);
    sectionText.appendChild(ptextCurrency);
    sectionCurrency.appendChild(sectionText);
    sectionCurrency.appendChild(pValueCurrency);
    container.appendChild(sectionCurrency);
  });
  sectionShow.appendChild(container);
};

const fetchCurrency = async (moeda) => {
  const URL_API = `https://api.exchangerate.host/latest?base=${moeda}`;

  const response = await fetch(URL_API);
  const data = await response.json();

  showCurrency(data.rates, moeda);
};

const searchCurrency = () => {
  const inputValue = document.getElementById('input-currency').value;
  fetchCurrency(inputValue);
};

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', searchCurrency);
