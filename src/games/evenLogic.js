import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (num) => num % 2 === 0;

const generateData = () => {
  const maxValueOfRandomNum = 99;
  const someQuestion = getRandomNumber(1, maxValueOfRandomNum);
  const correctAnswer = isParity(someQuestion) ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const runGameEven = () => {
  runGame(gameRule, generateData);
};

export default runGameEven;
