const calcStudentAverage = (grade1, grade2, grade3, grade4) => {
  try {
    checkNumber(grade1, grade2, grade3, grade4);
    return (grade1 + grade2 + grade3 + grade4) / 4
  } catch (error) {
    return (error.message);
  }
}

const checkNumber = (number1, number2, number3, number4) => {
  if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number' || typeof number4 !== 'number') {
    throw new Error('Apenas número são permitidos');
  }
}

console.log(calcStudentAverage(7, '8', 5, 10));