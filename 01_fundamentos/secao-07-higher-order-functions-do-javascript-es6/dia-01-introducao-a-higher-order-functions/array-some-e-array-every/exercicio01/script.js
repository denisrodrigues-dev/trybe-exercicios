const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

/* O nome das pessoas convidadas está salvo em um array chamado names;

A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false. */

const hasName = (arr, name) => {
  return arr.some((invitedName) => invitedName === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));
