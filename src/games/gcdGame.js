import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getRandomInt, checkResult,
} from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export default () => {
  const username = getName();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const a = getRandomInt(100);
    const b = getRandomInt(100);
    console.log(`Question: ${a} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = gcd(a, b);
    const isRight = checkResult(username, rightAnswer, Number(userAnswer));
    if (isRight) {
      counter += 1;
    } else {
      return;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};
