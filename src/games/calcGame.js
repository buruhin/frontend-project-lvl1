import readlineSync from 'readline-sync';
import { GAME_LENGTH, getName, getExpression } from '../index.js';

export default () => {
  const username = getName();
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const expression = getExpression();
    console.log(`Question: ${expression[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = expression[1];
    if (rightAnswer === Number(userAnswer)) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};
