// eslint-disable-next-line import/named
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named
import {
  greeting, getRandomNumber, getRandomString, getRandomExepcion,
} from '../index.js';

const calculate = () => {
  const nameUser = greeting();

  /* console.log(correctAnswer); */

  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const randomNum1 = getRandomNumber(50);
    const randomNum2 = getRandomNumber(50);
    const numsStr = getRandomString(randomNum1, randomNum2);

    console.log(`Question: ${numsStr}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getRandomExepcion(numsStr);
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      i -= i;
    }
  }
  return console.log(`Congratulations, ${nameUser}!`);
};

export default calculate;
