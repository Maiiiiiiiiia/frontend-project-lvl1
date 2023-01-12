import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'What number is missing in the progression?';

const foo4 = (x, d, l) => {
  const len = l - 1;
  const arr = [];
  arr[0] = x;
  for (let i = 1; i <= len; i += 1) {
    arr[i] = arr[i - 1] + d;
  }
  return arr;
};

const brainCheck = () => {
  const firstStep = getRandomArbitrary(1, 50);
  const step = getRandomArbitrary(2, 10);
  const lengthOfProgr = getRandomArbitrary(5, 10);

  const setOfNum = foo4(firstStep, step, lengthOfProgr);
  const space = getRandomArbitrary(1, setOfNum.length - 1);
  const correctAnswer = `${setOfNum[space]}`;
  setOfNum[space] = '..';
  const someQuestion = setOfNum.join(' ');
  return [someQuestion, correctAnswer];
};

const evenProgression = () => {
  gameBrain(gameRules, brainCheck);
};
export default evenProgression;
