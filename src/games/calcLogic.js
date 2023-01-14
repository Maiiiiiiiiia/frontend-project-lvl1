import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
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

const generateData = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const randomOperator = operations[getRandomNumber(0, 2)];
  const someQuestion = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${calculate(number1, randomOperator, number2)}`;
  return [someQuestion, correctAnswer];
};

const runGameCalc = () => {
  runGame(gameRule, generateData);
};

export default runGameCalc;
