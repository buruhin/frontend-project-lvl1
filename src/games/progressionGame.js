import readlineSync from 'readline-sync';
import {
  GAME_LENGTH, getName, getRandomInt, checkResult,
} from '../index.js';

export default () => {
  const username = getName();
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < GAME_LENGTH) {
    let firstNumber = getRandomInt(10);
    const x = getRandomInt(3) + 1;
    const position = getRandomInt(10);
    const numbers = [];
    for (let i = 0; i < 11; i += 1) {
      const newNumber = firstNumber + x;
      numbers[i] = newNumber;
      firstNumber = newNumber;
    }
    const rightAnswer = numbers[position];
    numbers[position] = '...';
    console.log(`Question: ${numbers}`);
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
