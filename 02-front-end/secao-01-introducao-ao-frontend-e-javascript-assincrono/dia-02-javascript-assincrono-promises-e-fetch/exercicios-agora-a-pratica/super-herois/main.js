import Swal from 'sweetalert2';

const maxId = 731;
const button = document.getElementById('btn-generate');

const generateId = () => Math.floor(Math.random() * maxId) + 1;

const showCardHero = (heroInfo) => {
  console.log(heroInfo);
  const img = document.getElementById('img-hero');
  const title = document.getElementById('name-hero');
  img.src = heroInfo.images.md;
  title.innerText = heroInfo.name;
};

const alertError = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Hero not found!',
    text: error.message,
    confirmButtonText: 'OK',
  });
};

const getHeroData = async () => {
  const id = generateId();
  try {
    const result = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`);
    const data = await result.json();
    showCardHero(data);
  } catch (error) {
    alertError(error);
  }
};

button.addEventListener('click', getHeroData);

window.onload = () => {
  getHeroData();
};
