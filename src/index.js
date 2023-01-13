import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (concept, roundGeneration) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(concept);

  for (let i = 0; i < roundsCount; i += 1) {
    const [someQuestion, correctAnswer] = roundGeneration();
    console.log(`Question: ${someQuestion}`);
    const question = readlineSync.question('Your answer: ');
    if (question !== correctAnswer) {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (question === correctAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
