const createItem = require('../src/createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toStrictEqual({
      name: 'banana',
      quantity: 20,
      unit: 'kg',
      price: 1.99
    });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99).quantity).toBe(0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {
      createItem();
    }).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {
      createItem(123, 'kg', 1.99, 25);
    }).toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {
      createItem('banana', 'kg', -2.00, 20);
    }).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {
      createItem('banana', 'kg', 0, 20);
    }).toThrow('O preço do item deve ser maior que zero');
  });
});