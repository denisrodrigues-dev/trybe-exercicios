const techList = (techs, name) => {
  if(!techs.length) return 'Vazio!';
  const orderTechs = techs.sort();
  const techsWithName = [];

  for (let index = 0; index < orderTechs.length; index += 1) {
    const objTech = {
      tech: orderTechs[index],
      name,
    }
    techsWithName.push(objTech);
  }
  return techsWithName;
};

module.exports = techList;