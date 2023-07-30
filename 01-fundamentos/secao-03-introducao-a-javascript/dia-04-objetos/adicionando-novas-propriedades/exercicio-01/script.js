// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer, chamando a função addProperty.

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', '19/07/1932');
addProperty(customer, 'email', 'roberto@trybe.com')
addProperty(customer, 'fone', '11984231525')
addProperty(customer, 'userGithub', 'roberto-dev')
addProperty(customer, 'linkedIn', 'https://linkedin.com/roberto-dev')

// Exibe o objeto transformado
console.log(customer);