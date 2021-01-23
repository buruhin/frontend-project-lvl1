import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, checkResult, getRandomInt,
} from '../index.js';

export const getExpression = () => {
  const a = getRandomInt(10);
  const b = getRandomInt(10);
  const randomNumber = getRandomInt(3);
  switch (randomNumber) {
    case 0: {
      return [`${a} + ${b}`, a + b];
    }
    case 1: {
      return [`${a} - ${b}`, a - b];
    }
    default: {
      return [`${a} * ${b}`, a * b];
    }
  }
};

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const [expression, rightAnswer] = getExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
