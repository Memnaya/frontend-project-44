/* eslint-disable default-case */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const randomNum = () => Math.floor(Math.random() * 50);

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
