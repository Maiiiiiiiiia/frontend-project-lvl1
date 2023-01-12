import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (numOne, numTwo) => {
  const nOne = numOne;
  const nTwo = numTwo;
  while (nOne !== nTwo) {
    if (nOne > nTwo) {
      nOne -= nTwo;
    } else {
      nTwo -= nOne;
    }
  }
  return nOne;
};

const brainCheck = () => {
  const num1 = getRandomArbitrary(1, 50);
  const num2 = getRandomArbitrary(1, 50);
  const someQuestion = `${num1} ${num2}`;
  const correctAnswer = `${nod(num1, num2)}`;

  return [someQuestion, correctAnswer];
};

const evenGcd = () => {
  gameBrain(gameRules, brainCheck);
};
export default evenGcd;
