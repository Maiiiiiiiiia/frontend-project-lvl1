import readlineSync, { question } from 'readline-sync';
import getRandomArbitrary from '../getRandomArbitrary.js';


const evenGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
 
  for (let i = 0; i < roundsCount; i += 1) {
        const number1 = getRandomArbitrary(1, 50);
        const number2 = getRandomArbitrary(1, 50);
        console.log(`Question: ${number1} ${number2}`);
        const question = readlineSync.question('Your answer: ');

        const correctAnswer = `${instruction(number1, randomOperator, number2)}`;

        
  }
    
};

export default evenGcd;