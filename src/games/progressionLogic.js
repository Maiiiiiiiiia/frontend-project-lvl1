import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const minValueOfRandomNum = 1;
const maxValueOfRandomNum = 50;
const minStepOfProgression = 10;
const maxStepOfProgression = 10;
const minLengthOfProgression = 5;
const maxLengthOfProgression = 10;
const minValueofSpace = 1;


const createProgression = (progressionStart, progressionStep, progressionLength) => {
  const array = [];
  array[0] = progressionStart;
  for (let i = 1; i <= progressionLength; i += 1) {
    array[i] = array[i - 1] + progressionStep;
  }
  return array;
};

const generateData = () => {
  const firstStep = getRandomNumber(minValueOfRandomNum, maxValueOfRandomNum);
  const step = getRandomNumber(minStepOfProgression, maxStepOfProgression);
  const lengthOfProgression = getRandomNumber(minLengthOfProgression, maxLengthOfProgression);
  const progression = createProgression(firstStep, step, lengthOfProgression);
  const space = getRandomNumber(minValueofSpace, progression.length - 1);
  const correctAnswer = `${progression[space]}`;
  progression[space] = '..';
  const someQuestion = progression.join(' ');
  return [someQuestion, correctAnswer];
};

const runGameProgression = () => {
  runGame(gameRule, generateData);
};
export default runGameProgression;
