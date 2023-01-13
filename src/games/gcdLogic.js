import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const concept = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 !== 0) {
    const k = num1 % num2;
    return calculateGCD(num2, k);
  }
  return num1;
};

const roundGeneration = () => {
  const firstRandomNum = getRandomNumber(1, 50);
  const secondRandomNum = getRandomNumber(1, 50);
  const someQuestion = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = `${calculateGCD(firstRandomNum, secondRandomNum)}`;

  return [someQuestion, correctAnswer];
};

const gameGcd = () => {
  engine(concept, roundGeneration);
};
export default gameGcd;
