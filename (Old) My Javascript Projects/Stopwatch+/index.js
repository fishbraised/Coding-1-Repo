let pauseEl = document.getElementById("pauseB");
let startEl = document.getElementById("startB");
let resetEl = document.getElementById("resetB");
let timerEl = document.getElementById("timerH");
let timerId;

let seconds = 0;
let minutes = 0;
let hours = 0;
let upSeconds = 0;
let upMinutes = 0;
let upHours = 0;

function pause() {
  pauseEl.disabled = true;
  startEl.disabled = false;
  clearTimeout(timerId);
}

function start() {
  startEl.disabled = true;
  pauseEl.disabled = false;
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }

  if (seconds < 10) {
    upSeconds = "0" + seconds;
  } else {
    upSeconds = seconds;
  }

  if (minutes < 10) {
    upMinutes = "0" + minutes;
  } else {
    upMinutes = minutes;
  }

  if (hours < 10) {
    upHours = "0" + hours;
  } else {
    upHours = hours;
  }

  timerEl.textContent = upHours + " : " + upMinutes + " : " + upSeconds;
  timerId = setTimeout(start, 1000);
}

function reset() {
  pauseEl.disabled = false;
  startEl.disabled = false;
  clearTimeout(timerId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerEl.textContent = "00 : 00 : 00";
}
