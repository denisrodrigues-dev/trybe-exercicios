const readlineSync = require('readline-sync');

const calcImc = () => {
  const weight = readlineSync.questionFloat('What is your weight? ');
  const height = readlineSync.questionFloat('What is your height? ');
  const resultImc = Math.round(weight / height ** 2); 

  if (resultImc < 18.5) console.log(`Seu IMC é ${resultImc} sua situação é "Abaixo do peso"`);
  else if (resultImc >= 18.5 && resultImc < 25) console.log(`Seu IMC é ${resultImc} sua situação é "Peso normal"`);
  else if (resultImc >= 25 && resultImc < 30) console.log(`Seu IMC é ${resultImc} sua situação é "Acima do peso"`);
  else if (resultImc >= 30 && resultImc < 35) console.log(`Seu IMC é ${resultImc} sua situação é "Obesidade grau I"`);
  else if (resultImc >= 35 && resultImc < 40) console.log(`Seu IMC é ${resultImc} sua situação é "Obesidade grau II"`);
  else console.log(`Seu IMC é ${resultImc} sua situação é "Obesidade grau III e IV"`);
};

calcImc();