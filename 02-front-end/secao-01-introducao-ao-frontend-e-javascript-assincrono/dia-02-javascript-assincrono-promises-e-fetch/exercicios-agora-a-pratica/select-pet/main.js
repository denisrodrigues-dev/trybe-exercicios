const buttonDog = document.getElementById('btn-getDog');
const buttonCat = document.getElementById('btn-getCat');
const buttonSurprise = document.getElementById('btn-surprise');

const showPet = (petURL) => {
  const img = document.getElementById('image-pet');
  img.src = petURL;
};

const fetchData = async ({ target: { innerText } }) => {
  const API_URL = innerText === 'Get random dog'
    ? 'https://dog.ceo/api/breeds/image/random'
    : 'https://api.thecatapi.com/v1/images/search';

  const result = await fetch(API_URL);
  const data = await result.json();

  const petURL = data.message || data[0].url;
  showPet(petURL);
};

const fetchDataSurprise = async () => {
  const result = await Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://api.thecatapi.com/v1/images/search'),
  ]);
  const data = await result.json();

  const petURL = data.message || data[0].url;
  showPet(petURL);
};

buttonDog.addEventListener('click', (event) => fetchData(event));
buttonCat.addEventListener('click', (event) => fetchData(event));
buttonSurprise.addEventListener('click', fetchDataSurprise);
