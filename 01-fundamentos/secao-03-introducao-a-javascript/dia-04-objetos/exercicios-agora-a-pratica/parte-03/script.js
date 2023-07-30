const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
const getValueByIndex = (object, index) => {
  return Object.values(object)[index];
}

console.log(getValueByIndex(school, 0));

// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const sumTotalStudents = (object) => {
  let sum = 0;

  for (let index = 0; index < object.lessons.length; index += 1) {
    sum += object.lessons[index].students;
  }
  
  return sum;
}

console.log(sumTotalStudents(school));

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verifyKey = (object, key) => {
  for (let index = 0; index < object.lessons.length; index += 1) {
    if (!object.lessons[index][key]) return false;
  }
  return true;
}

console.log(verifyKey(school, 'professor'));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const changeShift = (object, course, value) => {
  for (let index = 0; index < object.lessons.length; index += 1) {
    if (object.lessons[index].course === course) {
      object.lessons[index].shift = value;
    }
  }
  return object;
}

console.log(changeShift(school, 'Python', 'Noite'));