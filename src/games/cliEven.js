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
}
export default evenEven;
//const evenEven = () => {
//  console.log('Welcome to the Brain Games!');
// const name = readlineSync.question('May I have your name? ');
//  console.log(`Hello, ${name}!`);
//  console.log(gameRules);
  
//    for (let i = 0; i < roundsCount; i += 1) {
//        const questionNum = getRandomArbitrary(1, 99);
//        const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
//        console.log(`Question: ${questionNum}`);
//        const question = readlineSync.question('Your answer: ');

//        if (question !== correctAnswer) {
//          console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//          console.log(`Let's try again, ${name}!`);
//          return;
//        }
        
//      console.log('Correct!');
//    } 
//   console.log(`Congratulations, ${name}!`);
//};




