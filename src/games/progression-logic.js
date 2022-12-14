import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, createProgression } from '../index.js';

const getProgression = () => {
  const userName = greeting();

  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const randomNum = getRandomNumber(30);
    const strOfNumsAndCorrectAnswer = createProgression(randomNum);
    console.log(`Question: ${strOfNumsAndCorrectAnswer[0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = strOfNumsAndCorrectAnswer[1];
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      i -= i;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getProgression;
