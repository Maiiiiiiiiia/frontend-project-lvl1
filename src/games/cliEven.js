import getRandomArbitrary from '../getRandomArbitrary.js';
import gameBrain from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainCheck = () => {
  const questionNum = getRandomArbitrary(1, 99);
  const someQuestion = `${questionNum}`;
  const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
  return [someQuestion, correctAnswer];
};

const evenEven = () => {
  gameBrain(gameRules, brainCheck);
};

export default evenEven;
