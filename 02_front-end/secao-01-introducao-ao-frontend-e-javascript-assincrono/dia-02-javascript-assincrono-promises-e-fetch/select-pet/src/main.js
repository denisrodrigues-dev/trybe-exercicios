import './style.css';

const imgPet = document.getElementById('img-pet');

const fetchDog = async () => {
  const URL_DOG = 'https://dog.ceo/api/breeds/image/random';

  const response = await fetch(URL_DOG);
  const data = await response.json();

  imgPet.src = data.message;
};

const btnGetDog = document.getElementById('btn-get-dog');
btnGetDog.addEventListener('click', fetchDog);

const fetchCat = async () => {
  const URL_CAT = 'https://api.thecatapi.com/v1/images/search';

  const response = await fetch(URL_CAT);
  const data = await response.json();

  imgPet.src = data[0].url;
};

const btnGetCat = document.getElementById('btn-get-cat');
btnGetCat.addEventListener('click', fetchCat);

const fetchSurprise = async () => {
  const result = await Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ]);
  const data = await result.json();

  imgPet.src = data.message || data[0].url;
};

const btnSurprise = document.getElementById('btn-surprise');
btnSurprise.addEventListener('click', fetchSurprise);
