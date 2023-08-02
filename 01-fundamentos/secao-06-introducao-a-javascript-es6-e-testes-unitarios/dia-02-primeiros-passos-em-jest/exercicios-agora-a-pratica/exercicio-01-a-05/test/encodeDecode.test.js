const {encode, decode} = require('../src/encodeDecode');

describe('Testa as funções encode e decode.', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('testa se em encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Testa se em decode os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Testa se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(encode('brts')).toBe('brts');
    expect(decode('697')).toBe('697');
  });
  it('Testa se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('trybe')).toHaveLength(5);
    expect(decode('123rar')).toHaveLength(6);
  });
})