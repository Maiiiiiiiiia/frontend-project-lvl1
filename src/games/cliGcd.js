import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
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
