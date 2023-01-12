import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const instruction = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const brainCheck = () => {
  const number1 = getRandomArbitrary(1, 50);
  const number2 = getRandomArbitrary(1, 50);
  const randomOperator = operations[getRandomArbitrary(0, 2)];
  const someQuestion = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${instruction(number1, randomOperator, number2)}`;
  return [someQuestion, correctAnswer];
};

const evenCalc = () => {
  gameBrain(gameRules, brainCheck);
};

export default evenCalc;
