const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const findNameFiveLetters = names.find((name) => name.length === 5);

console.log(findNameFiveLetters);
