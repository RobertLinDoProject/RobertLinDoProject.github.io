let totalSeconds = 25 * 60;
let timerInterval;
let roundCounter = 0;
let iterCounter = 0;
let isReset = true;
let isRest = false;

const minuteTen = document.querySelector(".minute_ten_digits");
const minuteOne = document.querySelector(".minute_digit");
const SecondTen = document.querySelector(".second_ten_digits");
const SecondOne = document.querySelector(".second_digit");
const startButton = document.querySelector(".mid");
const pauseButton = document.querySelector(".left");
const resetButton = document.querySelector(".right");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const iter = document.querySelector(".mid_one h2");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  if (isRest !== true) {
    if (isReset === true) {
      timerInterval = setInterval(updateTimer, 1000);
      updateTimer();
    } else {
      alert("Plz Reset Timer");
    }
  } else {
    totalSeconds = 5 * 60;
    timerInterval = setInterval(rest, 1000);
    rest();
  }
}

function pauseTimer() {
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
  if (roundCounter === 0) {
    t1.style = "background-color: white";

    t2.style = "background-color: white";

    t3.style = "background-color: white";

    t4.style = "background-color: white";
  }
  clearInterval(timerInterval);
  totalSeconds = 25 * 60;
  isReset = true;
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;

  minuteTen.innerText = minutesTens;
  minuteOne.innerText = minutesOnes;
  SecondTen.innerText = secondsTens;
  SecondOne.innerText = secondsOnes;

  if (totalSeconds === 0) {
    clearInterval(timerInterval);
    alert("Times up, Reset timer, or Start To Break");
    if (isRest === false) {
      roundCounter++;
      if (roundCounter === 1) {
        t1.style = "background-color: red";
      } else if (roundCounter === 2) {
        t2.style = "background-color: red";
      } else if (roundCounter === 3) {
        t3.style = "background-color: red";
      } else if (roundCounter === 4) {
        t4.style = "background-color: red";
        resetRound(roundCounter);
      }
      isRest = true;
    }

    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    isReset = false;
  } else {
    totalSeconds--;
  }
}

function resetRound(round) {
  if (round === 4) {
    roundCounter = 0;
    iterCounter++;
    iter.innerText = iterCounter;
  }
}

function rest() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;

  minuteTen.innerText = minutesTens;
  minuteOne.innerText = minutesOnes;
  SecondTen.innerText = secondsTens;
  SecondOne.innerText = secondsOnes;

  if (totalSeconds === 0) {
    isRest = false;
    clearInterval(timerInterval);
    alert("Rest Times up! Plz Reset To Start Working!");
  } else {
    totalSeconds--;
  }
}
