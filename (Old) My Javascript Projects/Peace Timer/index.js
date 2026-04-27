let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let counter = document.getElementById("counter");
let timerId; // undefined ---. 20s timerid

twentySecondsBtn.addEventListener("click", runTwentySeconds);
thirtySecondsBtn.addEventListener("click", runThirtySeconds);
fortySecondsBtn.addEventListener("click", runFortySeconds);
oneMinuteBtn.addEventListener("click", runOneMinute);

function startTimer(time) {
  // counter.textContent = time + " seconds left.";
  console.log(time);
  timerId = setInterval(function () {
    time--;
    // console.log(time);
    counter.textContent = time + " seconds left.";
    if (time === 0) {
      clearInterval(timerId);
      counter.textContent = "Your moment is complete!";
    }
  }, 1000);
}

function runTwentySeconds() {
  clearInterval(timerId);
  startTimer(20);
  console.log("runTwentySeconds");
}

function runThirtySeconds() {
  clearInterval(timerId);
  startTimer(30);
}

function runFortySeconds() {
  clearInterval(timerId);
  startTimer(40);
}

function runOneMinute() {
  clearInterval(timerId);
  startTimer(60);
}
