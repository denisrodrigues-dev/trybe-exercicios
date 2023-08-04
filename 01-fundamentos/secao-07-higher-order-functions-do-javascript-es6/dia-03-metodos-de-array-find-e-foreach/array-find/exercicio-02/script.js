// Sua tarefa é implementar a função searchContact(contacts, name), que recebe uma lista de contatos e o nome do contato a ser encontrado. Se o contato for encontrado, retornar um objeto com todas as informações do contato utilizando spread operator. Se o contato não for encontrado, retornar a mensagem “Contato não encontrado”.
const contacts = [
  { name: 'João', phone: '123456789' },
  { name: 'Maria', phone: '987654321' },
  { name: 'Pedro', phone: '456123789' },
  { name: 'Ana', phone: '789456123' },
  { name: 'Carlos', phone: '321654987' },
  { name: 'Mariana', phone: '654123987' },
  { name: 'Lucas', phone: '987321654' },
  { name: 'Laura', phone: '123789456' },
  { name: 'Tiago', phone: '789123456' },
  { name: 'Beatriz', phone: '456789123' }
];

const searchContact = (contacts, name) => { 
  findContact = contacts.find((contact) => contact.name === name);

  return findContact ? {...findContact} : 'Contato não encontrado';
};

console.log(searchContact(contacts, 'Ana'));