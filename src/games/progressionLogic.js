import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

const createProgression = (progressionStart, progressionStep, progressionLength) => {
  const massive = [];
  massive[0] = progressionStart;
  for (let i = 1; i <= progressionLength; i += 1) {
    massive[i] = massive[i - 1] + progressionStep;
  }
  return massive;
};

const generateData = () => {
  const firstStep = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const lengthOfProgr = getRandomNumber(5, 10);

  const setOfNum = createProgression(firstStep, step, lengthOfProgr);
  const space = getRandomNumber(1, setOfNum.length - 1);
  const correctAnswer = `${setOfNum[space]}`;
  setOfNum[space] = '..';
  const someQuestion = setOfNum.join(' ');
  return [someQuestion, correctAnswer];
};

const runGameProgression = () => {
  runGame(gameRule, generateData);
};
export default runGameProgression;
