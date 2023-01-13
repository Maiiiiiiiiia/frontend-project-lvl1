import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const concept = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const roundGeneration = () => {
  const number = getRandomNumber(1, 50);
  const someQuestion = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const gamePrime = () => {
  engine(concept, roundGeneration);
};
export default gamePrime;
