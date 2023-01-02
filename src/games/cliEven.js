import readlineSync, { question } from 'readline-sync';

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const roundsCount = 3;

const evenCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < roundsCount; i += 1) {
        const questionNum = getRandomArbitrary(1, 99);
        const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${questionNum}`);
        const question = readlineSync.question('Your answer: ');

        if (question === 'no' && questionNum % 2 == 0) {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log(`Let's try again, ${name}!`);
            return;
      } if (question === 'yes' && questionNum % 2 != 0) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log(`Let's try again, ${name}!`);
            return;
      } if (question != 'yes' && question != 'no') {
        console.log(`${question} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    }
      console.log('Correct!');
    } 
   console.log(`Congratulations, ${name}!`);
};

export default evenCalc;


