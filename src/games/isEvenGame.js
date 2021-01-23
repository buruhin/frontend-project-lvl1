import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getRandomInt, checkResult,
} from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const number = getRandomInt(100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = isEven(number);
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
