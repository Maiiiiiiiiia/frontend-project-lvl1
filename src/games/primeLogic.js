import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const someQuestion = getRandomNumber(1, 50);
  const correctAnswer = isPrime(someQuestion) ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const runGamePrime = () => {
  runGame(gameRule, generateData);
};
export default runGamePrime;
