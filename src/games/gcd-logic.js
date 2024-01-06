import { app, getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (biggestNum, smallerNum) => {
  let newBiggestNum = biggestNum;
  let newSmallerNum = smallerNum;
  if (biggestNum < smallerNum) {
    const rememberNum = newBiggestNum;
    newBiggestNum = newSmallerNum;
    newSmallerNum = rememberNum;
  }
  while (newBiggestNum !== newSmallerNum) {
    newBiggestNum -= newSmallerNum;
    if (newBiggestNum < newSmallerNum) {
      const i = newBiggestNum;
      newBiggestNum = newSmallerNum;
      newSmallerNum = i;
    }
  }
  return newBiggestNum;
};
const gameLogic = () => {
  const num1 = getRandomNumber(50);
  const num2 = getRandomNumber(50);
  const task = `${num1} ${num2}`;
  return [task, gcd(num1, num2)];
};

export default () => app([description, gameLogic]);
