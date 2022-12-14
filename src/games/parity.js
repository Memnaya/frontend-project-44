import readlineSync from 'readline-sync';

const parityGame = () => {
  const checkUserName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    return userName;
  };
  const name = checkUserName();
  console.log("Answer 'yes' if number even otherwise answer 'no'.");

  let i = 0;

  while (i <= 3) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (randomNum % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      i -= i;
    } else if (randomNum % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      i -= i;
    }
    if (i === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
  }

  return null;
};

export default parityGame;
