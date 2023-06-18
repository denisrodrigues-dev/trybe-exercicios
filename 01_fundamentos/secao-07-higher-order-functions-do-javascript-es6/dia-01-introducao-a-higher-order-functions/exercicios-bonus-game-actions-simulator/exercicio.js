// Crie uma função que retorne o dano do dragão.

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const { mage, warrior, dragon } = require('./data');

const dragonDamage = ({strength}) => {
  const damage = Math.floor(Math.random() * (strength - 15 + 1) ) + 15;
  return damage;
};

console.log(dragonDamage(dragon));

// Crie uma função que retorne o dano causado pelo warrior.

// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = ({strength, weaponDmg}) => {
  const damage = Math.floor(Math.random() * (strength * weaponDmg - strength + 1) ) + strength;
  return damage;
}

console.log(warriorDamage(warrior));