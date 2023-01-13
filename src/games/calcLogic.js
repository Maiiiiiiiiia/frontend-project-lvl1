import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const concept = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculation = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Parameter is not a operator!');
  }
};

const roundGeneration = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const randomOperator = operations[getRandomNumber(0, 2)];
  const someQuestion = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${calculation(number1, randomOperator, number2)}`;
  return [someQuestion, correctAnswer];
};

const gameCalc = () => {
  engine(concept, roundGeneration);
};

export default gameCalc;
