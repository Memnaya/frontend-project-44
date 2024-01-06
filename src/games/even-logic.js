import { app, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameLogic = () => {
  const task = getRandomNumber();
  return [task, isEven(task)];
};

export default () => app([description, gameLogic]);
