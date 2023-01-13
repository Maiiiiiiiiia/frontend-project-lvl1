import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const concept = 'What number is missing in the progression?';

const createProgression = (progressionStart, progressionStep, progressionLength) => {
  const len = progressionLength - 1;
  const arr = [];
  arr[0] = progressionStart;
  for (let i = 1; i <= len; i += 1) {
    arr[i] = arr[i - 1] + progressionStep;
  }
  return arr;
};

const roundGeneration = () => {
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

const gameProgression = () => {
  engine(concept, roundGeneration);
};
export default gameProgression;
