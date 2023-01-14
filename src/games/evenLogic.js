import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateData = () => {
  const someQuestion = getRandomNumber(1, 99);
  const correctAnswer = isParity(someQuestion);
  return [someQuestion, correctAnswer];
};

const runGameEven = () => {
  runGame(gameRule, generateData);
};

export default runGameEven;
