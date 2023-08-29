import validator from 'validator';

const button = document.getElementById('btn-submit');

const optionValidator = (type, value) => {
  const options = {
    cpf: validator.isTaxID(value, 'pt-BR'),
    email: validator.isEmail(value),
    rgb: validator.isRgbColor(value),
    url: validator.isURL(value),
    uppercase: validator.isUppercase(value),
  }
  return options[type];
}

const showResult = (isValidate) => {
  const result = document.getElementById('result-validator');
  result.innerText = `A validação retornou ${isValidate}`
}

const validateField = (event) => {
  event.preventDefault();
  
  const inputValue = document.getElementById('input-value').value;
  const selectValidate = document.getElementById('option').value;
  
  showResult(optionValidator(selectValidate, inputValue));
}



button.addEventListener('click', (event) => validateField(event));

