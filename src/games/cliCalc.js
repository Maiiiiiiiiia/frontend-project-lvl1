import readlineSync, { question } from 'readline-sync';
import getRandomArbitrary from '../getRandomArbitrary.js';

const instruction = (number1, operator, number2) => {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        return null;
    }
};

const roundsCount = 3;
const gameRules = 'What is the result of the expression?';

function evenCalc() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameRules);

    for (let i = 0; i < roundsCount; i += 1) {
        const operations = ['+', '-', '*'];
        const number1 = getRandomArbitrary(1, 50);
        const number2 = getRandomArbitrary(1, 50);
        const randomOperator = operations[getRandomArbitrary(0, 2)];

        console.log(`Question: ${number1} ${randomOperator} ${number2}`);
        const question = readlineSync.question('Your answer: ');

        const correctAnswer = `${instruction(number1, randomOperator, number2)}`;

        if ( question != correctAnswer ) {
            console.log(`${question} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        } 
        if ( question === correctAnswer) {
         console.log('Correct!');
        }
        
    }
    console.log(`Congratulations, ${name}!`);
};

export default evenCalc;