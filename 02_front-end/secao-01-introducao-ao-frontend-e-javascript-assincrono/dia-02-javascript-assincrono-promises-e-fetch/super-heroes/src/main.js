import Swal from 'sweetalert2';
import './style.css';

const maxId = 731;

const imgHero = document.getElementById('img-hero');
const textHero = document.getElementById('name-hero');

const generateNumber = () => Math.floor(Math.random() * maxId) + 1;

const sortHero = ({ name, images: { md } }) => {
  console.log(name, md);
  imgHero.src = md;
  textHero.innerText = name;
};

const fetchHero = async () => {
  const id = generateNumber();
  const URL_ID = `https://akabab.github.io/superhero-api/api/id/${id}.json`;

  try {
    const response = await fetch(URL_ID);
    const data = await response.json();

    sortHero(data);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Hero not found',
      text: error.message,
      confirmButtonText: 'OK',
    });
  }
};

const buttonSort = document.getElementById('btn-sort');
buttonSort.addEventListener('click', fetchHero);

fetchHero();
