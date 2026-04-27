let counterEl = document.getElementById("counter");
let buttonEl = document.getElementById("button");
let timerId = setInterval(increase, 1000);

buttonEl.onclick = clear;

function increase() {
  let prev = counterEl.textContent;
  prev = parseInt(prev) + 1;
  counterEl.textContent = prev;
}

function clear() {
  counterEl.textContent = 0;
  clearInterval(timerId);
}
