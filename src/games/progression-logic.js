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
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getProgression;
