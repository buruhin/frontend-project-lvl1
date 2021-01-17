import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!!!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const number = getRandomInt(100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = isEven(number);
    if (userAnswer === rightAnswer) {
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
