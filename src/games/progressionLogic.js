import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

const createProgression = (progressionStart, progressionStep, progressionLength) => {
  const array = [];
  array[0] = progressionStart;
  for (let i = 1; i <= progressionLength; i += 1) {
    array[i] = array[i - 1] + progressionStep;
  }
  return array;
};

const generateData = () => {
  const maxValueOfRandomNum = 50;
  const maxStepOfProgression = 10;
  const maxLengthOfProgression = 10;
  const minLengthOfProgression = 5;
  const firstStep = getRandomNumber(1, maxValueOfRandomNum);
  const step = getRandomNumber(1, maxStepOfProgression);
  const lengthOfProgr = getRandomNumber(minLengthOfProgression, maxLengthOfProgression);

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
