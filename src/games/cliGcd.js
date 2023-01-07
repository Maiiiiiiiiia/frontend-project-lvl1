import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';


const nod = (number1, number2) => {
  var gcd;
  while (number1 != number2) {
    if (number1 > number2) {
      number1 = number1 - number2;
    } else {
      number2 = number2 - number1;
    }
  }
  return gcd = number1;
};



const brainCheck = () => {
  const number1 = getRandomArbitrary(1, 50);
  const number2 = getRandomArbitrary(1, 50);
  const someQuestion = `${number1} ${number2}`;
  const correctAnswer = `${nod(number1, number2)}`;

  return [someQuestion, correctAnswer];
};

const evenGcd = () => {
  gameBrain(gameRules, brainCheck);
}
export default evenGcd;
