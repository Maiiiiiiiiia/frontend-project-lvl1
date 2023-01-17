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
  const maxValueOfRandomNum = 50;
  const firstRandomNum = getRandomNumber(1, maxValueOfRandomNum);
  const secondRandomNum = getRandomNumber(1, maxValueOfRandomNum);
  const randomOperator = operations[getRandomNumber(0, operations.length - 1)];
  const someQuestion = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  const correctAnswer = `${calculate(firstRandomNum, randomOperator, secondRandomNum)}`;
  return [someQuestion, correctAnswer];
};

const runGameCalc = () => {
  runGame(gameRule, generateData);
};

export default runGameCalc;
