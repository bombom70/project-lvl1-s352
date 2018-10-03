import readlineSync from 'readline-sync';

const sign = () => {
  const randomSign = Math.floor(Math.random() * 3) + 1;

  let randSign;

  if (randomSign === 1) {
    randSign = '+';
  } else if (randomSign === 2) {
    randSign = '-';
  } else {
    randSign = '*';
  }

  return randSign;
};

const calcNum = (name, counter) => {
    const num1 = Math.floor(Math.random() * 30);

    const num2 = Math.floor(Math.random() * 30);

    const randomSign = sign();

    let result;

    console.log(`Question: ${num1} ${randomSign} ${num2}`);

    if (randomSign === '+') {
      result = num1 + num2;
    } else if (randomSign === '-') {
      result = num1 - num2;
    } if (randomSign === '*') {
      result = num1 * num2;
    }

    const yoursAnswer = readlineSync.question('Your answer: ');

    for (let i = 0; i < counter; i += 1) {
    	if (yoursAnswer === result) {
    		console.log('Correct!');
    	} else {
    		console.log(`${yoursAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, {name}!`);
    		return;
    	}
    }
    console.log('Congratulations, ${name}!');
};

export default calcNum;