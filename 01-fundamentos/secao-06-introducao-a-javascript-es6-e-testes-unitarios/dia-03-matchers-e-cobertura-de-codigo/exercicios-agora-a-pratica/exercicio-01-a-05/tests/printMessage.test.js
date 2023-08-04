const { info, printMessage } = require('../src/printMessage');

const objTest = {
  name: 'Carlos',
}

describe('Testa o objeto info', () => {
  it('Testa se o objeto passado como parâmetro tem a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('Testa a função printMessage', () => {
  it('Testa se a resposta contém a informação “Boas vindas” antes de chamar o nome da personagem.', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  it('Testa se a resposta contém o nome correto da personagem', () => {
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('Testa se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.', () => {
    expect(() => {
      printMessage(objTest);
    }).toThrow();
    expect(() => {
      printMessage('Margarida');
    }).toThrow();
  });
});