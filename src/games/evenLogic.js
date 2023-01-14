import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';
import isParity from '../isParity.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const questionNum = getRandomNumber(1, 99);
  const someQuestion = `${questionNum}`;
  const correctAnswer = isParity(questionNum);
  return [someQuestion, correctAnswer];
};

const runGameEven = () => {
  runGame(gameRule, generateData);
};

export default runGameEven;
