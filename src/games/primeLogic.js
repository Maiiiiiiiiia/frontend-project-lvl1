import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateData = () => {
  const randomNumber = getRandomNumber(1, 50);
  const someQuestion = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const runGamePrime = () => {
  runGame(gameRule, generateData);
};
export default runGamePrime;
