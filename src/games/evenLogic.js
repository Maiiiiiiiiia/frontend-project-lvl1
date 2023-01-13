import getRandomNumber from '../getRandomNumber.js';
import engine from '../index.js';

const concept = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityСheck = (number) => {
  const parity = number % 2 === 0 ? 'yes' : 'no';
  return parity;
};

const roundGeneration = () => {
  const questionNum = getRandomNumber(1, 99);
  const someQuestion = `${questionNum}`;
  const correctAnswer = parityСheck(questionNum);
  return [someQuestion, correctAnswer];
};

const gameEven = () => {
  engine(concept, roundGeneration);
};

export default gameEven;
