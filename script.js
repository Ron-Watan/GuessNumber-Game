'strict mode';

const btn = document.querySelector('#btn');
const again = document.querySelector('#again');
const inputNumber = document.querySelector('#input-number');
const display = document.querySelector('#display');
const flick = document.querySelector('.display');

const score = document.querySelector('#score');
const lowHeight = document.querySelector('#low-height');
const heightScore = document.querySelector('#hight-score');

let numberForRandom = 20;
let randomNumber = Math.trunc(Math.random() * numberForRandom) + 1;
let scoreData = 20;
score.innerHTML = scoreData;
let heightScoreData = 0;
heightScore.innerHTML = heightScoreData;

const checkNumber = function () {
  if (inputNumber.value == randomNumber && score.innerHTML > 0) {
    display.innerHTML = 'Correct!';

    btn.classList.add('rotate');
    again.classList.add('roback');
    display.classList.add('textWin');
    flick.classList.add('flick');
    randomNumber = Math.trunc(Math.random() * numberForRandom) + 1;
    if (scoreData > heightScoreData) heightScoreData = scoreData;
  } else if (inputNumber.value >= randomNumber && score.innerHTML > 0) {
    // lowHeight.innerHTML = 'Too Height!';
    display.innerHTML = 'Too High!';
    display.classList.add('textMotion');

    scoreData--;
  } else if (inputNumber.value <= randomNumber && score.innerHTML > 0) {
    // lowHeight.innerHTML = 'Too Low!';
    display.innerHTML = 'Too Low!';
    display.classList.add('textMotion');

    scoreData--;
  } else {
    score.innerHTML = 'Error!';
  }
  if (scoreData == 0) {
    display.innerHTML = 'Game Over!';
    display.classList.add('textMotion');

    score.innerHTML = scoreData;
    btn.classList.add('rotate');
    again.classList.add('roback');
  }
  score.innerHTML = scoreData;
  heightScore.innerHTML = heightScoreData;
};
const changeText = function () {
  display.classList.remove('textMotion');
};

const tryAgain = function () {
  randomNumber = Math.trunc(Math.random() * numberForRandom) + 1;
  display.innerHTML = 'Number ??';
  display.classList.add('textMotion');

  scoreData = 20;
  score.innerHTML = scoreData;
  inputNumber.value = 0;
  btn.classList.remove('rotate');
  again.classList.remove('roback');
  flick.classList.remove('flick');
  display.classList.remove('textWin');
};

const increaseNumber = function () {
  display.classList.remove('textMotion');
  if (inputNumber.value < 20) {
    inputNumber.value++;
  }
};
const decreaseNumber = function () {
  display.classList.remove('textMotion');
  if (inputNumber.value > 0) {
    inputNumber.value--;
  }
};

// btn.addEventListener('click', function () {
//   console.log('inp = ' + inputNumber.value);
//   console.log('ran = ' + randomNumber);
//   if (inputNumber.value == randomNumber) {
//     display.innerHTML = inputNumber.value;
//   }
// });
