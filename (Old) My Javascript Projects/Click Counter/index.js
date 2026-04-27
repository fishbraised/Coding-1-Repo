let counterValueEl = document.getElementById("counterValue");
let incrementBtnEl = document.getElementById("incrementBtn");

onStart();
incrementBtnEl.onclick = increaseCounter;

function onStart() {
  let clickCount = JSON.parse(localStorage.getItem("clickCount"));
  if (clickCount === null) {
    counterValueEl.textContent = 0;
    return;
  }
  counterValue.textContent = clickCount;
}

function increaseCounter() {
  counterValue.textContent++;
  localStorage.setItem("clickCount", JSON.stringify(counterValue.textContent));
}

function clearStorage() {
  counterValueEl.textContent = 0;
  localStorage.removeItem("clickCount");
}
