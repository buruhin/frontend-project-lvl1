import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getRandomInt, isEven,
} from '../index.js';

export default () => {
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    const number = getRandomInt(100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = isEven(number);
    if (rightAnswer === userAnswer) {
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
