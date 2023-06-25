import validator from 'validator';
import './style.css';

const validateBtn = document.getElementById('btn-validate');
const validateMessage = 'A validação retornou';
const number = 4;

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const inputValue = document.getElementById('input-value').value;
  const paragraph = document.getElementById('validate-text');
  const option = document.getElementById('field').value;

  switch (option) {
  case 'email':
    paragraph.innerText = `${validateMessage} ${validator.isEmail(inputValue)}`;
    break;
  case 'cpf':
    paragraph.innerText = `${validateMessage} ${validator.isTaxID(inputValue, 'pt-BR')}`;
    break;
  case 'rgb':
    paragraph.innerText = `${validateMessage} ${validator.isRgbColor(inputValue)}`;
    break;
  case 'uuid':
    paragraph.innerText = `${validateMessage} ${validator.isUUID(inputValue, number)}`;
    break;
  case 'url':
    paragraph.innerText = `${validateMessage} ${validator.isURL(inputValue)}`;
    break;
  default:
    throw new Error('Opção inválida!');
  }
});
