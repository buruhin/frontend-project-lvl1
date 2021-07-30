import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getRandomInt, checkResult,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

export default () => {
  const username = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const x = getRandomInt(100);
    const rightAnswer = isPrime(x);
    console.log(`Question: ${x}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRight = checkResult(username, rightAnswer, userAnswer);
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
