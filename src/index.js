import readlineSync, { question } from 'readline-sync';

const mainFunc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameRules);

    for (let i = 0; i < roundsCount; i += 1) {
        const questionNum = getRandomArbitrary(1, 99);
        const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${questionNum}`);
        const question = readlineSync.question('Your answer: ');

}
};

export default mainFunc;