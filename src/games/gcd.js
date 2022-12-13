import readlineSync from 'readline-sync';
import { greeting, randomNum, nod } from '../index.js';

const getGcdOfNums = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const randomNum1 = randomNum(); // 40
    const randomNum2 = randomNum(); // 30
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = nod(randomNum1, randomNum2);
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      i -= i;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default getGcdOfNums;
