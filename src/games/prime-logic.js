import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, primeNumbersCheck } from '../index.js';

const getPrime = () => {
  const userName = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let i = 0;
  while (i < 3) {
    const randomNum = getRandomNumber(100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = primeNumbersCheck(randomNum);
    if ((answer === 'yes' && correctAnswer === true) || (answer === 'no' && correctAnswer === false)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      i -= i;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getPrime;
