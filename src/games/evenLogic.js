import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValueOfRandomNum = 1;
const maxValueOfRandomNum = 99;

const isParity = (num) => num % 2 === 0;

const generateData = () => {
  const someQuestion = getRandomNumber(minValueOfRandomNum, maxValueOfRandomNum);
  const correctAnswer = isParity(someQuestion) ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const runGameEven = () => {
  runGame(gameRule, generateData);
};

export default runGameEven;
