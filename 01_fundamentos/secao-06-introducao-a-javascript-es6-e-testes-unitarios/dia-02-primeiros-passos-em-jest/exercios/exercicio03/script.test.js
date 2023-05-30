const {encode, decode} = require('./script');

describe('Testa a função encode', () => {
    it('Teste se a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('Testa se encode é uma função', () => {
        expect(typeof encode).toBe('function');
    });
    it('Testa se a vogal a é convertida em 1', () => {
        expect(encode('pasta')).toBe('p1st1');
    });
    it('Testa se a vogal e é convertida em 2', () => {
        expect(encode('mestre')).toBe('m2str2');
    });
    it('Testa se a vogal i é convertida em 3', () => {
        expect(encode('cris')).toBe('cr3s');
    });
    it('Testa se a vogal o é convertida em 4', () => {
        expect(encode('ovo')).toBe('4v4');
    });
    it('Testa se a vogal u é convertida em 5', () => {
        expect(encode('num')).toBe('n5m');
    });
    it('Testa se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('papagaio')).toHaveLength(8);
    });
});

describe('Testa a função decode', () => {
    it('Teste se a função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('Testa se decode é uma função', () => {
        expect(typeof decode).toBe('function');
    });
    it('Testa se o número 1 é convertido em a', () => {
        expect(decode('p1st1')).toBe('pasta');
    });
    it('Testa se o número 2 é convertido em e', () => {
        expect(decode('m2str2')).toBe('mestre');
    });
    it('Testa se o número 3 é convertido em i', () => {
        expect(decode('cr3s')).toBe('cris');
    });
    it('Testa se o número 4 é convertido em o', () => {
        expect(decode('4v4')).toBe('ovo');
    });
    it('Testa se o número 5 é convertido em u', () => {
        expect(decode('n5m')).toBe('num');
    });
    it('Testa se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(decode('p1p1g134')).toHaveLength(8);
    });
});