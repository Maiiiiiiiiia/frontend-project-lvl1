import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    if (num === 1) {
        return 'no';
    } 
    if (num === 2) {
        return 'yes';
    } 
    if (num % 2 === 0) {
        return 'no';
    }
    else {
    for (let i = 3; i < num; i ++) {
    if (num % i === 0) {
        return 'no';
    } 
    }
        return 'yes';   
    }
  };

const brainCheck = () => {
  const number = getRandomArbitrary(1, 50);

  const someQuestion = `${number}`;
  const correctAnswer = `${isPrime(number)}`;

  return [someQuestion, correctAnswer];
};

const evenPrime = () => {
    gameBrain(gameRules, brainCheck);
  }
  export default evenPrime;
