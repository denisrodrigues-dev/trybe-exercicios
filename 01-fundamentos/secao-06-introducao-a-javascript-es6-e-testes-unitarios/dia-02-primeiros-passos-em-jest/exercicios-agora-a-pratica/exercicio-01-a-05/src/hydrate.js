const hydrate = (phrase) => {
  const numbers = filterNumbers(phrase);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index]);
  }
  if (sum > 1) return `${sum} copos de água`;
  return `${sum} copo de água`;
}

const filterNumbers = (phrase) => {
  return phrase.replace(/[^0-9]/g, '').split('');
}

module.exports = hydrate;