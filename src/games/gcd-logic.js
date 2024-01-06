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
  const biggestNum = getRandomNumber(50);
  const smallerNum = getRandomNumber(50);
  return [`${biggestNum} ${smallerNum}`, gcd(biggestNum, smallerNum)];
};

export default () => app([description, gameLogic]);
