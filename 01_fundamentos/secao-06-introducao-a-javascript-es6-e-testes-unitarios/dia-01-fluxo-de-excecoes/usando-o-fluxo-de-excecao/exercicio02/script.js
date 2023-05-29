const calcMedia = (n1, n2, n3, n4) => {
  try {
    checkISNumber(n1, n2, n3, n4);

    const media = (n1 + n2 + n3 + n4) / 4;
    return media;
  } catch (error) {
    return error.message;
  }
};

const checkISNumber = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number')  {
    throw new Error('Digite apenas números');
  }
};

console.log(calcMedia(10, 6, 8, 10));
