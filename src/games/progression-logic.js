import { app, getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (number) => {
  const minLength = 5;
  const maxLength = 10;
  const rangeOfProg = Math.round(Math.random() * (maxLength - minLength) + minLength);
  const step = getRandomNumber(7);
  let numsOfProg = number;
  const arrOfProg = [];
  arrOfProg.push(numsOfProg);
  let n = 1;
  while (n < rangeOfProg) {
    numsOfProg += step;
    arrOfProg.push(numsOfProg);
    n += 1;
  }
  const randomIndex = Math.round(Math.random() * (rangeOfProg - 1));
  const correctAnswer = arrOfProg[randomIndex];
  arrOfProg.splice(randomIndex, 1, '..');
  const arrOfStr = arrOfProg.join(' ');
  const result = [];
  result.push(arrOfStr, correctAnswer);
  return result;
};

const gameLogic = () => {
  const progression = createProgression(getRandomNumber(30));
  return [progression[0], progression[1]];
};

export default () => app([description, gameLogic]);
