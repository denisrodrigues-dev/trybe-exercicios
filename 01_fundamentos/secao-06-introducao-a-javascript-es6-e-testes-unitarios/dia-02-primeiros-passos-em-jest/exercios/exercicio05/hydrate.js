const hydrate = (string) => {
    let soma = 0;
    for (let index = 0; index < string.length; index += 1) {
        const character = parseInt(string[index]);
        if(!isNaN(character)) {
            soma += character;
        }
    }
    if (soma === 1) return `${soma} copo de água`;
    else return `${soma} copos de água`;
};

module.exports = hydrate;