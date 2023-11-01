const calc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })
};

const resolve = async () => {
  try {
    const resolveResult = await calc(3, '10', 2);
    console.log(resolveResult);
  } catch (error) {
    console.log(error.message);
  }
};

resolve();