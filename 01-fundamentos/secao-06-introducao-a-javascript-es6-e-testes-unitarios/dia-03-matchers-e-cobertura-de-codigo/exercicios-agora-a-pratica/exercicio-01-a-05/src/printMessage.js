let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  // Implemente seu código aqui
  if (isObject(characterInfo) || !characterInfo.personagem) {
    throw new Error('objeto inválido');
  }
  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

const isObject = (characterInfo) => typeof characterInfo !== 'object' || Array.isArray(characterInfo);

module.exports = { info, printMessage };