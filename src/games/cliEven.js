import readlineSync, { question } from 'readline-sync';
import getRandomArbitrary from '../getRandomArbitrary.js';

const roundsCount = 3;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameRules);

    for (let i = 0; i < roundsCount; i += 1) {
        const questionNum = getRandomArbitrary(1, 99);
        const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${questionNum}`);
        const question = readlineSync.question('Your answer: ');

        if (question != correctAnswer) {
          console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${name}!`);
        }
        //if (question === 'no' && questionNum % 2 == 0) {
          //console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            //console.log(`Let's try again, ${name}!`);
            //return;
      //} if (question === 'yes' && questionNum % 2 != 0) {
        //    console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          //  console.log(`Let's try again, ${name}!`);
            //return;
      //} if (question != 'yes' && question != 'no') {
        //console.log(`${question} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        //console.log(`Let's try again, ${name}!`);
        //return;
    //}
      console.log('Correct!');
    } 
   console.log(`Congratulations, ${name}!`);
};

export default evenEven;


