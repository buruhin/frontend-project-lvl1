import readlineSync from 'readline-sync';

export const GAME_LENGTH = 3;

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const checkResult = (username, rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};
