let startButtonEl = document.getElementById("startButton");
let stopButtonEl = document.getElementById("stopButton");
let resetButtonEl = document.getElementById("resetButton");
let timerEl = document.getElementById("timerHeading");

startButtonEl.onclick = onStart;
stopButtonEl.onclick = onStop;
resetButtonEl.onclick = onReset;

let seconds = 0;
let updatedSeconds = 0;
let minutes = 0;
let updatedMinutes = 0;
let hours = 0;
let updatedHours = 0;
let timerId;

function onStart() {
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  resetButtonEl.disabled = false;
  startButtonEl.style.backgroundColor = "green";
  stopButtonEl.style.backgroundColor = "#cccccc";
  resetButtonEl.style.backgroundColor = "#cccccc";
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
    updatedSeconds = "0" + seconds;
  } else {
    updatedSeconds = seconds;
  }

  if (minutes < 10) {
    updatedMinutes = "0" + minutes;
  } else {
    updatedMinutes = minutes;
  }

  if (hours < 10) {
    updatedHours = "0" + hours;
  } else {
    updatedHours = hours;
  }

  timerEl.textContent =
    updatedHours + ":" + updatedMinutes + ":" + updatedSeconds;
  timerId = setTimeout(onStart, 1000);
}

function onStop() {
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  resetButtonEl.disabled = false;
  startButtonEl.style.backgroundColor = "#cccccc";
  stopButtonEl.style.backgroundColor = "yellow";
  resetButtonEl.style.backgroundColor = "#cccccc";
  clearTimeout(timerId);
}

function onReset() {
  startButtonEl.disabled = false;
  stopButtonEl.disabled = false;
  startButtonEl.style.backgroundColor = "#cccccc";
  stopButtonEl.style.backgroundColor = "#cccccc";
  resetButtonEl.style.backgroundColor = "red";
  clearTimeout(timerId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerEl.textContent = "00:00:00";
  setTimeout(function () {
    resetButtonEl.style.backgroundColor = "#cccccc";
  }, 1000);
}

// Schedulers
//These are used to schedule how the callback function has to be executed

// - setInterval(callbackFunction, timeInMS)
// - clearInterval(timerId)
// - setTimeout(callbackFunction, timeInMS)
// - clearTimeout(timerId)
