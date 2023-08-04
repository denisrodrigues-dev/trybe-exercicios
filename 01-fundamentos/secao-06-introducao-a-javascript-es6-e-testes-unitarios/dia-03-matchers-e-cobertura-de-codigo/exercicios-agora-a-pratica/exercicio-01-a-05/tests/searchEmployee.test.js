const { searchEmployee, professionalBoard } = require('../src/searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se a função searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('Testa se a função searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  it('Testa se a função searchEmployee(id, "specialities") retorna um array com todas as habilidades da id pesquisada.', () => {
    expect(Array.isArray(searchEmployee('4456-4', 'specialities'))).toBeTruthy();
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
  it('Testa se a mensagem "ID não identificada" é retornada quando a id não existir.', () => {
    expect(() => {
      searchEmployee('12345', 'firstName')
    }).toThrow(new Error('ID não identificada'));
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => {
      searchEmployee('4456-4', 'address')
    }).toThrow(new Error('Informação inexistente'));
  });
})