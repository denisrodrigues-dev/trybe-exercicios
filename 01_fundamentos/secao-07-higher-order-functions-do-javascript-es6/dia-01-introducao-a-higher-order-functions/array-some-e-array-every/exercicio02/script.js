const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

/* Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;

Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. */

const verifyAges = (people, age) => people.every((person) => person.age >= age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
