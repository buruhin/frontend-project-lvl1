import readlineSync from 'readline-sync';

export const GAME_LENGTH = 3;

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

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

export const checkResult = (username, rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};
