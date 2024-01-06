// eslint-disable-next-line import/named
import { app, getRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

export const getRandomString = (firstNum, secondNum) => {
  const operandList = ['+', '-', '*'];
  const randomOperandIndex = getRandomNumber(operandList.length);
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
    default:
  }
  return string;
};

const getRandomExepcion = (str) => {
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

const gameLogic = () => {
  const task = getRandomString(getRandomNumber(50), getRandomNumber(50));
  return [task, getRandomExepcion(task)];
};

export default () => app([description, gameLogic]);
