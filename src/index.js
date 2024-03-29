import readlineSync from 'readline-sync';

const checkAnswer = (userAnswer, answer) => {
  if (typeof answer === 'number') {
    return Number(userAnswer) === answer;
  }
  return userAnswer === answer;
};

export const app = (properties) => {
  const [descriptions, gameLogic] = properties;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(descriptions);

  for (let i = 0; i < 3; i += 1) {
    const [task, answer] = gameLogic();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, answer)) {
      console.log('Correct');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
