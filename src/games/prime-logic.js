import { app, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameLogic = () => {
  const task = getRandomNumber();
  return [task, isPrime(task)];
};

export default () => app([description, gameLogic]);
