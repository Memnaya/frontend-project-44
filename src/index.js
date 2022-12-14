/* eslint-disable default-case */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandomNumber = (max) => {
  const number = Math.round(Math.random() * max);
  return number;
};

export const getRandomString = (firstNum, secondNum) => {
  const operandList = ['+', '-', '*'];
  const randomOperandIndex = Math.floor(Math.random() * operandList.length);
  const operand = operandList[randomOperandIndex];
  let string = '';
  switch (operand) {
    case '+':
      string = `${firstNum} + ${secondNum}${string}`;
      return string;
    case '-':
      string = `${firstNum} - ${secondNum}${string}`;
      return string;
    case '*':
      string = `${firstNum} * ${secondNum}${string}`;
      return string;
  }
  return string;
};

export const getRandomExepcion = (str) => {
  const strBecomeArr = str.split(' ');
  let expression = 0;
  if (strBecomeArr.includes('+')) {
    expression += Number(strBecomeArr[0]) + Number(strBecomeArr[2]);
  } if (strBecomeArr.includes('-')) {
    expression += Number(strBecomeArr[0]) - Number(strBecomeArr[2]);
  } if (strBecomeArr.includes('*')) {
    expression += Number(strBecomeArr[0]) * Number(strBecomeArr[2]);
  }
  return expression;
};

/* export const gamesLogic = (answer, correctAnswer) => {
    let i = 0;
    while (i <= 3) {
        if (answer === correctAnswer) {
            console.log('Correct!');
            i += 1;
        }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${nameUser}!`);
    i -= i;
    }
return console.log(`Congratulations, ${nameUser}!`);
}; */

export const nod = (biggestNum, smallerNum) => {
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

export const createProgression = (number) => {
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

export const primeNumbersCheck = (number) => {
  const primeArr = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];
  return primeArr.includes(number);
};
