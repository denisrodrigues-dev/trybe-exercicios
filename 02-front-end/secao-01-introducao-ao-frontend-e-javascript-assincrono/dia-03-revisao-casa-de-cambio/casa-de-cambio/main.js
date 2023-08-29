const button = document.getElementById('btn-search');

const showCurrencies = ({ base, rates }) => {
  const sectionCurrencies = document.getElementById('section-currencies');
  sectionCurrencies.innerHTML = '';
  const titleH2 = document.getElementById('title-currencies');
  console.log(base);
  titleH2.innerText = `Valores referentes a 1 ${base}`
  const codes = Object.keys(rates);
  codes.splice(0, 40).forEach((code) => { 
  const sectionCurrency = document.createElement('section');
  sectionCurrency.className = 'section-currency';
  const elP = document.createElement('p');
  elP.innerText = `${code} ${rates[code].toFixed(2)}`
  const elImg = document.createElement('img');
  elImg.src = './image/coin.png'
  sectionCurrency.appendChild(elImg);
  sectionCurrency.appendChild(elP);
  sectionCurrencies.appendChild(sectionCurrency);
})
}

const fetchData = async () => {
  const currency = document.getElementById('input-currency').value;
  const API_URL = `https://api.exchangerate.host/latest?base=${currency}`;

  const result = await fetch(API_URL);
  const data = await result.json();

  console.log(data);

  showCurrencies(data, currency);
}

button.addEventListener('click', fetchData);

