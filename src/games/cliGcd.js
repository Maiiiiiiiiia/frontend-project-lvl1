import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (numOne, numTwo) => {
  while (numOne !== numTwo) {
    if (numOne > numTwo) {
      numOne -= numTwo;
    } else {
      numTwo -= numOne;
    }
  }
  return numOne;
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
