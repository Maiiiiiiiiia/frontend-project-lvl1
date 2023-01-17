import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 !== 0) {
    const k = num1 % num2;
    return calculateGCD(num2, k);
  }
  return num1;
};

const generateData = () => {
  const maxValueOfRandomNum = 50;
  const firstRandomNum = getRandomNumber(1, maxValueOfRandomNum);
  const secondRandomNum = getRandomNumber(1, maxValueOfRandomNum);
  const someQuestion = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = `${calculateGCD(firstRandomNum, secondRandomNum)}`;

  return [someQuestion, correctAnswer];
};

const runGameGcd = () => {
  runGame(gameRule, generateData);
};
export default runGameGcd;
