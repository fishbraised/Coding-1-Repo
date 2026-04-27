let diffuserEl = document.getElementById("diffuser");
let timerEl = document.getElementById("timer");
let timerId = setInterval(countdown, 1000);

diffuserEl.addEventListener("keydown", diffuse);

function countdown() {
  let count = timerEl.textContent;
  count--;
  timerEl.textContent = count;

  if (count === 0) {
    timerEl.textContent = "BOOM!";
    clearInterval(timerId);
  }
}

function diffuse(event) {
  if (
    event.key === "Enter" &&
    diffuserEl.value === "diffuse" &&
    timerEl.textContent !== "BOOM!"
  ) {
    timerEl.textContent = "Bomb has been diffused.";
    clearInterval(timerId);
  }
}
