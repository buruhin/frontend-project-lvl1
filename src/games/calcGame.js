import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getExpression, checkResult,
} from '../index.js';

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const expression = getExpression();
    console.log(`Question: ${expression[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = expression[1];
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
