const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else {
    const orderArray = arrayTech.sort();
    const newArray = [];
    for (let index = 0; index < orderArray.length; index += 1) {
      const obj = {
        tech: orderArray[index],
        name: name,
      };
      newArray.push(obj);
    }
    return newArray;
  }
};

module.exports = techList;
