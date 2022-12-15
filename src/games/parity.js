import readlineSync from 'readline-sync';

const parityGame = () => {
  const checkUserName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    return userName;
  };
  const name = checkUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (randomNum === 0 && answer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (randomNum % 2 !== 0 && answer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } else if (randomNum % 2 === 0 && answer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } else {
      return null;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default parityGame;
